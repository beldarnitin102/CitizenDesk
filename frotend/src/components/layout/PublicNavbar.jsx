import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext"; // 1. Adjust this import path to match your file structure

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Departments", path: "/departments" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Contact", path: "/contact" },
];

function PublicNavbar() {
  const { user } = useAuth(); // 2. Destructure the user from your auth state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[90%] items-center justify-between px-6 lg:px-8">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F4C81] text-2xl text-white shadow-md">
            🛡️
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Jalgaon District</h1>
            <p className="text-xs text-slate-500">Complaint Management System</p>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors duration-200 ${
                  isActive ? "text-[#0F4C81]" : "text-slate-600 hover:text-[#0F4C81]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#0F4C81] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* 3. DESKTOP BUTTONS: Conditional view based on auth state */}
        <div className="hidden lg:flex items-center gap-8">
          {user ? (
            <NavLink to="/dashboard">
              <Button>Dashboard</Button>
            </NavLink>
          ) : (
            <>
              <NavLink to="/login">
                <Button variant="outline">Login</Button>
              </NavLink>
              <NavLink to="/register">
                <Button>Register</Button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[600px] border-t border-slate-200" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 py-6">
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive ? "bg-blue-50 text-[#0F4C81]" : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* 4. MOBILE BUTTONS: Conditional view based on auth state */}
          <div className="mt-6 flex flex-col gap-3">
            {user ? (
              <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button fullWidth>Dashboard</Button>
              </NavLink>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" fullWidth>Login</Button>
                </NavLink>
                <NavLink to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button fullWidth>Register</Button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default PublicNavbar;
