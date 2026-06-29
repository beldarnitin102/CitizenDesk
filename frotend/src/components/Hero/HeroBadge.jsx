import { FiShield } from "react-icons/fi";

const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-3 shadow-sm">

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white">

        <FiShield size={18} />

      </div>

      <div>

        <p className="text-sm font-semibold text-[var(--accent)]">
          AI Powered Complaint Management
        </p>

        <p className="text-xs text-gray-500">
          Faster • Smarter • Transparent
        </p>

      </div>

    </div>
  );
};

export default HeroBadge;