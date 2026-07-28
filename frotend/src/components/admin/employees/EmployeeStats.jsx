import Card from "../../ui/Card";

function EmployeeStats({ employees }) {
  const totalEmployees = employees.length;

  const departmentHeads = employees.filter(
    (emp) => emp.role === "DEPARTMENT_HEAD",
  ).length;

  const employeesCount = employees.filter(
    (emp) => emp.role === "EMPLOYEE",
  ).length;

  const activeEmployees = employees.filter((emp) => emp.isActive).length;

  const cards = [
    {
      title: "Total Employees",
      value: totalEmployees,
    },
    {
      title: "Department Heads",
      value: departmentHeads,
    },
    {
      title: "Employees",
      value: employeesCount,
    },
    {
      title: "Active",
      value: activeEmployees,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((item) => (
        <Card key={item.title} className="rounded-3xl p-6">
          <p className="text-slate-500">{item.title}</p>

          <h2 className="mt-3 text-4xl font-bold text-[#0F4C81]">
            {item.value}
          </h2>
        </Card>
      ))}
    </div>
  );
}

export default EmployeeStats;
