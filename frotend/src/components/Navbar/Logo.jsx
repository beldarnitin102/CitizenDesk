import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-4 shrink-0"
    >
      {/* Logo */}

      <img
        src={logo}
        alt="District Logo"
        className="h-16 w-auto object-contain"
      />

      {/* Text */}

      <div className="leading-tight">

        <h1 className="text-[20px] font-bold text-[var(--heading)]">
          Jalgaon District
        </h1>

        <p className="text-[15px] font-semibold text-[var(--primary)]">
          Grievance Management System
        </p>

        <span className="text-xs text-[var(--body)]">
          A smarter way to build a better district
        </span>

      </div>
    </Link>
  );
};

export default Logo;