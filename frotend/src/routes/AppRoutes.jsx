import { Routes, Route } from "react-router-dom";

// Layouts & Protected Checks
import PublicLayout from "../layouts/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";

// Public Pages
import Home from "../pages/public/Home";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Citizen Dashboard Pages
import CitizenDashboard from "../pages/citizen/CitizenDashboard";
import CreateComplaint from "../pages/citizen/CreateComplaint";
import MyComplaints from "../pages/citizen/MyComplaints";
import ComplaintDetails from "../pages/citizen/ComplaintDetails";
import EditComplaint from "../pages/citizen/EditComplaint"; // Imported correctly

import AIFeaturesSection from "../components/home/AIFeaturesSection";
import CitizenProfile from "../pages/citizen/CitizenProfile";
import AIAssistant from "../pages/citizen/AIAssistant";
import HowItWorksSection from "../components/home/HowItWorksSection";
import DepartmentsSection from "../components/home/DepartmentsSection";
import Contact from "../components/home/Contact";


function AppRoutes() {
  return (
    <Routes>
      {/* =========================================================
          1. PUBLIC ROUTES (Wrapped in PublicLayout if needed)
         ========================================================= */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/how-it-works" element={<HowItWorksSection />} />
         <Route path="/features" element={<AIFeaturesSection />} />
         <Route path="/departments" element={<DepartmentsSection />} />
         <Route path="/contact" element={<Contact />} />
      </Route>

      {/* =========================================================
          2. PROTECTED CITIZEN ROUTES
         ========================================================= */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<CitizenDashboard />} />

        <Route
          path="/dashboard/create-complaint"
          element={<CreateComplaint />}
        />

        <Route path="/dashboard/my-complaints" element={<MyComplaints />} />

        <Route
          path="/dashboard/complaints/:id"
          element={<ComplaintDetails />}
        />

        {/* FIXED: Added explicit matching absolute path layout syntax wrapper */}
        <Route
          path="/dashboard/edit-complaint/:id"
          element={<EditComplaint />}
        />

        <Route path="/dashboard/profile" element={<CitizenProfile />} />
        <Route path="/dashboard/ai-assistant" element={<AIAssistant />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
