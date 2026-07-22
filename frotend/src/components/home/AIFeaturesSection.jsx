import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "./FeatureCard";

function AIFeaturesSection() {
  const features = [
    {
      icon: "🌍",
      title: "Multilingual Understanding",
      description:
        "Citizens can submit complaints in Marathi, Hindi, English, or any regional language. AI automatically understands and standardizes the complaint.",
      color: "blue",
    },
    {
      icon: "🏛️",
      title: "Department Prediction",
      description:
        "Artificial Intelligence identifies the issue category and automatically routes complaints to the correct government department.",
      color: "green",
    },
    {
      icon: "🖼️",
      title: "Image Analysis",
      description:
        "Upload a photo of the issue. AI detects potholes, garbage, water leakage, street-light faults, and more using computer vision.",
      color: "purple",
    },
    {
      icon: "🤖",
      title: "AI Assistant",
      description:
        "Citizens can chat with the AI assistant to check complaint status, understand updates, and receive guidance in their preferred language.",
      color: "orange",
    },
    {
      icon: "🔄",
      title: "Duplicate Detection",
      description:
        "AI recognizes duplicate complaints by analyzing text similarity and location, preventing repeated reports for the same issue.",
      color: "cyan",
    },
    {
      icon: "⚡",
      title: "Priority Prediction",
      description:
        "Machine learning predicts complaint urgency, ensuring dangerous issues like exposed wires receive immediate attention.",
      color: "red",
    },
  ];

  return (
    <Section className="bg-slate-50">

      <Container>

        <SectionTitle
          badge="Artificial Intelligence"
          title="AI That Powers Smarter Governance"
          description="Our platform uses Artificial Intelligence to understand complaints, classify issues, assign departments, analyze images, detect duplicates, and provide intelligent assistance to citizens."
          center
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}

export default AIFeaturesSection;