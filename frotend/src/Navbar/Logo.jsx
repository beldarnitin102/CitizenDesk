import { Link } from "react-router-dom";
import { FaLandmark } from "react-icons/fa";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-md">
        <FaLandmark size={22} />
      </div>

      <div>
        <h2 className="text-lg font-bold text-[var(--heading)]">
          Jalgaon District
        </h2>

        <p className="text-sm text-[var(--body)]">
          Grievance Management
        </p>
      </div>
    </Link>
  );
};

export default Logo;