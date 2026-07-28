import Button from "../../ui/Button";

function DepartmentTable({ departments, onEdit }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Department</th>

            <th className="px-6 py-4 text-left font-semibold">Description</th>

            <th className="px-6 py-4 text-left font-semibold">Email</th>

            <th className="px-6 py-4 text-center font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((department) => (
            <tr key={department._id} className="border-t">
              <td className="px-6 py-5 font-medium">{department.name}</td>

              <td className="px-6 py-5">{department.description}</td>

              <td className="px-6 py-5">{department.email}</td>

              <td className="px-6 py-5 text-center">
                <Button size="sm" onClick={() => onEdit(department)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}

          {departments.length === 0 && (
            <tr>
              <td colSpan={4} className="py-10 text-center text-slate-500">
                No departments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentTable;
