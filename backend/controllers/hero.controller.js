const Complaint = require("../models/Complaint");
const Department = require("../models/Department");

const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// ==========================================
// Public Hero Statistics
// ==========================================

exports.getHeroStatistics = asyncHandler(async (req, res) => {
  const totalComplaints = await Complaint.countDocuments();

  const pendingComplaints = await Complaint.countDocuments({
    status: "PENDING",
  });

  const inProgressComplaints = await Complaint.countDocuments({
    status: "IN_PROGRESS",
  });

  const resolvedComplaints = await Complaint.countDocuments({
    status: {
      $in: ["RESOLVED", "CLOSED"],
    },
  });

  const totalDepartments = await Department.countDocuments();

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalComplaints,
        pendingComplaints,
        inProgressComplaints,
        resolvedComplaints,
        totalDepartments,
      },
      "Hero statistics fetched successfully",
    ),
  );
});

exports.getHeroDepartments = asyncHandler(async (req, res) => {
  const departments = await Department.find().sort({ name: 1 });

  const result = await Promise.all(
    departments.map(async (department) => {
      const complaints = await Complaint.countDocuments({
        department: department._id,
      });

      return {
        _id: department._id,

        title: department.name,

        description: department.description,

        email: department.email,

        complaints,
      };
    }),
  );

  return res.status(200).json(
    new ApiResponse(
      200,

      result,

      "Departments fetched successfully",
    ),
  );
});
