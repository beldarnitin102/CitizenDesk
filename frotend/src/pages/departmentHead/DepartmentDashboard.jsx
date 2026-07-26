import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "./DashboardLayout";

import { useAuth } from "../../context/AuthContext";

import { getDepartmentDashboard } from "../../services/operations/departmentHeadAPI";

import DashboardStats from "../../components/departmentHead/dashboard/DashboardStats";
import DepartmentPerformance from "../../components/departmentHead/dashboard/DepartmentPerformance";
import EmployeePerformanceTable from "../../components/departmentHead/dashboard/EmployeePerformanceTable";
import RecentComplaints from "../../components/departmentHead/dashboard/RecentComplaints";

function DepartmentDashboard() {
  const { token } = useAuth();

  const [dashboardData, setDashboardData] = useState(null);

  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    setLoading(true);

    try {
      const response = await getDepartmentDashboard(token);

      setDashboardData(response);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Unable to load dashboard";

      toast.error(message);

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-2xl font-semibold text-slate-600">
            Loading Dashboard...
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <DashboardStats data={dashboardData} />

        <DepartmentPerformance
          resolutionRate={dashboardData.resolutionRate}
          complaintsByPriority={dashboardData.complaintsByPriority}
        />

        <EmployeePerformanceTable
          employees={dashboardData.employeePerformance}
        />

        <RecentComplaints
          complaints={dashboardData.recentComplaints}
        />

      </div>
    </DashboardLayout>
  );
}

export default DepartmentDashboard;