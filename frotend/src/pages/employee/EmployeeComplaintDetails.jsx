import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import ComplaintHeader from "../../components/employee/details/ComplaintHeader";

import CitizenInfo from "../../components/employee/details/CitizenInfo";
import ComplaintInfo from "../../components/employee/details/ComplaintInfo";
import ComplaintLocation from "../../components/employee/details/ComplaintLocation";
import ComplaintAttachments from "../../components/employee/details/ComplaintAttachments";
import AIAnalysis from "../../components/employee/details/AIAnalysis";
import ComplaintTimeline from "../../components/employee/details/ComplaintTimeline";
import AssignComplaintCard from "../../components/employee/details/AssignComplaintCard";
import UpdateStatusCard from "../../components/employee/details/UpdateStatusCard";
import StatusHistory from "../../components/employee/details/StatusHistory";

import { useAuth } from "../../context/AuthContext";

import { getEmployeeComplaintDetails } from "../../services/operations/employeeAPI";

function EmployeeComplaintDetails() {
  const { id } = useParams();

  const { token } = useAuth();

  const [complaint, setComplaint] = useState(null);

  const [loading, setLoading] = useState(true);

  const [refreshKey, setRefreshKey] = useState(0);

  const fetchComplaint = async () => {
    try {
      const data = await getEmployeeComplaintDetails(id,token);

      setComplaint(data);

      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchComplaint();
  }, [id,token]);

  if (loading) {
    return (
      <DashboardLayout title="Complaint Details">
        <div className="rounded-3xl bg-white p-10 text-center">
          Loading Complaint...
        </div>
      </DashboardLayout>
    );
  }

  if (!complaint) {
    return (
      <DashboardLayout title="Complaint Details">
        <div className="rounded-3xl bg-white p-10 text-center">
          Complaint not found.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Complaint Details">
      <div className="space-y-8">
        <ComplaintHeader complaint={complaint} />

        {/* Part 2 */}

        <div className="grid gap-8 lg:grid-cols-2">
          <CitizenInfo complaint={complaint} />

          <ComplaintInfo complaint={complaint} />
        </div>

        {/* Part 3 */}

        <div className="grid gap-8 lg:grid-cols-2">
          <ComplaintLocation complaint={complaint} />

          <ComplaintAttachments complaint={complaint} />
        </div>

        {/* Part 4 */}

        <AIAnalysis complaint={complaint} />

        <ComplaintTimeline complaintId={id} />

        {/* Part 5 */}

        <div className="grid gap-8 lg:grid-cols-2">
          <AssignComplaintCard
            complaint={complaint}
            onRefresh={fetchComplaint}
          />

          <UpdateStatusCard complaint={complaint} onRefresh={fetchComplaint} />
        </div>

        {/* Part 6 */}

        <StatusHistory complaintId={id} refreshKey={refreshKey} />
      </div>
    </DashboardLayout>
  );
}

export default EmployeeComplaintDetails;
