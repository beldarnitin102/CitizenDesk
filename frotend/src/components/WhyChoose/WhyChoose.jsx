import FeatureCard from "./FeatureCard";
import featureData from "./featureData";

const WhyChoose = () => {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[var(--primary)]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[var(--heading)]">
            Smarter Governance
            <br />
            Better Citizen Experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--body)]">
            Our AI-powered grievance platform simplifies complaint
            registration, automatically routes issues to the correct
            department, and provides complete transparency throughout the
            resolution process.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {featureData.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;