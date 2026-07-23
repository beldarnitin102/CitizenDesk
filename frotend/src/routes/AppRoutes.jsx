import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/public/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import CitizenDashboard from "../pages/citizen/CitizenDashboard";

function AppRoutes() {
  return (
    <Routes>

      {/* Public */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
      </Route>

      {/* Citizen */}

      <Route
        element={
          <ProtectedRoute
            allowedRoles={["CITIZEN"]}
          />
        }
      >
        <Route
          path="/dashboard"
          element={<CitizenDashboard />}
        />
      </Route>

    </Routes>
  );
}

export default AppRoutes;