import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../../context/AuthContext";

import ComplaintInfoCard from "./ComplaintInfoCard";
import CitizenCard from "./CitizenCard";
import ComplaintTimeline from "./ComplaintTimeline";
import ComplaintActions from "./ComplaintActions";

import { getDepartmentComplaintDetails } from "../../../services/operations/departmentHeadAPI";

function ComplaintDetails() {
  const { id } = useParams();

  const { token } = useAuth();

  const [loading, setLoading] = useState(true);

  const [complaint, setComplaint] = useState(null);

  const [timeline, setTimeline] = useState([]);

  const fetchComplaint = async () => {
    setLoading(true);

    try {
      const data = await getDepartmentComplaintDetails(id, token);

      setComplaint(data.complaint);

      setTimeline(data.timeline);
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to load complaint");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaint();
  }, [id]);

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10">Loading complaint...</div>
    );
  }

  if (!complaint) {
    return (
      <div className="rounded-3xl bg-white p-10">Complaint not found.</div>
    );
  }

  return (
    <div className="space-y-8">
      <ComplaintInfoCard complaint={complaint} />

      <CitizenCard citizen={complaint.citizen} location={complaint.location} />

      <ComplaintTimeline timeline={timeline} />

      <ComplaintActions complaint={complaint} onRefresh={fetchComplaint} />
    </div>
  );
}

export default ComplaintDetails;
