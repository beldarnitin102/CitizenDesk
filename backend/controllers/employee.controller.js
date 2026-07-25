const Complaint = require("../models/Complaint");
const ComplaintStatusLog = require("../models/ComplaintStatusLog");

const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// ================= EMPLOYEE DASHBOARD =================

exports.getEmployeeDashboard = asyncHandler(async (req, res) => {
  const departmentId = req.user.department._id;

  // Complaint Statistics
  const stats = await Complaint.aggregate([
    {
      $match: {
        department: departmentId,
      },
    },
    {
      $group: {
        _id: "$status",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  const statistics = {
    totalComplaints: 0,
    pendingComplaints: 0,
    assignedComplaints: 0,
    inProgressComplaints: 0,
    resolvedComplaints: 0,
  };

  stats.forEach((item) => {
    statistics.totalComplaints += item.count;

    switch (item._id) {
      case "PENDING":
        statistics.pendingComplaints = item.count;
        break;

      case "ASSIGNED":
        statistics.assignedComplaints = item.count;
        break;

      case "IN_PROGRESS":
        statistics.inProgressComplaints = item.count;
        break;

      case "RESOLVED":
        statistics.resolvedComplaints = item.count;
        break;

      default:
        break;
    }
  });

  // Recent Complaints
  const recentComplaints = await Complaint.find({
    department: departmentId,
  })
    .populate("citizen", "name phone")
    .sort({ createdAt: -1 })
    .limit(5);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        department: req.user.department,

        statistics,

        recentComplaints,
      },
      "Employee dashboard fetched successfully",
    ),
  );
});

// ================= GET DEPARTMENT COMPLAINTS =================

exports.getDepartmentComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({
    department: req.user.department._id,
  })
    .populate("citizen", "name email phone")
    .populate("assignedEmployee", "name email")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        complaints,
        "Department complaints fetched successfully",
      ),
    );
});

// ================= GET COMPLAINT DETAILS =================

exports.getComplaintDetails = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const complaint = await Complaint.findOne({
    _id: id,
    department: req.user.department._id,
  })
    .populate("citizen", "name email phone")
    .populate("department")
    .populate("assignedEmployee", "name email");

  if (!complaint) {
    throw new ApiError(404, "Complaint not found or not in your department");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, complaint, "Complaint details fetched successfully"),
    );
});

// ================= ASSIGN COMPLAINT =================

exports.assignComplaint = asyncHandler(async (req, res) => {

  console.log("============== ASSIGN API ==============");
  console.log(req.params);
  console.log(req.user);
  
  const { id } = req.params;

  const complaint = await Complaint.findOne({
    _id: id,
    department: req.user.department._id,
  });

  console.log("Complaint Status:", complaint?.status);
console.log("Assigned Employee:", complaint?.assignedEmployee);
console.log("Logged Employee:", req.user._id);

  if (!complaint) {
    throw new ApiError(404, "Complaint not found or not in your department");
  }

  if (complaint.status !== "PENDING") {
    throw new ApiError(400, "Only pending complaints can be assigned.");
  }

  if (complaint.assignedEmployee) {
    throw new ApiError(400, "Complaint already assigned.");
  }
  complaint.assignedEmployee = req.user._id;
  complaint.status = "ASSIGNED";

  await complaint.save();

  await ComplaintStatusLog.create({
    complaint: complaint._id,
    previousStatus: "PENDING",
    currentStatus: "ASSIGNED",
    remarks: "Complaint assigned",
    changedBy: req.user._id,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, complaint, "Complaint assigned successfully"));
});

// ================= UPDATE STATUS =================

exports.updateComplaintStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status, remarks } = req.body;

  const allowedStatuses = [
    "ASSIGNED",
    "IN_PROGRESS",
    "RESOLVED",
    "REJECTED",
    "CLOSED",
  ];

  if (!allowedStatuses.includes(status)) {
    throw new ApiError(400, "Invalid complaint status");
  }

  const complaint = await Complaint.findOne({
    _id: id,
    department: req.user.department._id,
  });

  if (!complaint) {
    throw new ApiError(404, "Complaint not found or not in your department");
  }

  if (
    complaint.assignedEmployee &&
    complaint.assignedEmployee.toString() !== req.user._id.toString() &&
    req.user.role !== "DEPARTMENT_HEAD" &&
    req.user.role !== "ADMIN"
  ) {
    throw new ApiError(
      403,
      "Only the assigned employee can update this complaint",
    );
  }
  const previousStatus = complaint.status;
  console.log("Previous Status:", previousStatus);
console.log("Requested Status:", status);

  // Allowed workflow
  const statusFlow = {
    PENDING: ["ASSIGNED"],

    ASSIGNED: ["IN_PROGRESS", "REJECTED"],

    IN_PROGRESS: ["RESOLVED", "REJECTED"],

    RESOLVED: ["CLOSED"],

    REJECTED: [],

    CLOSED: [],
  };

  // Check if transition is valid
  if (!statusFlow[previousStatus].includes(status)) {
    throw new ApiError(
      400,
      `Cannot change status from ${previousStatus} to ${status}`,
    );
  }

  complaint.status = status;

  await complaint.save();

  await ComplaintStatusLog.create({
    complaint: complaint._id,
    previousStatus,
    currentStatus: status,
    remarks: remarks || "",
    changedBy: req.user._id,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, complaint, "Complaint status updated successfully"),
    );
});

// ================= GET STATUS HISTORY =================

exports.getComplaintHistory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const complaint = await Complaint.findOne({
    _id: id,
    department: req.user.department._id,
  });

  if (!complaint) {
    throw new ApiError(404, "Complaint not found or not in your department");
  }

  const history = await ComplaintStatusLog.find({
    complaint: id,
  })
    .populate("changedBy", "name email")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(
      new ApiResponse(200, history, "Complaint history fetched successfully"),
    );
});
