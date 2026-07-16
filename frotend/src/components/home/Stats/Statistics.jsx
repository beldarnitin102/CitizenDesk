import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

import StatCard from "./StatCard";
import statsData from "./statsData";

const Statistics = () => {
  return (
    <section className="bg-white py-24">

      <Container>

        <SectionHeading
          badge="PLATFORM IMPACT"
          title="Making Public Services Faster and Smarter"
          subtitle="Our AI-powered District Grievance Management System improves transparency, reduces manual effort, and helps departments resolve citizen complaints efficiently."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              {...stat}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Statistics;