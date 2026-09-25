require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const complaintRoutes = require("./routes/complaint.routes");
const employeeRoutes = require("./routes/employee.routes");
const adminRoutes = require("./routes/admin.routes");
const chatbotRoutes = require("./routes/chatbot.routes");
const departmenthead = require("./routes/deparmenthead.routes");
const heroRoutes = require("./routes/hero.routes");
const errorHandler = require("./middlewares/error.middleware");
const connectDB = require("./config/database");

const app = express();

// ── Body parsing & CORS ──
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// ── Health check ──
app.get("/", (req, res) =>
  res.json({ status: "District Analyzer API is running 🚀" }),
);

// ── Routes ──
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/complaints", complaintRoutes);
app.use("/api/v1/chatbot", chatbotRoutes);
app.use("/api/v1/employee", employeeRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/department-head", departmenthead);
app.use("/api/v1/hero", heroRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
});
