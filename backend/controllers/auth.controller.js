const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

const User = require("../models/User");
const OTP = require("../models/OTP");

const mailSender = require("../utils/mailSender");

const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// ================= SEND OTP =================

exports.sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(
      400,
      "User already registered"
    );
  }

  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  await OTP.create({
    email,
    otp,
  });

  await mailSender(
    email,
    "District Grievance OTP Verification",
    `Your OTP is ${otp}. It is valid for 5 minutes.`
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      null,
      "OTP sent successfully"
    )
  );
});

// ================= REGISTER =================

exports.register = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    otp,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !otp
  ) {
    throw new ApiError(
      400,
      "All fields are required"
    );
  }

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new ApiError(
      400,
      "User already exists"
    );
  }

  const recentOTP = await OTP.findOne({
    email,
  }).sort({
    createdAt: -1,
  });

  if (!recentOTP) {
    throw new ApiError(
      400,
      "OTP not found"
    );
  }

  if (recentOTP.otp !== otp) {
    throw new ApiError(
      400,
      "Invalid OTP"
    );
  }

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    isVerified: true,
  });

  const createdUser =
    await User.findById(user._id)
      .select("-password");

  return res.status(201).json(
    new ApiResponse(
      201,
      createdUser,
      "User registered successfully"
    )
  );
});

// ================= LOGIN =================

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(
      400,
      "Email and password are required"
    );
  }

  const user = await User.findOne({
    email,
  }).populate("department");

  if (!user) {
    throw new ApiError(
      404,
      "User not found"
    );
  }

  if (!user.isVerified) {
    throw new ApiError(
      401,
      "Please verify your email first"
    );
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new ApiError(
      401,
      "Invalid credentials"
    );
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  await User.findByIdAndUpdate(
    user._id,
    {
      lastLogin: new Date(),
    }
  );

  const userData = user.toObject();
  delete userData.password;

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        token,
        user: userData,
      },
      "Login successful"
    )
  );
});

// ================= GET PROFILE =================

// exports.getProfile = asyncHandler(
//   async (req, res) => {
//     const user = await User.findById(
//       req.user._id
//     )
//       .populate("department")
//       .select("-password");

//     if (!user) {
//       throw new ApiError(
//         404,
//         "User not found"
//       );
//     }

//     return res.status(200).json(
//       new ApiResponse(
//         200,
//         user,
//         "Profile fetched successfully"
//       )
//     );
//   }
// );