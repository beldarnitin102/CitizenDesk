const Complaint = require("../models/Complaint");
const ComplaintStatusLog = require("../models/complaintStatusLog");
const User = require("../models/User");
const Department = require("../models/Department");

const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.getDepartmentHeadDashboard = asyncHandler(async (req, res) => {
  const departmentId = req.user.department._id;

  const totalComplaints = await Complaint.countDocuments({
    department: departmentId,
  });

  const pendingComplaints = await Complaint.countDocuments({
    department: departmentId,
    status: "PENDING",
  });

  const assignedComplaints = await Complaint.countDocuments({
    department: departmentId,
    status: "ASSIGNED",
  });

  const inProgressComplaints = await Complaint.countDocuments({
    department: departmentId,
    status: "IN_PROGRESS",
  });

  const resolvedComplaints = await Complaint.countDocuments({
    department: departmentId,
    status: "RESOLVED",
  });

  const closedComplaints = await Complaint.countDocuments({
    department: departmentId,
    status: "CLOSED",
  });

  const totalEmployees = await User.countDocuments({
    department: departmentId,
    role: "EMPLOYEE",
  });

  const resolutionRate =
    totalComplaints === 0
      ? "0.00"
      : (
          ((resolvedComplaints + closedComplaints) / totalComplaints) *
          100
        ).toFixed(2);

  const complaintsByPriority = await Complaint.aggregate([
    {
      $match: {
        department: departmentId,
      },
    },
    {
      $group: {
        _id: "$priority",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  const recentComplaints = await Complaint.find({
    department: departmentId,
  })
    .populate("citizen", "name")
    .populate("assignedEmployee", "name")
    .sort({
      createdAt: -1,
    })
    .limit(5);

  const employeePerformance = await Complaint.aggregate([
    {
      $match: {
        department: departmentId,
        assignedEmployee: {
          $ne: null,
        },
      },
    },

    {
      $group: {
        _id: "$assignedEmployee",

        totalAssigned: {
          $sum: 1,
        },

        resolved: {
          $sum: {
            $cond: [
              {
                $eq: ["$status", "RESOLVED"],
              },
              1,
              0,
            ],
          },
        },

        inProgress: {
          $sum: {
            $cond: [
              {
                $eq: ["$status", "IN_PROGRESS"],
              },
              1,
              0,
            ],
          },
        },
      },
    },
  ]);

  await User.populate(employeePerformance, {
    path: "_id",
    select: "name email",
  });

  return res.status(200).json(
    new ApiResponse(
      200,

      {
        totalComplaints,

        pendingComplaints,

        assignedComplaints,

        inProgressComplaints,

        resolvedComplaints,

        closedComplaints,

        totalEmployees,

        resolutionRate,

        complaintsByPriority,

        recentComplaints,

        employeePerformance,
      },

      "Department dashboard fetched successfully",
    ),
  );
});

// ===============================
// GET ALL DEPARTMENT EMPLOYEES
// ===============================

exports.getDepartmentEmployees = asyncHandler(async (req, res) => {
  const departmentId = req.user.department._id;

  const employees = await User.find({
    department: departmentId,
    role: "EMPLOYEE",
    isActive: true,
  })
    .select("-password")
    .sort({ createdAt: -1 });

  const employeeData = await Promise.all(
    employees.map(async (employee) => {
      const totalAssigned = await Complaint.countDocuments({
        assignedEmployee: employee._id,
      });

      const inProgress = await Complaint.countDocuments({
        assignedEmployee: employee._id,
        status: "IN_PROGRESS",
      });

      const resolved = await Complaint.countDocuments({
        assignedEmployee: employee._id,
        status: {
          $in: ["RESOLVED", "CLOSED"],
        },
      });

      const pending = await Complaint.countDocuments({
        assignedEmployee: employee._id,
        status: {
          $in: ["PENDING", "ASSIGNED"],
        },
      });

      const workload = inProgress + pending;

      return {
        ...employee.toObject(),

        stats: {
          totalAssigned,

          resolved,

          inProgress,

          pending,

          workload,
        },
      };
    }),
  );

  return res.status(200).json(
    new ApiResponse(
      200,

      employeeData,

      "Employees fetched successfully",
    ),
  );
});

// =========================================
// GET EMPLOYEE DETAILS
// =========================================

exports.getEmployeeDetails = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const departmentId = req.user.department._id;

  const employee = await User.findOne({
    _id: id,

    department: departmentId,

    role: "EMPLOYEE",
  }).select("-password");

  if (!employee) {
    throw new ApiError(404, "Employee not found");
  }

  const complaints = await Complaint.find({
    assignedEmployee: employee._id,
  })

    .populate("citizen", "name")

    .sort({
      createdAt: -1,
    });

  const totalAssigned = complaints.length;

  const resolved = complaints.filter(
    (c) => c.status === "RESOLVED" || c.status === "CLOSED",
  ).length;

  const inProgress = complaints.filter(
    (c) => c.status === "IN_PROGRESS",
  ).length;

  const assigned = complaints.filter((c) => c.status === "ASSIGNED").length;

  const pending = complaints.filter((c) => c.status === "PENDING").length;

  const workload = assigned + inProgress + pending;

  return res.status(200).json(
    new ApiResponse(
      200,

      {
        employee,

        stats: {
          totalAssigned,

          resolved,

          assigned,

          pending,

          inProgress,

          workload,
        },

        complaints,
      },

      "Employee details fetched successfully",
    ),
  );
});

// =======================================
// GET UNASSIGNED COMPLAINTS
// =======================================

exports.getUnassignedComplaints = asyncHandler(async (req, res) => {
  const departmentId = req.user.department._id;

  const complaints = await Complaint.find({
    department: departmentId,

    assignedEmployee: null,

    status: "PENDING",
  })

    .populate("citizen", "name email phone")

    .sort({
      priority: -1,
      createdAt: -1,
    });

  return res.status(200).json(
    new ApiResponse(
      200,

      complaints,

      "Unassigned complaints fetched successfully",
    ),
  );
});

// =======================================
// ASSIGN COMPLAINT
// =======================================

exports.assignComplaintToEmployee = asyncHandler(async (req, res) => {
  const { complaintId, employeeId } = req.body;

  const departmentId = req.user.department._id;

  const complaint = await Complaint.findOne({
    _id: complaintId,

    department: departmentId,
  });

  if (!complaint) {
    throw new ApiError(404, "Complaint not found");
  }

  const employee = await User.findOne({
    _id: employeeId,

    department: departmentId,

    role: "EMPLOYEE",
  });

  if (!employee) {
    throw new ApiError(404, "Employee not found");
  }

  complaint.assignedEmployee = employee._id;

  complaint.status = "ASSIGNED";

  await complaint.save();

  await ComplaintStatusLog.create({
    complaint: complaint._id,

    previousStatus: "PENDING",

    currentStatus: "ASSIGNED",

    remarks: "Assigned by Department Head",

    changedBy: req.user._id,
  });

  return res.status(200).json(
    new ApiResponse(
      200,

      complaint,

      "Complaint assigned successfully",
    ),
  );
});

// =======================================
// REASSIGN COMPLAINT
// =======================================

exports.reassignComplaint = asyncHandler(async (req, res) => {
  const {
    complaintId,

    employeeId,
  } = req.body;

  const departmentId = req.user.department._id;

  const complaint = await Complaint.findOne({
    _id: complaintId,

    department: departmentId,
  });

  if (!complaint) {
    throw new ApiError(404, "Complaint not found");
  }

  const employee = await User.findOne({
    _id: employeeId,

    department: departmentId,

    role: "EMPLOYEE",
  });

  if (!employee) {
    throw new ApiError(404, "Employee not found");
  }

  complaint.assignedEmployee = employee._id;

  await complaint.save();

  await ComplaintStatusLog.create({
    complaint: complaint._id,

    previousStatus: complaint.status,

    currentStatus: complaint.status,

    remarks: "Complaint reassigned",

    changedBy: req.user._id,
  });

  return res.status(200).json(
    new ApiResponse(
      200,

      complaint,

      "Complaint reassigned successfully",
    ),
  );
});

// ======================================
// GET DEPARTMENT COMPLAINTS
// ======================================

exports.getDepartmentComplaints = asyncHandler(async (req, res) => {
  const departmentId = req.user.department._id;

  const { search = "", status, priority, page = 1, limit = 10 } = req.query;

  const query = {
    department: departmentId,
  };

  if (status) {
    query.status = status;
  }

  if (priority) {
    query.priority = priority;
  }

  if (search) {
    query.$or = [
      {
        complaintNumber: {
          $regex: search,
          $options: "i",
        },
      },

      {
        title: {
          $regex: search,
          $options: "i",
        },
      },

      {
        description: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  const total = await Complaint.countDocuments(query);

  const complaints = await Complaint.find(query)

    .populate("citizen", "name email phone")

    .populate("assignedEmployee", "name")

    .sort({
      createdAt: -1,
    })

    .skip((page - 1) * limit)

    .limit(Number(limit));

  return res.status(200).json(
    new ApiResponse(
      200,

      {
        complaints,

        pagination: {
          total,

          page: Number(page),

          limit: Number(limit),

          totalPages: Math.ceil(total / limit),
        },
      },

      "Complaints fetched successfully",
    ),
  );
});

// ======================================
// GET COMPLAINT DETAILS
// ======================================

exports.getDepartmentComplaintDetails = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const complaint = await Complaint.findOne({
    _id: id,

    department: req.user.department._id,
  })

    .populate("citizen")

    .populate("department")

    .populate("assignedEmployee", "name email")

    .populate("duplicateOf");

  if (!complaint) {
    throw new ApiError(404, "Complaint not found");
  }

  const timeline = await ComplaintStatusLog.find({
    complaint: id,
  })

    .populate("changedBy", "name role")

    .sort({
      createdAt: 1,
    });

  return res.status(200).json(
    new ApiResponse(
      200,

      {
        complaint,

        timeline,
      },

      "Complaint details fetched successfully",
    ),
  );
});

// ======================================
// UPDATE COMPLAINT
// ======================================

exports.updateComplaint = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { priority, category, assignedEmployee, remarks } = req.body;

  const complaint = await Complaint.findOne({
    _id: id,

    department: req.user.department._id,
  });

  if (!complaint) {
    throw new ApiError(404, "Complaint not found");
  }

  if (priority) {
    complaint.priority = priority;
  }

  if (category) {
    complaint.category = category;
  }

  if (assignedEmployee) {
    complaint.assignedEmployee = assignedEmployee;
  }

  await complaint.save();

  await ComplaintStatusLog.create({
    complaint: complaint._id,

    previousStatus: complaint.status,

    currentStatus: complaint.status,

    remarks: remarks || "Complaint updated",

    changedBy: req.user._id,
  });

  return res.status(200).json(
    new ApiResponse(
      200,

      complaint,

      "Complaint updated successfully",
    ),
  );
});

// ======================================
// ANALYTICS
// ======================================

exports.getAnalytics = asyncHandler(async (req, res) => {
  const departmentId = req.user.department._id;

  // ===========================
  // Total Complaints
  // ===========================

  const totalComplaints = await Complaint.countDocuments({
    department: departmentId,
  });

  // ===========================
  // Active Employees
  // ===========================

  const activeEmployees = await User.countDocuments({
    department: departmentId,
    role: "EMPLOYEE",
    isActive: true,
  });

  // ===========================
  // Resolved Complaints
  // ===========================

  const resolvedComplaints = await Complaint.countDocuments({
    department: departmentId,
    status: "RESOLVED",
  });

  // ===========================
  // Resolution Rate
  // ===========================

  const resolutionRate =
    totalComplaints === 0
      ? 0
      : Number(((resolvedComplaints / totalComplaints) * 100).toFixed(1));

  // ===========================
  // Average Resolution Days
  // ===========================

  const resolvedList = await Complaint.find({
    department: departmentId,
    status: "RESOLVED",
    updatedAt: { $exists: true },
  });

  let averageResolutionDays = 0;

  if (resolvedList.length > 0) {
    const totalDays = resolvedList.reduce((sum, complaint) => {
      const diff =
        (complaint.updatedAt - complaint.createdAt) / (1000 * 60 * 60 * 24);

      return sum + diff;
    }, 0);

    averageResolutionDays = Number(
      (totalDays / resolvedList.length).toFixed(1),
    );
  }

  // ===========================
  // Status Distribution
  // ===========================

  const byStatus = await Complaint.aggregate([
    {
      $match: {
        department: departmentId,
      },
    },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  // ===========================
  // Priority Distribution
  // ===========================

  const byPriority = await Complaint.aggregate([
    {
      $match: {
        department: departmentId,
      },
    },
    {
      $group: {
        _id: "$priority",
        count: { $sum: 1 },
      },
    },
  ]);

  // ===========================
  // Monthly Trend
  // ===========================

  const monthly = await Complaint.aggregate([
    {
      $match: {
        department: departmentId,
      },
    },
    {
      $group: {
        _id: {
          month: {
            $month: "$createdAt",
          },
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        "_id.month": 1,
      },
    },
  ]);

  // ===========================
  // Employee Performance
  // ===========================

  const employeePerformance = await User.aggregate([
    {
      $match: {
        department: departmentId,
        role: "EMPLOYEE",
      },
    },
    {
      $lookup: {
        from: "complaints",
        localField: "_id",
        foreignField: "assignedEmployee",
        as: "complaints",
      },
    },
    {
      $project: {
        name: 1,

        totalAssigned: {
          $size: "$complaints",
        },

        resolved: {
          $size: {
            $filter: {
              input: "$complaints",
              as: "complaint",
              cond: {
                $eq: ["$$complaint.status", "RESOLVED"],
              },
            },
          },
        },

        pending: {
          $size: {
            $filter: {
              input: "$complaints",
              as: "complaint",
              cond: {
                $ne: ["$$complaint.status", "RESOLVED"],
              },
            },
          },
        },
      },
    },
    {
      $sort: {
        resolved: -1,
      },
    },
  ]);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalComplaints,
        resolutionRate,
        averageResolutionDays,
        activeEmployees,

        byStatus,
        byPriority,
        monthly,

        employeePerformance,
      },
      "Analytics fetched successfully",
    ),
  );
});

// ======================================
// GET PUBLIC DEPARTMENT COMPLAINTS
// ======================================

exports.getPublicDepartmentComplaints = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const department = await Department.findById(id).select("name description");

  if (!department) {
    throw new ApiError(404, "Department not found");
  }

  const complaints = await Complaint.find({
    department: id,
    status: { $ne: "REJECTED" },
  })
    .select(
      "complaintNumber title description category priority status location attachments createdAt duplicateOf",
    )
    .sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        department,
        complaints,
      },
      "Public department complaints fetched successfully",
    ),
  );
});
