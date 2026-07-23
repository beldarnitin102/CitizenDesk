import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

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

  // 1. Defend and normalize status format cleanly to string layout
  const currentStatus = complaint?.status?.toUpperCase()?.trim() || "";

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
              {complaint?.complaintNumber || "N/A"}
            </h1>

            <h2 className="mt-5 text-2xl font-semibold">{complaint?.title || "Untitled Issue"}</h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* 2. FIXED: Wrapped status string formatting into a safe variable call */}
            <Badge variant={statusVariant[currentStatus] || "secondary"}>
              {currentStatus ? currentStatus.replace("_", " ") : "UNKNOWN"}
            </Badge>

            <Badge variant="outline">{complaint?.priority || "LOW"}</Badge>

            <Badge variant="outline">{complaint?.category || "General"}</Badge>

            {/* 3. FIXED: Used the normalized variable check to guarantee button visibility matching schema status layout */}
            {currentStatus === "PENDING" && (
              <Link to={`/dashboard/edit-complaint/${complaint._id}`}>
                <Button className="bg-amber-300 text-[#0F4C81] hover:bg-slate-100">
                  Edit Complaint
                </Button>
              </Link>
            )}
          </div>

        </div>
      </div>
    </Card>
  );
}

export default ComplaintHeader;
