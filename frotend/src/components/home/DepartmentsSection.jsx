import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import DepartmentCard from "./DepartmentCard";
import Button from "../ui/Button";

function DepartmentsSection() {

  const departments = [
    {
      title: "Public Works",
      icon: "🛣️",
      description:
        "Road damage, bridges, footpaths, government infrastructure and public construction issues.",
      complaints: "2,154",
      color: "from-blue-500 to-sky-500",
    },
    {
      title: "Water Supply",
      icon: "💧",
      description:
        "Water leakage, pipeline damage, drinking water supply and drainage complaints.",
      complaints: "1,482",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Electricity",
      icon: "⚡",
      description:
        "Street lights, electric poles, exposed wires and power related complaints.",
      complaints: "978",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Sanitation",
      icon: "🗑️",
      description:
        "Garbage collection, waste management, cleanliness and public hygiene.",
      complaints: "2,684",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Health",
      icon: "🏥",
      description:
        "Government hospitals, medical camps and public health related complaints.",
      complaints: "746",
      color: "from-red-500 to-rose-500",
    },
    {
      title: "Municipal Planning",
      icon: "🏙️",
      description:
        "Illegal construction, encroachment, zoning and planning issues.",
      complaints: "561",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <Section className="bg-slate-50">

      <Container>

        <SectionTitle
          badge="Government Departments"
          title="AI Automatically Routes Every Complaint"
          description="Once a complaint is submitted, Artificial Intelligence identifies the issue and instantly forwards it to the correct government department."
          center
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {departments.map((department) => (
            <DepartmentCard
              key={department.title}
              {...department}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#0F4C81] to-[#2563EB] px-10 py-14 text-center text-white">

          <h2 className="text-4xl font-bold">
            AI Ensures Every Complaint Reaches
            <br />
            The Right Department
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">

            From roads to water supply, sanitation, electricity and public
            health, our intelligent routing system reduces manual work and
            speeds up grievance resolution.

          </p>

          <Button
            className="mt-10 bg-white text-[#0F4C81] hover:bg-slate-100"
            size="lg"
          >
            Submit Complaint
          </Button>

        </div>

      </Container>

    </Section>
  );
}

export default DepartmentsSection;