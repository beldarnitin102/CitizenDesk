import React from "react";
import { FiShield } from "react-icons/fi";

const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-5 py-3 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
        <FiShield className="text-lg text-green-600" />
      </div>

      <div>
        <p className="text-sm font-semibold text-green-700">
          AI-Powered System for Faster Resolution
        </p>

        <p className="text-xs text-slate-500">
          Smart Routing • Duplicate Detection • Live Tracking
        </p>
      </div>
    </div>
  );
};

export default HeroBadge;