import React from "react";
import { FiShield } from "react-icons/fi";

const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-4 rounded-xl border border-green-200 bg-green-50 px-6 py-4 shadow-sm">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
        <FiShield className="text-xl text-green-600" />
      </div>

      <div>

        <p className="font-semibold text-green-700">
          AI-Powered System for Faster Resolution
        </p>

        <p className="text-sm text-slate-500">
          Smart Routing • Duplicate Detection • Live Tracking
        </p>

      </div>

    </div>
  );
};

export default HeroBadge;