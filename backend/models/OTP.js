const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    otp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

otpSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 300 }
);

module.exports = mongoose.model(
  "OTP",
  otpSchema
);