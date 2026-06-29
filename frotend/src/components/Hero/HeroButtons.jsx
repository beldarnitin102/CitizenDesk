import { FiArrowRight, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      <Link
        to="/register"
        className="group flex h-14 items-center gap-3 rounded-xl bg-[var(--primary)] px-8 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[var(--secondary)]"
      >
        Register Complaint

        <FiArrowRight
          className="transition group-hover:translate-x-1"
          size={20}
        />

      </Link>

      <Link
        to="/track"
        className="flex h-14 items-center gap-3 rounded-xl border border-gray-300 bg-white px-8 font-semibold text-[var(--primary)] shadow-md transition hover:-translate-y-1 hover:border-[var(--primary)]"
      >
        <FiSearch />

        Track Complaint

      </Link>

    </div>
  );
};

export default HeroButtons;