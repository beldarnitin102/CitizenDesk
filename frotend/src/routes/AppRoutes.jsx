import { Routes, Route } from "react-router-dom"; // 👈 Remove BrowserRouter from imports

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import OTP from "../pages/OTP";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    // 👈 Removed <BrowserRouter> from here
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<OTP />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    // 👈 Removed </BrowserRouter> from here
  );
};

export default AppRoutes;
