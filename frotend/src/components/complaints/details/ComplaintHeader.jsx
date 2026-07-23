import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Card from "../../ui/Card";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

const statusVariant = {
  PENDING: "warning",
  ASSIGNED: "primary",
  IN_PROGRESS: "primary",
  RESOLVED: "success",
  REJECTED: "danger",
};

function ComplaintHeader({ complaint }) {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden rounded-3xl">

      <div className="bg-gradient-to-r from-[#0F4C81] to-[#2563EB] p-8 text-white">

        <Button
          variant="secondary"
          onClick={() => navigate(-1)}
          className="mb-6 bg-blend-color-burn text-[#1380df] hover:bg-slate-50"
        >
          <ArrowLeft size={18} />
          Back
        </Button>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-sm uppercase tracking-widest text-blue-100">
              Complaint Number
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              {complaint.complaintNumber}
            </h1>

            <h2 className="mt-5 text-2xl font-semibold">
              {complaint.title}
            </h2>

          </div>

          <div className="flex flex-wrap gap-3">

            <Badge
              variant={statusVariant[complaint.status] || "secondary"}
            >
              {complaint.status.replace("_", " ")}
            </Badge>

            <Badge variant="outline">
              {complaint.priority}
            </Badge>

            <Badge variant="outline">
              {complaint.category}
            </Badge>

          </div>

        </div>

      </div>

    </Card>
  );
}

export default ComplaintHeader;