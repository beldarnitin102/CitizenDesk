import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { useAuth } from "../../context/AuthContext";

import ComplaintFilters from "../../components/admin/complaints/ComplaintFilters";
import ComplaintStats from "../../components/admin/complaints/ComplaintStats";
import ComplaintTable from "../../components/admin/complaints/ComplaintTable";

import { getAllComplaints } from "../../services/operations/adminAPI";

function ComplaintManagement() {
  const { token } = useAuth();

  const [complaints, setComplaints] = useState([]);

  const [filters, setFilters] = useState({});

  const [loading, setLoading] = useState(true);

  const loadComplaints = async () => {
    try {
      const data = await getAllComplaints(token);

      setComplaints(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Complaint Management</h1>

        <ComplaintStats complaints={complaints} />

        <ComplaintFilters onChange={setFilters} />

        {loading ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow">
            Loading Complaints...
          </div>
        ) : (
          <ComplaintTable
            complaints={complaints}
            filters={filters}
            refresh={loadComplaints}
          />
        )}
      </div>
    </DashboardLayout>
  );
}

export default ComplaintManagement;
