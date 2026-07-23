import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // 1. FIXED: Added missing Auth Context import

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

import ComplaintHeader from "../../components/complaints/details/ComplaintHeader";
import ComplaintInfo from "../../components/complaints/details/ComplaintInfo";
import ComplaintLocation from "../../components/complaints/details/ComplaintLocation";
import ComplaintAIAnalysis from "../../components/complaints/details/ComplaintAIAnalysis";
import ComplaintAttachments from "../../components/complaints/details/ComplaintAttachments";
import ComplaintTimeline from "../../components/complaints/details/ComplaintTimeline";

import { getComplaintDetails } from "../../services/operations/complaintAPI";

function ComplaintDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth(); // 2. FIXED: Extracted the auth token

  const [loading, setLoading] = useState(true);
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    // Only run if both the URL id parameter and session token are ready
    if (id && token) {
      fetchComplaint();
    }
  }, [id, token]); // 3. FIXED: Added dependency array strings tracking

  async function fetchComplaint() {
    try {
      setLoading(true);

      // 4. FIXED: Passed token alongside the database document id parameter
      const response = await getComplaintDetails(id, token);

      console.log("Raw Server Complaint Details Payload:", response);

      // 5. FIXED DATA EXTRACTION PATHWAY:
      // Breaks down response.data (from client apiConnector wrapper layer) 
      // then falls back onto your ApiResponse helper .data object payload envelope
      const targetPayload = response?.data?.data || response?.data || response;
      
      // If your backend attaches it explicitly to a .complaint wrapper key, use that, otherwise assign the payload itself
      const directRecord = targetPayload?.complaint || targetPayload;
      
      setComplaint(directRecord);
    } catch (error) {
      console.log("Detailed complaint breakdown fetch error view log:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <DashboardLayout title="Complaint Details">
        <div className="flex h-[500px] items-center justify-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0F4C81]"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (!complaint) {
    return (
      <DashboardLayout title="Complaint Details">
        <Card className="p-12 text-center">
          <div className="text-6xl">📄</div>
          <h2 className="mt-6 text-3xl font-bold">Complaint Not Found</h2>
          <p className="mt-3 text-slate-500">The requested complaint does not exist.</p>
          <Button className="mt-8" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </Card>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Complaint Details">
      <div className="space-y-8">
        <ComplaintHeader complaint={complaint} />
        <ComplaintInfo complaint={complaint} />
        <ComplaintLocation complaint={complaint} />
        <ComplaintAIAnalysis complaint={complaint} />
        <ComplaintAttachments complaint={complaint} />
        <ComplaintTimeline complaint={complaint} />
      </div>
    </DashboardLayout>
  );
}

export default ComplaintDetails;
