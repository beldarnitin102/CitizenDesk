import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { useAuth } from "../../context/AuthContext";

import ComplaintOverviewCard from "../../components/admin/complaints/ComplaintOverviewCard";
import ComplaintCitizenCard from "../../components/admin/complaints/ComplaintCitizenCard";
import ComplaintDepartmentCard from "../../components/admin/complaints/ComplaintDepartmentCard";
import ComplaintHistoryCard from "../../components/admin/complaints/ComplaintHistoryCard";

import { getComplaintDetails } from "../../services/operations/adminAPI";

function ComplaintDetails() {
  const { id } = useParams();

  const { token } = useAuth();

  const [complaint, setComplaint] = useState(null);

  const loadComplaint = async () => {
    try {
      const data = await getComplaintDetails(id, token);

      setComplaint(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadComplaint();
  }, []);

  if (!complaint) {
    return <DashboardLayout>Loading...</DashboardLayout>;
  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <ComplaintOverviewCard complaint={complaint} />

          <ComplaintHistoryCard complaint={complaint} />
        </div>

        <div className="space-y-8">
          <ComplaintCitizenCard complaint={complaint} />

          <ComplaintDepartmentCard complaint={complaint} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ComplaintDetails;
