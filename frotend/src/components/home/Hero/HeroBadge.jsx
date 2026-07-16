import { FiCpu } from "react-icons/fi";

const HeroBadge = () => {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-blue-100
      bg-blue-50
      px-5
      py-3
      shadow-sm
      "
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white">

        <FiCpu size={20} />

      </div>

      <div>

        <p className="text-sm font-semibold text-[var(--primary)]">
          AI Powered Complaint Resolution
        </p>

        <p className="text-xs text-[var(--body)]">
          Smart Routing • Duplicate Detection • Multilingual
        </p>

      </div>

    </div>
  );
};

export default HeroBadge;