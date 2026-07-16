import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";
// import Login from "../pages/Login/Login";
// import Signup from "../pages/Signup/Signup";
// import VerifyOTP from "../pages/VerifyOTP/VerifyOTP";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public */}

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/verify-email"
            element={<VerifyOTP />}
          />

        </Route>

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >

          <Route
            index
            element={<Dashboard />}
          />

        </Route>

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;