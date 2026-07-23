import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

const priorityColor = {
  LOW: "success",
  MEDIUM: "warning",
  HIGH: "danger",
  URGENT: "danger",
};

const statusColor = {
  PENDING: "warning",
  ASSIGNED: "primary",
  IN_PROGRESS: "primary",
  RESOLVED: "success",
  REJECTED: "danger",
};

function ComplaintCard({ complaint }) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Complaint Number
          </p>

          <h3 className="mt-1 font-bold text-[#0F4C81]">
            {complaint.complaintNumber}
          </h3>
        </div>

        <Badge variant={statusColor[complaint.status] || "secondary"}>
          {complaint.status.replace("_", " ")}
        </Badge>
      </div>

      {/* Title */}

      <div className="mt-6">
        <h2 className="text-xl font-bold text-slate-900">
          {complaint.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">
          {complaint.description}
        </p>
      </div>

      {/* Information */}

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span className="text-slate-500">
            Department
          </span>

          <span className="font-medium">
            {complaint.department?.name || "Pending"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Category
          </span>

          <span className="font-medium">
            {complaint.category}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-500">
            Priority
          </span>

          <Badge
            variant={
              priorityColor[complaint.priority] || "secondary"
            }
          >
            {complaint.priority}
          </Badge>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Created
          </span>

          <span className="font-medium">
            {new Date(
              complaint.createdAt
            ).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <span className="text-sm text-slate-500">
          View complete complaint
        </span>

        <Link
          to={`/dashboard/complaints/${complaint._id}`}
          className="font-semibold text-[#0F4C81] transition group-hover:translate-x-1"
        >
          View Details →
        </Link>
      </div>
    </Card>
  );
}

export default ComplaintCard;