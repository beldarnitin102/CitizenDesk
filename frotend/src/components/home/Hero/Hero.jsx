import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1700px] px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-r from-[#EEF4FB] via-white to-[#EEF8F3] shadow-lg">
          <div className="grid h-[650px] lg:grid-cols-[46%_54%]">
            <div className="h-full">
              <HeroContent />
            </div>

            {/* Right */}
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
