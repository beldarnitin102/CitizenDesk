import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-100 blur-[150px]" />

      <div className="mx-auto max-w-[1450px] px-8">

        <div className="grid min-h-[760px] items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

        <HeroStats />

      </div>

    </section>
  );
};

export default Hero;