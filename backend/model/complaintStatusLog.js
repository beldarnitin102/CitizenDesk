const mongoose = require("mongoose");

const complaintStatusLogSchema = new mongoose.Schema(
  {
    complaint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complaint",
      required: true,
    },
    previousStatus: {
      type: String,
      required: true,
      trim: true,
    },
    currentStatus: {
      type: String,
      required: true,
      trim: true,
    },
    remarks: {
      type: String,
      trim: true,
      default: "",
    },
    changedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ComplaintStatusLog = mongoose.model(
  "ComplaintStatusLog",
  complaintStatusLogSchema,
);

module.exports = ComplaintStatusLog;
