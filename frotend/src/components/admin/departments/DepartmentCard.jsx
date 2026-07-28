import Card from "../../ui/Card";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

function DepartmentCard({ department, onEdit }) {
  return (
    <Card className="rounded-3xl p-6 hover:shadow-xl transition">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            {department.name}
          </h2>

          <p className="mt-2 text-slate-600">{department.description}</p>
        </div>

        <Badge>Department</Badge>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-sm text-slate-600">
          <span className="font-semibold">Email :</span> {department.email}
        </p>
      </div>

      <div className="mt-8">
        <Button className="w-full" onClick={() => onEdit(department)}>
          Edit Department
        </Button>
      </div>
    </Card>
  );
}

export default DepartmentCard;
