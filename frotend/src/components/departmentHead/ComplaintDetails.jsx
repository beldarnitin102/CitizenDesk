import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../DashboardLayout";

import { useAuth } from "../../../context/AuthContext";

import ComplaintOverviewCard from "../../../components/departmentHead/complaints/ComplaintOverviewCard";
import ComplaintCitizenCard from "../../../components/departmentHead/complaints/ComplaintCitizenCard";
import ComplaintLocationCard from "../../../components/departmentHead/complaints/ComplaintLocationCard";
import ComplaintHistoryCard from "../../../components/departmentHead/complaints/ComplaintHistoryCard";

import {
  getDepartmentComplaintDetails,
} from "../../../services/operations/departmentHeadAPI";

function ComplaintDetails() {

  const { id } = useParams();

  const { token } = useAuth();

  const [complaint, setComplaint] = useState(null);

  const loadComplaint = async () => {

    try {

      const data =
        await getDepartmentComplaintDetails(
          id,
          token
        );

      setComplaint(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadComplaint();
  }, []);

  if (!complaint) return <DashboardLayout>Loading...</DashboardLayout>;

  return (
    <DashboardLayout>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-8">

          <ComplaintOverviewCard
            complaint={complaint}
          />

          <ComplaintHistoryCard
            complaint={complaint}
          />

        </div>

        <div className="space-y-8">

          <ComplaintCitizenCard
            complaint={complaint}
          />

          <ComplaintLocationCard
            complaint={complaint}
          />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default ComplaintDetails;