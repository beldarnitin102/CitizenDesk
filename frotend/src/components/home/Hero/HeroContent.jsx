import React from "react";
import HeroButtons from "./HeroButtons";
import HeroBadge from "./HeroBadge";

const HeroContent = () => {
  return (
   <div className="flex h-full items-center justify-center">
 <div className="w-full max-w-[560px] px-12 lg:px-20 space-y-8">

  <h1 className="text-[48px] font-extrabold leading-[1.1] tracking-tight lg:text-[68px]">
    <span className="block text-[#123D8D]">Your Voice.</span>
    <span className="block text-[#16A34A]">Our Action.</span>
  </h1>
<br />
  <p className="max-w-[480px] text-lg leading-8 text-slate-600">
    Report issues, track progress, and help us build a better Jalgaon
    through a transparent and AI-powered grievance management system.
  </p>
<br />
<HeroButtons />
<br />
<br />
 <HeroBadge />
 
<br />
<br />
<br />



  <br /> 
  <br />
 

</div>
</div>
  );
};

export default HeroContent;