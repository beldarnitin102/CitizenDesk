const Complaint = require("../models/Complaint");
const aiService = require("../utils/ai.service");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// ================= AI CHATBOT =================

exports.handleChat = asyncHandler(async (req, res) => {
  const { message } = req.body;

  if (!message) {
    throw new ApiError(400, "Message is required");
  }

  // Fetch user's active/recent complaints for context
  const userComplaints = await Complaint.find({
    citizen: req.user._id,
  })
    .populate("department", "name")
    .sort({ createdAt: -1 })
    .limit(5);

  try {
    // Generate AI response
    const reply = await aiService.chatWithBot(message, userComplaints);

    return res.status(200).json(
      new ApiResponse(200, { reply }, "Chat response generated successfully")
    );
  } catch (error) {
    throw new ApiError(500, "Failed to generate AI response");
  }
});
