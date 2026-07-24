import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import ComplaintSearch from "../../components/employee/ComplaintSearch";
import ComplaintFilters from "../../components/employee/ComplaintFilters";
import ComplaintTable from "../../components/employee/ComplaintTable";

import { getDepartmentComplaints } from "../../services/operations/employeeAPI";

import { useAuth } from "../../context/AuthContext";

function DepartmentComplaints() {

  const { token } = useAuth();

  const [complaints, setComplaints] = useState([]);

  const [filteredComplaints, setFilteredComplaints] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [priority, setPriority] = useState("");

  const [sort, setSort] = useState("latest");

  useEffect(() => {
     if (!token) return;

     
    async function fetchComplaints() {
      try {
        const data = await getDepartmentComplaints(token);

        setComplaints(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchComplaints();
  }, [token]);

  return (
    <DashboardLayout title="Department Complaints">
      <div className="space-y-6">
        <ComplaintSearch value={search} onChange={setSearch} />

        <ComplaintFilters
          status={status}
          priority={priority}
          sort={sort}
          onStatusChange={setStatus}
          onPriorityChange={setPriority}
          onSortChange={setSort}
        />

        <ComplaintTable complaints={complaints} loading={loading} />
      </div>
    </DashboardLayout>
  );
}

export default DepartmentComplaints;
