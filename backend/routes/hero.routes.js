const express = require("express");

const router = express.Router();

const {
  getHeroStatistics,getHeroDepartments
} = require("../controllers/hero.controller");

// ==========================================
// Public Hero Statistics
// ==========================================

router.get(
  "/statistics",
  getHeroStatistics
);

router.get(
  "/departments",
  getHeroDepartments
);

module.exports = router;