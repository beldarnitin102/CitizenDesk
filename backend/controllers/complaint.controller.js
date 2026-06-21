const Complaint = require("../models/Complaint");

const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// ================= CREATE COMPLAINT =================

exports.createComplaint = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    category,
    priority,
    department,
    location,
  } = req.body;

  if (!title || !description || !category) {
    throw new ApiError(
      400,
      "Title, description and category are required"
    );
  }

  const year = new Date().getFullYear();

  const complaintNumber = `JAL-${year}-${Date.now()}`;

  const complaint = await Complaint.create({
    complaintNumber,
    title,
    description,
    category,
    priority,
    department,
    location,
    citizen: req.user._id,
    status: "PENDING",
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      complaint,
      "Complaint created successfully"
    )
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