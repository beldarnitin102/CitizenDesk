import { Link, NavLink } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt=""
            className="h-12"
          />

          <div>

            <h2 className="text-lg font-bold text-[var(--heading)]">
              District AI
            </h2>

            <p className="text-xs text-gray-500">
              Complaint Management
            </p>

          </div>

        </Link>

        {/* Menu */}

        <nav className="hidden items-center gap-10 lg:flex">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/departments">
            Departments
          </NavLink>

          <NavLink to="/track">
            Track Complaint
          </NavLink>

        </nav>

        {/* Buttons */}

        <div className="hidden items-center gap-4 lg:flex">

          <Link
            to="/login"
            className="font-medium text-[var(--heading)] hover:text-[var(--primary)]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Sign Up
          </Link>

        </div>

        <button className="lg:hidden">

          <HiOutlineMenuAlt3 size={28} />

        </button>

      </div>

    </header>
  );
};

export default Navbar;