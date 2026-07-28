import { useMemo } from "react";

import EmployeeCard from "./EmployeeCard";

function EmployeeTable({ employees, filters, refresh }) {
  const filteredEmployees = useMemo(() => {
    let data = [...employees];

    if (filters.role) {
      data = data.filter((emp) => emp.role === filters.role);
    }

    if (filters.department) {
      data = data.filter((emp) => emp.department?._id === filters.department);
    }

    if (filters.search) {
      data = data.filter((emp) =>
        emp.name.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    return data;
  }, [employees, filters]);

  if (filteredEmployees.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow">
        No Employees Found
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee._id}
          employee={employee}
          refresh={refresh}
        />
      ))}
    </div>
  );
}

export default EmployeeTable;
