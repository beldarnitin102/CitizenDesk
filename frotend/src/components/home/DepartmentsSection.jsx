import { useEffect, useState } from "react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import DepartmentCard from "./DepartmentCard";
import Button from "../ui/Button";

import { getHeroDepartments } from "../../services/operations/heroAPI";

function DepartmentsSection() {
  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(true);

  const colors = [
    "from-blue-500 to-sky-500",

    "from-cyan-500 to-blue-500",

    "from-amber-500 to-orange-500",

    "from-green-500 to-emerald-500",

    "from-red-500 to-rose-500",

    "from-violet-500 to-purple-500",

    "from-indigo-500 to-blue-500",

    "from-pink-500 to-rose-500",
  ];

  const icons = ["🏛️", "💧", "⚡", "🗑️", "🏥", "🚧", "🌳", "🏘️"];

  const loadDepartments = async () => {
    try {
      const data = await getHeroDepartments();

      const formatted = data.map((department, index) => ({
        ...department,

        color: colors[index % colors.length],

        icon: icons[index % icons.length],
      }));

      setDepartments(formatted);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  return (
    <Section className="bg-slate-50">
      <Container>
        <SectionTitle
          badge="Government Departments"
          title="AI Automatically Routes Every Complaint"
          description="Once a complaint is submitted, Artificial Intelligence identifies the issue and instantly forwards it to the correct government department."
          center
        />

        {loading ? (
          <div className="py-16 text-center">Loading Departments...</div>
        ) : (
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((department) => (
              <DepartmentCard
                key={department._id}
                title={department.title}
                description={department.description}
                complaints={department.complaints}
                icon={department.icon}
                color={department.color}
              />
            ))}
          </div>
        )}

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
        </div>
      </Container>
    </Section>
  );
}

export default DepartmentsSection;
