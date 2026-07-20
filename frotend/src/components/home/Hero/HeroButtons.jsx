import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUserPlus } from "react-icons/fi";

const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      <Link
        to="/signup"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#dba125] px-7 py-4 font-semibold text-white shadow-md transition duration-300 hover:bg-[#0E3173]"
      >
        <FiUserPlus />
        Register Grievance
      </Link>

      <Link
        to="/track"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-[#123D8D] hover:text-[#123D8D]"
      >
        <FiSearch />
        Track Complaint
      </Link>

    </div>
  );
};

export default HeroButtons;