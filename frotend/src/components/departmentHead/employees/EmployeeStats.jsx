import Card from "../../ui/Card";

function EmployeeStats({

  employees,

}) {

  const totalEmployees =
    employees.length;

  const totalWorkload =
    employees.reduce(

      (sum, emp) =>

        sum +
        emp.stats.workload,

      0

    );

  return (

    <div className="grid gap-6 md:grid-cols-2">

      <Card className="rounded-3xl p-6">

        <p className="text-slate-500">

          Total Employees

        </p>

        <h2 className="mt-2 text-4xl font-bold">

          {totalEmployees}

        </h2>

      </Card>

      <Card className="rounded-3xl p-6">

        <p className="text-slate-500">

          Current Workload

        </p>

        <h2 className="mt-2 text-4xl font-bold text-[#0F4C81]">

          {totalWorkload}

        </h2>

      </Card>

    </div>

  );

}

export default EmployeeStats;