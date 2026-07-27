import Card from "../ui/Card";
import Badge from "../ui/Badge";

function ComplaintOverviewCard({ complaint }) {
  return (
    <Card className="rounded-3xl p-8">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold">{complaint.title}</h2>

          <p className="mt-2 text-slate-500">
            Complaint No : {complaint.complaintNumber}
          </p>
        </div>

        <Badge>{complaint.status}</Badge>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-slate-500">Category</p>

          <p className="font-semibold">{complaint.category}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Priority</p>

          <Badge>{complaint.priority}</Badge>
        </div>

        <div>
          <p className="text-sm text-slate-500">Department</p>

          <p className="font-semibold">{complaint.department?.name}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Assigned Employee</p>

          <p className="font-semibold">
            {complaint.assignedEmployee?.name || "Not Assigned"}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-slate-500">Description</p>

        <p className="mt-2 leading-7 text-slate-700">{complaint.description}</p>
      </div>

      {complaint.attachments?.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 font-semibold">Attachments</h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {complaint.attachments.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Complaint"
                className="h-44 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

export default ComplaintOverviewCard;
