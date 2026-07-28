import Card from "../../ui/Card";

function DepartmentOverview({ departments }) {
  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-2xl font-bold">Departments</h2>

      <div className="mt-8 space-y-5">
        {departments.map((department) => (
          <div
            key={department._id}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <h3 className="font-semibold">{department.name}</h3>

            <p className="mt-2 text-slate-600">{department.description}</p>

            <p className="mt-2 text-sm text-slate-500">{department.email}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default DepartmentOverview;
