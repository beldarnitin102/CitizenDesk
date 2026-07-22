import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import StepCard from "./StatCard";

function HowItWorksSection() {

  const steps = [
    {
      number: "01",
      title: "Register Account",
      description:
        "Create your citizen account securely using your email and mobile number.",
      icon: "👤",
    },
    {
      number: "02",
      title: "Submit Complaint",
      description:
        "Write your complaint in any language and upload photos, videos or documents.",
      icon: "📝",
    },
    {
      number: "03",
      title: "AI Processing",
      description:
        "Our AI understands the complaint, detects the category and assigns the correct department.",
      icon: "🤖",
    },
    {
      number: "04",
      title: "Track Progress",
      description:
        "Receive real-time status updates from the department until resolution.",
      icon: "📍",
    },
    {
      number: "05",
      title: "Issue Resolved",
      description:
        "Department resolves the complaint and you can provide your feedback.",
      icon: "✅",
    },
  ];

  return (
    <Section className="bg-slate-50">

      

        <SectionTitle
          badge="How It Works"
          title="Simple Process. Smart Resolution."
          description="Submit complaints in your preferred language and let Artificial Intelligence automatically classify, assign and monitor every grievance."
          center
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2 xl:grid-cols-5">

          {steps.map((step, index) => (

            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />

          ))}

        </div>

      

    </Section>
  );
}

export default HowItWorksSection;