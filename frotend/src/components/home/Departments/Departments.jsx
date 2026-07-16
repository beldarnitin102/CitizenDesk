import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

import DepartmentCard from "./DepartmentCard";
import departmentsData from "./departmentsData";

const Departments = () => {
  return (
    <section className="bg-white py-24">

      <Container>

        <SectionHeading
          badge="GOVERNMENT DEPARTMENTS"
          title="Smart Complaint Routing Across Departments"
          subtitle="Artificial Intelligence automatically analyzes every complaint and forwards it to the appropriate department, reducing delays and ensuring faster resolution."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {departmentsData.map((department) => (
            <DepartmentCard
              key={department.id}
              {...department}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Departments;