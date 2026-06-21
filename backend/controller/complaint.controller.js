const Complaint = require("../models/Complaint");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.createComplaint = asyncHandler(
  async (req, res) => {
    const complaintNumber = `CMP-${Date.now()}`;

    const complaint = await Complaint.create({
      ...req.body,
      complaintNumber,
      citizen: req.user._id,
    });

    return res.status(201).json(
      new ApiResponse(
        201,
        complaint,
        "Complaint created successfully"
      )
    );
  }
);


exports.getMyComplaints = asyncHandler(
  async (req, res) => {
    const complaints = await Complaint.find({
      citizen: req.user._id,
    })
      .populate("department")
      .sort({ createdAt: -1 });

    return res.status(200).json(
      new ApiResponse(
        200,
        complaints,
        "Complaints fetched"
      )
    );
  }
);