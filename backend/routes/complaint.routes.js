const express = require("express");

const {
  createComplaint,
  getMyComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaint.controller");

const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", auth, createComplaint);

router.get("/my", auth, getMyComplaints);

router.get("/:id", auth, getComplaintById);

router.patch("/:id", auth, updateComplaint);

router.delete("/:id", auth, deleteComplaint);

module.exports = router;