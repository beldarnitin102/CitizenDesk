import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Container from "../../ui/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] pt-24 pb-20 lg:pt-32 lg:pb-28">

      {/* Background Blur */}
      <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-50 blur-3xl"></div>

      <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-green-100 opacity-40 blur-3xl"></div>

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>

    </section>
  );
};

export default Hero;