const { body } = require("express-validator");

exports.createComplaintValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage(
      "Description should be at least 10 characters"
    ),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required"),

  body("priority")
    .optional()
    .isIn(["LOW", "MEDIUM", "HIGH", "CRITICAL"])
    .withMessage("Invalid priority"),

  body("location.district")
    .optional()
    .trim(),

  body("location.taluka")
    .optional()
    .trim(),

  body("location.village")
    .optional()
    .trim(),

  body("location.pincode")
    .optional()
    .isLength({ min: 6, max: 6 })
    .withMessage("Invalid pincode"),
];