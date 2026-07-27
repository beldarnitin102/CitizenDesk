import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function EmployeePerformanceTable({ employees = [] }) {
  return (
    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-xl font-bold">
        Employee Performance
      </h2>

      {employees.length === 0 ? (
        <p className="text-slate-500">
          No employee performance available.
        </p>
      ) : (
        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead>

              <tr className="border-b">

                <th className="px-4 py-3 text-left">
                  Employee
                </th>

                <th className="px-4 py-3 text-center">
                  Assigned
                </th>

                <th className="px-4 py-3 text-center">
                  Resolved
                </th>

                <th className="px-4 py-3 text-center">
                  In Progress
                </th>

                <th className="px-4 py-3 text-center">
                  Resolution %
                </th>

              </tr>

            </thead>

            <tbody>

              {employees.map((emp) => {
                const rate =
                  emp.totalAssigned === 0
                    ? 0
                    : (
                        (emp.resolved /
                          emp.totalAssigned) *
                        100
                      ).toFixed(1);

                return (
                  <tr
                    key={emp._id}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="px-4 py-4 font-medium">
                      {emp.employeeName}
                    </td>

                    <td className="px-4 py-4 text-center">
                      {emp.totalAssigned}
                    </td>

                    <td className="px-4 py-4 text-center">
                      {emp.resolved}
                    </td>

                    <td className="px-4 py-4 text-center">
                      {emp.inProgress}
                    </td>

                    <td className="px-4 py-4 text-center">

                      <Badge>
                        {rate}%
                      </Badge>

                    </td>
                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>
      )}

    </Card>
  );
}

export default EmployeePerformanceTable;