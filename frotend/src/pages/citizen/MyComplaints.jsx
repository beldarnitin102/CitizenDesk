import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"; // 1. IMPORTED useAuth context hook

import ComplaintList from "../../components/complaints/ComplaintList";
import Section from "../../components/ui/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { getMyComplaints } from "../../services/operations/complaintAPI";

function MyComplaints() {
  const { token } = useAuth(); // 2. EXTRACTED the auth token
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only fetch records if the auth token is present
    if (token) {
      fetchComplaints();
    }
  }, [token]);

  async function fetchComplaints() {
    try {
      setLoading(true);

      // 3. FIXED: Passed the auth token directly into the API service function
      const response = await getMyComplaints(token);

      // Safe extraction check: looks for response.data or falls back directly onto the array layout
      const complaintsArray = response?.data || response || [];
      setComplaints(complaintsArray);
    } catch (error) {
      console.log("Complaint array retrieval error log:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <DashboardLayout title="My Complaints">
        <Section>
          <div className="flex h-64 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#0F4C81]"></div>
          </div>
        </Section>
      </DashboardLayout>
    );
  }

  return (
    // 4. FIXED: Cleaned up title property layout string
    <DashboardLayout title="My Complaints">
      <Section>
        <SectionTitle
          badge="Citizen Dashboard"
          title="My Complaints"
          subtitle="Track every complaint you've submitted and monitor its progress in real time."
        />

        <div className="mt-12">
          <ComplaintList complaints={complaints} />
        </div>
      </Section>
    </DashboardLayout>
  );
}

export default MyComplaints;
