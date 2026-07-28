import Section from "../ui/Section";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <Section className="bg-slate-50 text-slate-950 py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <HeroContent />
        <HeroVisual />
      </div>
    </Section>
  );
}

export default Hero;
