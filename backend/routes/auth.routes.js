const express = require("express");
const router = express.Router();

const {
  register,
  login,
  sendOTP
  //getProfile,
} = require("../controllers/auth.controller");

const auth = require("../middlewares/auth.middleware");

router.post("/send-otp", sendOTP);

router.post("/register", register);

router.post("/login", login);

//router.get("/me", auth, getProfile);

module.exports = router;
