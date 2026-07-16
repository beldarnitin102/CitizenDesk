import { FiArrowRight, FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTAButtons = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

      <Link
        to="/signup"
        className="
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-xl
        bg-white
        px-8
        py-4
        font-semibold
        text-[var(--primary)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        "
      >
        Get Started

        <FiArrowRight size={20} />
      </Link>

      <Link
        to="/track"
        className="
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-xl
        border
        border-white/40
        px-8
        py-4
        font-semibold
        text-white
        backdrop-blur-sm
        transition-all
        duration-300
        hover:bg-white
        hover:text-[var(--primary)]
        "
      >
        Track Complaint

        <FiFileText size={20} />
      </Link>

    </div>
  );
};

export default CTAButtons;