import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUserPlus } from "react-icons/fi";

const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {/* Register */}
      <Link
        to="/signup"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F3683] px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C2E70]"
      >
        <FiUserPlus size={18} />
        Register Grievance
      </Link>

      {/* Track */}
      <Link
        to="/track"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F3683] hover:text-[#0F3683]"
      >
        <FiSearch size={18} />
        Track Complaint
      </Link>
    </div>
  );
};

export default HeroButtons;