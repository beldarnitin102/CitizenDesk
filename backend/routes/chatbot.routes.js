const express = require("express");
const { handleChat } = require("../controllers/chatbot.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

// Route: POST /api/v1/chatbot
router.post("/", auth, handleChat);

module.exports = router;
