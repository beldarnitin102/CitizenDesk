import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/public/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public */}

        <Route element={<PublicLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

        </Route>

        {/* Auth */}

        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

        </Route>

        {/* Citizen Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["CITIZEN"]}
            >
              <div>Citizen Dashboard</div>
            </ProtectedRoute>
          }
        />

        {/* Employee */}

        <Route
          path="/employee"
          element={
            <ProtectedRoute
              allowedRoles={[
                "EMPLOYEE",
                "DEPARTMENT_HEAD",
              ]}
            >
              <div>Employee Dashboard</div>
            </ProtectedRoute>
          }
        />

        {/* Admin */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute
              allowedRoles={["ADMIN"]}
            >
              <div>Admin Dashboard</div>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;