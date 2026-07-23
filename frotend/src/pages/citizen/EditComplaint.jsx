import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // 1. FIXED: Imported useAuth context hook

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import EditComplaintForm from "../../components/complaints/edit/EditComplaintForm";
import { getComplaintDetails } from "../../services/operations/complaintAPI";

function EditComplaint() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth(); // 2. FIXED: Extracted the auth token

  const [loading, setLoading] = useState(true);
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    // 3. FIXED: Added validation safeguards to prevent firing empty requests
    if (id && token) {
      loadComplaint();
    }
  }, [id, token]); // 4. FIXED: Added correct reactive dependency array tracking hooks

  async function loadComplaint() {
    try {
      setLoading(true);

      // 5. FIXED: Passed token string signature alongside the document identification id
      const response = await getComplaintDetails(id, token);

      console.log("Edit Page Loaded Payload Check:", response);

      // 6. FIXED EXTRACTION PATHWAY:
      // Breaks down response.data (from client apiConnector wrapper layer) 
      // then falls back onto your ApiResponse helper .data object payload envelope
      const targetPayload = response?.data?.data || response?.data || response;
      
      // If your backend attaches it explicitly to a .complaint wrapper key, use that, otherwise assign the payload itself
      const directRecord = targetPayload?.complaint || targetPayload;

      setComplaint(directRecord);
    } catch (error) {
      console.log("Complaint payload compilation loading error log:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <DashboardLayout title="Edit Complaint">
        <div className="flex h-[500px] items-center justify-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0F4C81]" />
        </div>
      </DashboardLayout>
    );
  }

  if (!complaint) {
    return (
      <DashboardLayout title="Edit Complaint">
        <Card className="p-10 text-center">
          <h2 className="text-3xl font-bold">Complaint Not Found</h2>
          <Button className="mt-8" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </Card>
      </DashboardLayout>
    );
  }

  // 7. FIXED STATUS CHECK: Added safe optional string capitalization rules logic
  if (complaint.status?.toUpperCase() !== "PENDING") {
    return (
      <DashboardLayout title="Edit Complaint">
        <Card className="p-12 text-center">
          <div className="text-6xl">🔒</div>
          <h2 className="mt-6 text-3xl font-bold">Editing Disabled</h2>
          <p className="mt-4 text-slate-500">
            This complaint has already been assigned to a department. Only pending complaints can be edited.
          </p>
          <Button className="mt-8" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Card>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Edit Complaint">
      <EditComplaintForm complaint={complaint} />
    </DashboardLayout>
  );
}

export default EditComplaint;
