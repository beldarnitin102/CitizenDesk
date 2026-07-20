import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `relative font-medium transition-colors ${
      isActive
        ? "text-[#123D8C]"
        : "text-gray-700 hover:text-[#123D8C]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
     <div className="mx-auto max-w-[1600px] h-24 px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto" />

          <div className="leading-tight">
            <h1 className="text-2xl font-bold text-[#123D8C]">
              Jalgaon District
            </h1>

            <p className="text-sm font-semibold text-[#123D8C]">
              Grievance Management System
            </p>

            <p className="text-xs text-gray-500">
              A smarter way to a better district
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          <NavLink className={navClass} to="/">
            Home
          </NavLink>

          <NavLink className={navClass} to="/about">
            About Us
          </NavLink>

          <NavLink className={navClass} to="/departments">
            Departments
          </NavLink>

          <NavLink className={navClass} to="/track">
            Track Complaint
          </NavLink>

          <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#123D8C]">
            Citizen Corner
            <IoChevronDown />
          </button>

          <NavLink className={navClass} to="/contact">
            Contact Us
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language */}
          <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:border-[#123D8C]">
            English
            <IoChevronDown />
          </button>

          {/* Login */}
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-xl bg-[#123D8C] px-6 py-3 text-white font-semibold shadow-md hover:bg-[#0F3271] transition"
          >
            <FiUser />
            Login
          </Link>
        </div>

        {/* Mobile */}
        <button className="lg:hidden">
          <HiOutlineMenuAlt3 size={28} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;