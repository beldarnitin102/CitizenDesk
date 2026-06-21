const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  totalComplaints: {
    type: Number,
  },
});

const Department = mongoose.model("Department", DepartmentSchema );
module.exports = Department;
