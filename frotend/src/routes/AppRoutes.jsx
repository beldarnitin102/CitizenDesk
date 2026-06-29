import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OTP from "../pages/OTP";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TrackComplaint from "../pages/TrackComplaint";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/track-complaint"
          element={<TrackComplaint />}
        />

      </Route>

      <Route path="/login" element={<Login />} />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route path="/verify-otp" element={<OTP />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}