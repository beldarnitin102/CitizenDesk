const express = require("express");

const auth = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");

const {
  getDepartmentComplaints,
  getComplaintDetails,
  assignComplaint,
  updateComplaintStatus,
  getComplaintHistory,
} = require("../controllers/employee.controller");

const router = express.Router();

router.use(
  auth,
  authorizeRoles(
    "EMPLOYEE",
    "DEPARTMENT_HEAD",
    "ADMIN"
  )
);

router.get(
  "/complaints",
  getDepartmentComplaints
);

router.get(
  "/complaints/:id",
  getComplaintDetails
);

router.patch(
  "/complaints/:id/assign",
  assignComplaint
);

router.patch(
  "/complaints/:id/status",
  updateComplaintStatus
);

router.get(
  "/complaints/:id/history",
  getComplaintHistory
);

module.exports = router;