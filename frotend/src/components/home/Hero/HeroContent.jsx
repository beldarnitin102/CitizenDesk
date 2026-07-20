import React from "react";
import HeroButtons from "./HeroButtons";
import HeroBadge from "./HeroBadge";

const HeroContent = () => {
  return (
    <div className="flex h-full items-center">
      <div className="w-full max-w-[540px] px-8 lg:px-16 xl:px-20">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl">
          <span className="block text-[#123D8D]">
            Your Voice.
          </span>

          <span className="mt-2 block text-[#16A34A]">
            Our Action.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg leading-8 text-slate-600">
          Report issues, track progress, and help us build a better Jalgaon
          through a transparent and AI-powered grievance management system.
        </p>

        {/* Buttons */}
        <div className="mt-10">
          <HeroButtons />
        </div>

        {/* Badge */}
        <div className="mt-8">
          <HeroBadge />
        </div>

      </div>
    </div>
  );
};

export default HeroContent;