import Card from "../../ui/Card";

function EmployeePerformanceTable({ employees }) {
  return (
    <Card className="rounded-3xl p-6">
      <h2 className="mb-8 text-2xl font-bold">Employee Performance</h2>

      {employees.length === 0 ? (
        <p className="text-slate-500">No employee performance available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-4 text-left">Employee</th>

                <th className="px-4 py-4 text-center">Assigned</th>

                <th className="px-4 py-4 text-center">Resolved</th>

                <th className="px-4 py-4 text-center">In Progress</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee._id._id}
                  className="border-b border-slate-100"
                >
                  <td className="px-4 py-5">
                    <div>
                      <h3 className="font-semibold">{employee._id.name}</h3>

                      <p className="text-sm text-slate-500">
                        {employee._id.email}
                      </p>
                    </div>
                  </td>

                  <td className="px-4 py-5 text-center font-semibold">
                    {employee.totalAssigned}
                  </td>

                  <td className="px-4 py-5 text-center font-semibold text-green-600">
                    {employee.resolved}
                  </td>

                  <td className="px-4 py-5 text-center font-semibold text-orange-600">
                    {employee.inProgress}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}

export default EmployeePerformanceTable;
