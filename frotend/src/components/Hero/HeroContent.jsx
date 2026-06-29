import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div className="max-w-xl">

      <HeroBadge />

      <h1 className="mt-8 text-6xl font-black leading-tight text-[var(--heading)]">

        Your Voice.

        <br />

        <span className="text-[var(--accent)]">
          Our Action.
        </span>

      </h1>

      <p className="mt-8 text-lg leading-9 text-[var(--body)]">

        Report civic issues effortlessly using our AI-powered
        grievance management platform. Submit complaints,
        upload images, track progress in real time, and
        receive transparent updates until resolution.

      </p>

      <HeroButtons />

    </div>
  );
};

export default HeroContent;