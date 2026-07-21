import Section from "../ui/Section";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-24 lg:pt-32">
      {/* Decorative Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-[120px] animate-glow"></div>

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-green-100/40 blur-[120px] animate-glow"></div>

     <div className="grid min-h-[760px] items-center gap-20 lg:grid-cols-[1fr_1.15fr]">
        <HeroContent />
        <HeroVisual />
      </div>

      <div className="mt-20 hidden justify-center lg:flex">
        <div className="flex flex-col items-center">
          <span className="mb-3 text-xs tracking-widest text-slate-500 uppercase">
            Scroll
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border-2 border-slate-300">
            <div className="mt-2 h-3 w-1 rounded-full bg-[#0F4C81] animate-bounce"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
