require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const complaintRoutes = require("./routes/complaint.routes");
const employeeRoutes = require("./routes/employee.routes");
const adminRoutes = require("./routes/admin.routes");
const chatbotRoutes = require("./routes/chatbot.routes");
const errorHandler = require("./middlewares/error.middleware");
const connectDB = require("./config/database");

const app = express();

// ── Body parsing & CORS ──
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// ── Health check ──
app.get("/", (req, res) => res.json({ status: "District Analyzer API is running 🚀" }));

// ── Routes ──
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/complaints", complaintRoutes);
app.use("/api/v1/chatbot", chatbotRoutes);
app.use("/api/v1/employee", employeeRoutes);
app.use("/api/v1/admin", adminRoutes);

// ── Global Error Handler (MUST be AFTER routes) ──
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});