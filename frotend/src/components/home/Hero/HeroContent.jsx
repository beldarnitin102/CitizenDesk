import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div className="relative z-10">

      <HeroBadge />

      <h1 className="mt-8 text-4xl font-extrabold leading-tight text-[var(--heading)] sm:text-5xl lg:text-6xl">

        AI Powered

        <span className="block text-[var(--primary)]">

          District Grievance

        </span>

        Management System

      </h1>

      <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--body)]">

        Submit complaints in your preferred language with photos or videos.
        Our AI automatically analyzes the issue, assigns the appropriate
        department, detects duplicate complaints, and provides real-time
        status tracking until resolution.

      </p>

      <HeroButtons />

      {/* Statistics */}

      <div className="mt-14 grid grid-cols-3 gap-6">

        <div>

          <h3 className="text-3xl font-bold text-[var(--primary)]">
            25K+
          </h3>

          <p className="mt-2 text-sm text-[var(--body)]">
            Complaints Resolved
          </p>

        </div>

        <div>

          <h3 className="text-3xl font-bold text-[var(--accent)]">
            98%
          </h3>

          <p className="mt-2 text-sm text-[var(--body)]">
            AI Accuracy
          </p>

        </div>

        <div>

          <h3 className="text-3xl font-bold text-[var(--progress)]">
            24/7
          </h3>

          <p className="mt-2 text-sm text-[var(--body)]">
            Smart Support
          </p>

        </div>

      </div>

    </div>
  );
};

export default HeroContent;