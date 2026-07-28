import Card from "../../ui/Card";

import ComplaintStatusBadge from "./ComplaintStatusBadge";
import ComplaintPriorityBadge from "./ComplaintPriorityBadge";

function ComplaintOverviewCard({ complaint }) {
  return (
    <Card className="rounded-3xl p-8">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-2xl font-bold">{complaint.title}</h2>

        <ComplaintStatusBadge status={complaint.status} />

        <ComplaintPriorityBadge priority={complaint.priority} />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-500">Complaint Number</p>

          <p className="font-semibold">{complaint.complaintNumber}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Category</p>

          <p className="font-semibold">{complaint.category}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Created</p>

          <p className="font-semibold">
            {new Date(complaint.createdAt).toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">AI Category</p>

          <p className="font-semibold">
            {complaint.aiClassification?.detectedCategory}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold">Description</h3>

        <p className="mt-3 leading-7 text-slate-600">{complaint.description}</p>
      </div>
    </Card>
  );
}

export default ComplaintOverviewCard;
