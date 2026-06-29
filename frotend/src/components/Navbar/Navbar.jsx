import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isSticky
            ? "bg-white shadow-md"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Right Side */}
          <div className="hidden items-center gap-5 lg:flex">

            <LanguageSelector />

            {/* Login */}
            <Link
              to="/login"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-[var(--heading)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-700"
            >
              Sign Up
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <FiX size={30} />
            ) : (
              <FiMenu size={30} />
            )}
          </button>

        </div>

        <MobileMenu
          isOpen={mobileOpen}
          setIsOpen={setMobileOpen}
        />
      </header>

      {/* Spacer */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;