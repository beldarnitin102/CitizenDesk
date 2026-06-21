const express = require("express");

const auth = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");

const {
  getDashboard,
  getAllComplaints,
  getAllEmployees,
  createDepartment,
  createEmployee,
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

// Employees
router.get("/employees", getAllEmployees);
router.post("/employees", createEmployee);
router.patch("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

// Departments
router.post("/departments", createDepartment);
router.patch("/departments/:id", updateDepartment);

module.exports = router;