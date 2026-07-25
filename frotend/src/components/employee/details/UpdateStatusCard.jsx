import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";

import Button from "../../ui/Button";
import Card from "../../ui/Card";
import TextArea from "../../ui/TextArea";

import { updateComplaintStatus } from "../../../services/operations/employeeAPI";

function UpdateStatusCard({ complaint, onRefresh }) {
  const [status, setStatus] = useState(complaint.status);

  const [loading, setLoading] = useState(false);

  const { token } = useAuth();

  const [remarks, setRemarks] = useState("");

  const handleUpdate = async () => {
    setLoading(true);

    try {
      await updateComplaintStatus(
        complaint._id,
        {
          status,
          remarks,
        },
        token,
      );

      setRemarks("");

      onRefresh?.();
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Unable to update complaint status";
      toast.error(message);
      console.error("UpdateStatusCard error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-2xl font-bold">Update Status</h2>

      <div className="mt-6 space-y-5">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="ASSIGNED">ASSIGNED</option>

          <option value="IN_PROGRESS">IN PROGRESS</option>

          <option value="RESOLVED">RESOLVED</option>

          <option value="REJECTED">REJECTED</option>

          <option value="CLOSED">CLOSED</option>
        </select>

        <TextArea
          rows={4}
          placeholder="Remarks..."
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />

        <Button onClick={handleUpdate} disabled={loading} className="w-full">
          {loading ? "Updating..." : "Update Status"}
        </Button>
      </div>
    </Card>
  );
}

export default UpdateStatusCard;
