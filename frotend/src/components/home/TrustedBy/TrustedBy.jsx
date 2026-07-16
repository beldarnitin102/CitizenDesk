import {
  FiCpu,
  FiMap,
  FiShield,
  FiGlobe,
  FiClock,
} from "react-icons/fi";

import Container from "../../ui/Container";
import TrustedCard from "./TrustedCard";

const trustedFeatures = [
  {
    icon: FiCpu,
    title: "AI Powered Analysis",
    description:
      "Automatically classifies complaints and detects priority using AI.",
    color: "var(--primary)",
  },
  {
    icon: FiMap,
    title: "Smart Department Routing",
    description:
      "Every complaint reaches the correct department instantly.",
    color: "var(--accent)",
  },
  {
    icon: FiGlobe,
    title: "Multilingual Support",
    description:
      "Submit complaints in English, Hindi and Marathi.",
    color: "var(--progress)",
  },
  {
    icon: FiClock,
    title: "Real-Time Tracking",
    description:
      "Track complaint progress from submission to resolution.",
    color: "var(--pending)",
  },
  {
    icon: FiShield,
    title: "Secure Government Portal",
    description:
      "Protected authentication and transparent complaint management.",
    color: "var(--secondary)",
  },
];

const TrustedBy = () => {
  return (
    <section className="bg-white py-20">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[var(--primary)]">
            WHY CHOOSE OUR PLATFORM
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[var(--heading)] lg:text-5xl">
            Designed for Faster Public Service
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--body)]">
            Our AI-powered grievance system helps citizens report
            issues effortlessly while enabling government departments
            to resolve complaints faster with complete transparency.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {trustedFeatures.map((item) => (
            <TrustedCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default TrustedBy;