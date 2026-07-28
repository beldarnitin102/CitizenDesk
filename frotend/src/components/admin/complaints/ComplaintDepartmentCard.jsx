import Card from "../../ui/Card";

function ComplaintDepartmentCard({ complaint }) {
  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-xl font-bold">Department</h2>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm text-slate-500">Department</p>

          <p className="font-semibold">{complaint.department?.name || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Assigned Employee</p>

          <p className="font-semibold">
            {complaint.assignedEmployee?.name || "Unassigned"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Status</p>

          <p className="font-semibold">{complaint.status}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Priority</p>

          <p className="font-semibold">{complaint.priority}</p>
        </div>
      </div>
    </Card>
  );
}

export default ComplaintDepartmentCard;
