import { Link } from "react-router-dom";

import Card from "../../ui/Card";
import Button from "../../ui/Button";

import ComplaintStatusBadge from "./ComplaintStatusBadge";
import ComplaintPriorityBadge from "./ComplaintPriorityBadge";

function ComplaintCard({ complaint }) {
  return (
    <Card className="rounded-3xl p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold">{complaint.title}</h2>

            <ComplaintStatusBadge status={complaint.status} />

            <ComplaintPriorityBadge priority={complaint.priority} />
          </div>

          <p className="text-sm text-slate-500">
            Complaint No : {complaint.complaintNumber}
          </p>

          <p className="text-slate-600 line-clamp-2">{complaint.description}</p>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <p>Citizen : {complaint.citizen?.name || "-"}</p>

            <p>Department : {complaint.department?.name || "-"}</p>

            <p>Assigned : {complaint.assignedEmployee?.name || "Unassigned"}</p>
          </div>
        </div>

        <Link to={`/admin/complaints/${complaint._id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    </Card>
  );
}

export default ComplaintCard;
