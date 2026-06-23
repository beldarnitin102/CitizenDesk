const Complaint = require("../models/Complaint");
const Department = require("../models/Department");
const aiService = require("../utils/ai.service");
const imagekit = require("../utils/imagekit");

const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// ================= CREATE COMPLAINT =================

exports.createComplaint = asyncHandler(async (req, res) => {
  const { description, location } = req.body;

  if (!description) {
    throw new ApiError(400, "Description is required for the complaint");
  }

  let attachments = [];
  let firstImageBase64 = null;
  let firstImageMimeType = null;

  // Process files if any are uploaded
  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      try {
        const uploadResult = await imagekit.upload({
          file: file.buffer, // upload from memory buffer
          fileName: file.originalname || `complaint_${Date.now()}`,
          folder: "/complaints",
        });
        attachments.push(uploadResult.url);

        // Capture the first image for Gemini Vision analysis
        if (!firstImageBase64 && file.mimetype.startsWith("image/")) {
          firstImageBase64 = file.buffer.toString("base64");
          firstImageMimeType = file.mimetype;
        }
      } catch (uploadError) {
        console.error("ImageKit Upload Error:", uploadError);
        throw new ApiError(500, "Failed to upload attachments");
      }
    }
  }

  // 1. Analyze Complaint with AI (Text + Optional Image)
  let aiData;
  try {
    aiData = await aiService.analyzeComplaint(description, firstImageBase64, firstImageMimeType);
    console.log("✅ AI Analysis Result:", aiData);
  } catch (error) {
    console.error("❌ AI Analysis Failed:", error.message);
    throw new ApiError(500, `AI Analysis Failed: ${error.message}`);
  }

  // 2. Find matching Department based on AI prediction
  let assignedDepartment = null;
  if (aiData.department) {
    const dept = await Department.findOne({
      name: { $regex: new RegExp(aiData.department, "i") }
    });
    if (dept) {
      assignedDepartment = dept._id;
    } else {
      // Fallback: pick the first department or leave it unassigned
      const firstDept = await Department.findOne();
      assignedDepartment = firstDept ? firstDept._id : null;
    }
  }

  // 3. Detect Duplicates
  let duplicateOf = null;
  // Let's check for duplicates in the same village in the last 7 days
  if (location && location.village) {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recentComplaints = await Complaint.find({
      "location.village": location.village,
      status: { $in: ["PENDING", "ASSIGNED", "IN_PROGRESS"] },
      createdAt: { $gte: sevenDaysAgo }
    }).limit(10);
    
    if (recentComplaints.length > 0) {
      duplicateOf = await aiService.detectDuplicate(aiData.description, recentComplaints);
    }
  }

  const year = new Date().getFullYear();
  const complaintNumber = `JAL-${year}-${Date.now()}`;

  const complaint = await Complaint.create({
    complaintNumber,
    title: aiData.title || "Untitled Issue",
    description: aiData.description || description,
    category: aiData.category || "General",
    priority: aiData.priority || "MEDIUM",
    department: assignedDepartment,
    location,
    citizen: req.user._id,
    status: "PENDING",
    attachments,
    duplicateOf: duplicateOf || null,
    originalLanguage: aiData.originalLanguage || "Unknown",
    aiClassification: {
      confidence: 0.9,
      detectedCategory: aiData.category || "General"
    }
  });

  return res.status(201).json(
    new ApiResponse(201, { complaint, aiData }, "Complaint created successfully")
  );
});

// ================= GET MY COMPLAINTS =================

exports.getMyComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({
    citizen: req.user._id,
  })
    .populate("department")
    .populate("assignedEmployee", "name email")
    .sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(
      200,
      complaints,
      "Complaints fetched successfully"
    )
  );
});

// ================= GET COMPLAINT BY ID =================

exports.getComplaintById = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const complaint = await Complaint.findById(id)
      .populate("department")
      .populate("citizen", "name email phone")
      .populate("assignedEmployee", "name email");

    if (!complaint) {
      throw new ApiError(
        404,
        "Complaint not found"
      );
    }

    const isOwner =
      complaint.citizen._id.toString() ===
      req.user._id.toString();

    const isEmployee =
      req.user.role === "EMPLOYEE";

    const isAdmin =
      req.user.role === "ADMIN";

    if (!isOwner && !isEmployee && !isAdmin) {
      throw new ApiError(
        403,
        "Access denied"
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        complaint,
        "Complaint fetched successfully"
      )
    );
  }
);

// ================= UPDATE COMPLAINT =================

exports.updateComplaint = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const complaint =
      await Complaint.findById(id);

    if (!complaint) {
      throw new ApiError(
        404,
        "Complaint not found"
      );
    }

    if (
      complaint.citizen.toString() !==
      req.user._id.toString()
    ) {
      throw new ApiError(
        403,
        "You can update only your complaint"
      );
    }

    if (
      complaint.status !== "PENDING"
    ) {
      throw new ApiError(
        400,
        "Complaint cannot be edited after assignment"
      );
    }

    const updatedComplaint =
      await Complaint.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        updatedComplaint,
        "Complaint updated successfully"
      )
    );
  }
);

// ================= DELETE COMPLAINT =================

exports.deleteComplaint = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const complaint =
      await Complaint.findById(id);

    if (!complaint) {
      throw new ApiError(
        404,
        "Complaint not found"
      );
    }

    if (
      complaint.citizen.toString() !==
      req.user._id.toString()
    ) {
      throw new ApiError(
        403,
        "You can delete only your complaint"
      );
    }

    if (
      complaint.status !== "PENDING"
    ) {
      throw new ApiError(
        400,
        "Complaint cannot be deleted after assignment"
      );
    }

    await Complaint.findByIdAndDelete(id);

    return res.status(200).json(
      new ApiResponse(
        200,
        null,
        "Complaint deleted successfully"
      )
    );
  }
);