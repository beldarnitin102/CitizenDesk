const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");

const {
  getDepartmentHeadDashboard,

  getDepartmentEmployees,

  getEmployeeDetails,

  getUnassignedComplaints,

  assignComplaintToEmployee,

  reassignComplaint,

  getDepartmentComplaints,

  getDepartmentComplaintDetails,

  updateComplaint,

  getAnalytics,

  getPublicDepartmentComplaints
} = require("../controllers/departmenthead.controller");

router.get("/public/:id/complaints", getPublicDepartmentComplaints);


router.use(auth, authorizeRoles("DEPARTMENT_HEAD", "ADMIN"));

router.get("/dashboard", getDepartmentHeadDashboard);

router.get("/employees", getDepartmentEmployees);

router.get("/employees/:id", getEmployeeDetails);

router.get("/complaints", getDepartmentComplaints);

router.get("/complaints/:id", getDepartmentComplaintDetails);

router.get("/unassigned-complaints", getUnassignedComplaints);

router.patch("/assign", assignComplaintToEmployee);

router.patch("/reassign", reassignComplaint);

router.patch("/complaints/:id", updateComplaint);

router.get("/analytics", getAnalytics);

module.exports = router;
