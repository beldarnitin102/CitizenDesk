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
import DepartmentComplaints from "../pages/employee/DepartmentComplaints";
import EmployeeComplaintDetails from "../pages/employee/EmployeeComplaintDetails";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";

// Department Head Pages
import DepartmentDashboard from "../pages/departmentHead/DepartmentDashboard";

import EmployeeDetails from "../components/departmentHead/employees/EmployeeDetails";
import DepartmentEmployees from "../components/departmentHead/DepartmentEmployees";
import EmployeeList from "../pages/departmentHead/EmployeeList";
import Analytics from "../components/departmentHead/Analytics";
import AssignComplaint from "../components/departmentHead/AssignComplaint";
import ComplaintManagement from "../components/departmentHead/ComplaintManagement";

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

      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute
            allowedRoles={["EMPLOYEE", "DEPARTMENT_HEAD", "ADMIN"]}
          >
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/complaints"
        element={
          <ProtectedRoute
            allowedRoles={["EMPLOYEE", "DEPARTMENT_HEAD", "ADMIN"]}
          >
            <DepartmentComplaints />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/complaints/:id"
        element={
          <ProtectedRoute
            allowedRoles={["EMPLOYEE", "DEPARTMENT_HEAD", "ADMIN"]}
          >
            <EmployeeComplaintDetails />
          </ProtectedRoute>
        }
      />

      {/* ==========================================
      DEPARTMENT HEAD MODULE
========================================== */}

    <Route
  path="/department-head/dashboard"
  element={
    <ProtectedRoute
      allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}
    >
      <DepartmentDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/department-head/employees"
  element={
    <ProtectedRoute
      allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}
    >
      <DepartmentEmployees />
    </ProtectedRoute>
  }
/>

<Route
  path="/department-head/employees/:id"
  element={
    <ProtectedRoute
      allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}
    >
      <EmployeeDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/department-head/complaints"
  element={
    <ProtectedRoute
      allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}
    >
      <ComplaintManagement />
    </ProtectedRoute>
  }
/>

<Route
  path="/department-head/complaints/:id"
  element={
    <ProtectedRoute
      allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}
    >
      <ComplaintDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/department-head/assign"
  element={
    <ProtectedRoute
      allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}
    >
      <AssignComplaint />
    </ProtectedRoute>
  }
/>

<Route
  path="/department-head/analytics"
  element={
    <ProtectedRoute
      allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}
    >
      <Analytics />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default AppRoutes;
