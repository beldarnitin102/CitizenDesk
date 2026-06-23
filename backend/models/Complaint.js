const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    complaintNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
      default: "LOW",
    },
    status: {
      type: String,
      enum: [
        "PENDING",
        "ASSIGNED",
        "IN_PROGRESS",
        "RESOLVED",
        "REJECTED",
        "CLOSED",
      ],
      default: "PENDING",
    },
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    assignedEmployee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    attachments: [
      {
        type: String,
      },
    ],
    location: {
      village: { type: String, trim: true },
      taluka: { type: String, trim: true },
      district: { type: String, trim: true },
      pincode: { type: String, trim: true },
    },
    aiClassification: {
      confidence: { type: Number, min: 0, max: 1 },
      detectedCategory: { type: String, trim: true },
    },
    duplicateOf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complaint",
      default: null,
    },
    originalLanguage: {
      type: String,
      default: "English",
    },
  },
  {
    timestamps: true,
  },
);

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;
