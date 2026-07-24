const express = require("express");

const auth = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");

const {
  getDashboard,
  getAllComplaints,
  getAllEmployees,
  getAllDepartments,
  createDepartment,
  createEmployee,
  createDepartmentHead,
  updateEmployee,
  updateDepartment,
  deleteEmployee,
} = require("../controllers/admin.controller");

const router = express.Router();

router.use(auth, authorizeRoles("ADMIN"));

// Dashboard
router.get("/dashboard", getDashboard);

// Complaints
router.get("/complaints", getAllComplaints);

router.post("/department-heads", createDepartmentHead);

// Employees
router.get("/employees", getAllEmployees);
router.post("/employees", createEmployee);
router.patch("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

router.get("/departments", getAllDepartments);
// Departments
router.post("/departments", createDepartment);
router.patch("/departments/:id", updateDepartment);

module.exports = router;
