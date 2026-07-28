import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { useAuth } from "../../context/AuthContext";

import DashboardStats from "../../components/admin/dashboard/DashboardStats";
import ComplaintStatusChart from "../../components/admin/dashboard/ComplaintStatusChart";
import RecentComplaints from "../../components/admin/dashboard/RecentComplaints";
import DepartmentOverview from "../../components/admin/dashboard/DepartmentOverview";

import {
  getAdminDashboard,
  getAllComplaints,
  getAllDepartments,
} from "../../services/operations/adminAPI";

function AdminDashboard() {
  const { token } = useAuth();

  const [dashboard, setDashboard] = useState(null);

  const [complaints, setComplaints] = useState([]);

  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    try {
      const [dashboardData, complaintData, departmentData] = await Promise.all([
        getAdminDashboard(token),

        getAllComplaints(token),

        getAllDepartments(token),
      ]);

      setDashboard(dashboardData);

      setComplaints(complaintData);

      setDepartments(departmentData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading) {
    return <DashboardLayout>Loading...</DashboardLayout>;
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <DashboardStats dashboard={dashboard} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ComplaintStatusChart dashboard={dashboard} />

          <DepartmentOverview departments={departments} />
        </div>

        <RecentComplaints complaints={complaints} />
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;
