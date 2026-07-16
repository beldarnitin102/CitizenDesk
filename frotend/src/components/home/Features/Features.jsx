import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

import FeatureCard from "./FeatureCard";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="bg-[var(--background)] py-24">

      <Container>

        <SectionHeading
          badge="POWERFUL FEATURES"
          title="Everything You Need for Modern Complaint Management"
          subtitle="Our AI-powered grievance platform simplifies complaint submission, automates department assignment, enables real-time tracking, and improves transparency for both citizens and government authorities."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Features;