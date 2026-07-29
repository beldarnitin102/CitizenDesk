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

      <div className="mt-16">
        <div className="grid gap-8 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex items-center">
              {/* Card */}
              <div className="flex-1">
                <StepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="absolute -right-7 top-1/2 hidden -translate-y-1/2 xl:flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="h-[2px] w-10 bg-blue-300"></div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-blue-200 text-2xl text-[#0F4C81]">
                      →
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default HowItWorksSection;
