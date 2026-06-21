const Complaint = require("../models/Complaint");
const ComplaintStatusLog = require("../models/ComplaintStatusLog");

const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// ================= GET DEPARTMENT COMPLAINTS =================

exports.getDepartmentComplaints = asyncHandler(
  async (req, res) => {
    const complaints = await Complaint.find({
      department: req.user.department,
    })
      .populate("citizen", "name email phone")
      .populate("assignedEmployee", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json(
      new ApiResponse(
        200,
        complaints,
        "Department complaints fetched successfully"
      )
    );
  }
);

// ================= GET COMPLAINT DETAILS =================

exports.getComplaintDetails = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const complaint = await Complaint.findById(id)
      .populate("citizen", "name email phone")
      .populate("department")
      .populate("assignedEmployee", "name email");

    if (!complaint) {
      throw new ApiError(404, "Complaint not found");
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        complaint,
        "Complaint details fetched successfully"
      )
    );
  }
);

// ================= ASSIGN COMPLAINT =================

exports.assignComplaint = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const complaint = await Complaint.findById(id);

    if (!complaint) {
      throw new ApiError(404, "Complaint not found");
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

    return res.status(200).json(
      new ApiResponse(
        200,
        complaint,
        "Complaint assigned successfully"
      )
    );
  }
);

// ================= UPDATE STATUS =================

exports.updateComplaintStatus = asyncHandler(
  async (req, res) => {
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
      throw new ApiError(
        400,
        "Invalid complaint status"
      );
    }

    const complaint = await Complaint.findById(id);

    if (!complaint) {
      throw new ApiError(404, "Complaint not found");
    }

    const previousStatus = complaint.status;

    complaint.status = status;

    await complaint.save();

    await ComplaintStatusLog.create({
      complaint: complaint._id,
      previousStatus,
      currentStatus: status,
      remarks: remarks || "",
      changedBy: req.user._id,
    });

    return res.status(200).json(
      new ApiResponse(
        200,
        complaint,
        "Complaint status updated successfully"
      )
    );
  }
);

// ================= GET STATUS HISTORY =================

exports.getComplaintHistory = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const history = await ComplaintStatusLog.find({
      complaint: id,
    })
      .populate("changedBy", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json(
      new ApiResponse(
        200,
        history,
        "Complaint history fetched successfully"
      )
    );
  }
);