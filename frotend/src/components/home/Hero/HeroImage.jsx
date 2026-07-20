import React from "react";
import heroImage from "../../../assets/images/hero.png";

const HeroImage = () => {
  return (
    <div className="relative hidden h-full overflow-hidden lg:block">
      {/* Building Image */}
      <img
    src={heroImage}
    alt="District Office"
    className="h-full w-full object-cover object-center"
/>

      {/* Left Fade Overlay */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#EEF4FB] via-[#EEF4FB]/80 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
};

export default HeroImage;