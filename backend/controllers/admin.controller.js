const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Complaint = require("../models/Complaint");
const Department = require("../models/Department");

const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// ================= DASHBOARD =================

exports.getDashboard = asyncHandler(async (req, res) => {
  const totalComplaints = await Complaint.countDocuments();

  const pendingComplaints = await Complaint.countDocuments({
    status: "PENDING",
  });

  const assignedComplaints = await Complaint.countDocuments({
    status: "ASSIGNED",
  });

  const inProgressComplaints = await Complaint.countDocuments({
    status: "IN_PROGRESS",
  });

  const resolvedComplaints = await Complaint.countDocuments({
    status: "RESOLVED",
  });

  const totalEmployees = await User.countDocuments({
    role: {
      $in: ["EMPLOYEE", "DEPARTMENT_HEAD"],
    },
  });

  const totalDepartments =
    await Department.countDocuments();

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalComplaints,
        pendingComplaints,
        assignedComplaints,
        inProgressComplaints,
        resolvedComplaints,
        totalEmployees,
        totalDepartments,
      },
      "Dashboard data fetched successfully"
    )
  );
});

// ================= GET ALL COMPLAINTS =================

exports.getAllComplaints = asyncHandler(
  async (req, res) => {
    const complaints = await Complaint.find()
      .populate("citizen", "name email")
      .populate("department", "name")
      .populate("assignedEmployee", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json(
      new ApiResponse(
        200,
        complaints,
        "All complaints fetched successfully"
      )
    );
  }
);

// ================= GET ALL EMPLOYEES =================

exports.getAllEmployees = asyncHandler(
  async (req, res) => {
    const employees = await User.find({
      role: {
        $in: ["EMPLOYEE", "DEPARTMENT_HEAD"],
      },
    })
      .populate("department")
      .select("-password");

    return res.status(200).json(
      new ApiResponse(
        200,
        employees,
        "Employees fetched successfully"
      )
    );
  }
);

// ================= CREATE DEPARTMENT =================

exports.createDepartment = asyncHandler(
  async (req, res) => {
    const { name, description, email } =
      req.body;

    const existingDepartment =
      await Department.findOne({ name });

    if (existingDepartment) {
      throw new ApiError(
        400,
        "Department already exists"
      );
    }

    const department =
      await Department.create({
        name,
        description,
        email,
      });

    return res.status(201).json(
      new ApiResponse(
        201,
        department,
        "Department created successfully"
      )
    );
  }
);

// ================= CREATE EMPLOYEE =================

exports.createEmployee = asyncHandler(
  async (req, res) => {
    const {
      name,
      email,
      password,
      phone,
      role,
      department,
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(
        400,
        "User already exists"
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const employee = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
      department,
    });

    const createdEmployee =
      await User.findById(employee._id)
        .populate("department")
        .select("-password");

    return res.status(201).json(
      new ApiResponse(
        201,
        createdEmployee,
        "Employee created successfully"
      )
    );
  }
);

// ================= UPDATE EMPLOYEE =================

exports.updateEmployee = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const employee =
      await User.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      )
        .populate("department")
        .select("-password");

    if (!employee) {
      throw new ApiError(
        404,
        "Employee not found"
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        employee,
        "Employee updated successfully"
      )
    );
  }
);

// ================= UPDATE DEPARTMENT =================

exports.updateDepartment = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const department =
      await Department.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!department) {
      throw new ApiError(
        404,
        "Department not found"
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        department,
        "Department updated successfully"
      )
    );
  }
);

// ================= DELETE EMPLOYEE =================

exports.deleteEmployee = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const employee =
      await User.findByIdAndDelete(id);

    if (!employee) {
      throw new ApiError(
        404,
        "Employee not found"
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        null,
        "Employee deleted successfully"
      )
    );
  }
);