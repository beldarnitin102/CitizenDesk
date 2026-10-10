const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

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

    createdAt: {
      type: Date,
      default: Date.now,
      expires: 5 * 60,
    },
  },
);

async function sendVerificationEmail(email, otp) {
  try {
    const emailBody = `
      <p>Your verification code is:</p>
      <h2>${otp}</h2>
      <p>This code expires in 5 minutes.</p>
    `;

    await mailSender(
      email,
      "Verify Your Email",
      emailBody,
    );

    console.log("Mail sent successfully");
  } catch (err) {
    console.log("Error while sending mail");
    throw err;
  }
}

otpSchema.pre("save", async function () {
  await sendVerificationEmail(this.email, this.otp);
});

module.exports = mongoose.model("OTP", otpSchema);
