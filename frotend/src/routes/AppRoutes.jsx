import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import Home from "../pages/Home/Home";

// Authentication Pages
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import VerifyOTP from "../pages/Auth/VerifyOTP";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";

// Protected Routes
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import EmployeeRoute from "./EmployeeRoute";
import DepartmentHeadRoute from "./DepartmentHeadRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ================= PUBLIC WEBSITE ================= */}

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

      </Route>

      {/* ================= AUTH ================= */}

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      <Route
        path="/verify-otp"
        element={
          <PublicRoute>
            <VerifyOTP />
          </PublicRoute>
        }
      />

      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />

      <Route
        path="/reset-password"
        element={
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        }
      />

      {/* ================= CITIZEN ================= */}

      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      />

      {/* ================= EMPLOYEE ================= */}

      <Route
        path="/employee/*"
        element={
          <EmployeeRoute>
            <DashboardLayout />
          </EmployeeRoute>
        }
      />

      {/* ================= DEPARTMENT HEAD ================= */}

      <Route
        path="/department/*"
        element={
          <DepartmentHeadRoute>
            <DashboardLayout />
          </DepartmentHeadRoute>
        }
      />

      {/* ================= ADMIN ================= */}

      <Route
        path="/admin/*"
        element={
          <AdminRoute>
            <DashboardLayout />
          </AdminRoute>
        }
      />

      {/* ================= 404 ================= */}

      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center text-3xl font-bold">
            404 | Page Not Found
          </div>
        }
      />

    </Routes>
  );
};

export default AppRoutes;