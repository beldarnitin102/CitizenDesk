import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";

// ================= PUBLIC =================

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import HowItWorksSection from "../components/home/HowItWorksSection";
import AIFeaturesSection from "../components/home/AIFeaturesSection";
import DepartmentsSection from "../components/home/DepartmentsSection";
import Contact from "../components/home/Contact";

// ================= CITIZEN =================

import CitizenDashboard from "../pages/citizen/CitizenDashboard";
import CreateComplaint from "../pages/citizen/CreateComplaint";
import MyComplaints from "../pages/citizen/MyComplaints";
import CitizenComplaintDetails from "../pages/citizen/ComplaintDetails";
import EditComplaint from "../pages/citizen/EditComplaint";
import CitizenProfile from "../pages/citizen/CitizenProfile";
import AIAssistant from "../pages/citizen/AIAssistant";

// ================= EMPLOYEE =================

import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import DepartmentComplaints from "../pages/employee/DepartmentComplaints";
import EmployeeComplaintDetails from "../pages/employee/EmployeeComplaintDetails";

// ================= DEPARTMENT HEAD =================

import DepartmentDashboard from "../pages/departmentHead/DepartmentDashboard";
import EmployeeList from "../pages/departmentHead/EmployeeList";

import Analytics from "../components/departmentHead/Analytics";
import AssignComplaint from "../components/departmentHead/AssignComplaint";
import DepartmentHeadComplaintManagement from "../components/departmentHead/ComplaintManagement";
import DepartmentHeadComplaintDetails from "../components/departmentHead/complaints/ComplaintDetails";
import EmployeeDetails from "../components/departmentHead/employees/EmployeeDetails";

// ================= ADMIN =================

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminComplaintManagement from "../pages/admin/ComplaintManagement";
import AdminComplaintDetails from "../pages/admin/ComplaintDetails";
import EmployeeManagement from "../pages/admin/EmployeeManagement";
import DepartmentManagement from "../pages/admin/DepartmentManagement";
import PublicChallenges from "../pages/PublicChallenges/PublicChallenges";
import PublicDepartment from "../pages/PublicDepartment/PublicDepartment";

function AppRoutes() {
  return (
    <Routes>
      {/* ======================================================
                          PUBLIC ROUTES
      ======================================================= */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/how-it-works" element={<HowItWorksSection />} />
        <Route path="/features" element={<AIFeaturesSection />} />
        <Route path="/departments" element={<DepartmentsSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/challenges" element={<PublicChallenges />} />
        <Route path="/departments/:id" element={<PublicDepartment />} />
      </Route>

      {/* ======================================================
                        CITIZEN ROUTES
      ======================================================= */}

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<CitizenDashboard />} />

        <Route
          path="/dashboard/create-complaint"
          element={<CreateComplaint />}
        />

        <Route path="/dashboard/my-complaints" element={<MyComplaints />} />

        <Route
          path="/dashboard/complaints/:id"
          element={<CitizenComplaintDetails />}
        />

        <Route
          path="/dashboard/edit-complaint/:id"
          element={<EditComplaint />}
        />

        <Route path="/dashboard/profile" element={<CitizenProfile />} />

        <Route path="/dashboard/ai-assistant" element={<AIAssistant />} />
      </Route>

      {/* ======================================================
                        EMPLOYEE ROUTES
      ======================================================= */}

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

      {/* ======================================================
                    DEPARTMENT HEAD ROUTES
      ======================================================= */}

      <Route
        path="/department-head/dashboard"
        element={
          <ProtectedRoute allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}>
            <DepartmentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/department-head/employees"
        element={
          <ProtectedRoute allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}>
            <EmployeeList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/department-head/employees/:id"
        element={
          <ProtectedRoute allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}>
            <EmployeeDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/department-head/complaints"
        element={
          <ProtectedRoute allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}>
            <DepartmentHeadComplaintManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/department-head/complaints/:id"
        element={
          <ProtectedRoute allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}>
            <DepartmentHeadComplaintDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/department-head/assign"
        element={
          <ProtectedRoute allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}>
            <AssignComplaint />
          </ProtectedRoute>
        }
      />

      <Route
        path="/department-head/analytics"
        element={
          <ProtectedRoute allowedRoles={["DEPARTMENT_HEAD", "ADMIN"]}>
            <Analytics />
          </ProtectedRoute>
        }
      />

      {/* ======================================================
                          ADMIN ROUTES
      ======================================================= */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/complaints"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminComplaintManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/complaints/:id"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminComplaintDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/employees"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <EmployeeManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/departments"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <DepartmentManagement />
          </ProtectedRoute>
        }
      />

      {/* <Route
        path="/admin/analytics"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AnalyticsDashboard />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}

export default AppRoutes;
