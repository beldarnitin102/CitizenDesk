import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

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
  // If the API failed to return usable data, show a friendly empty state
  if (!dashboardData) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-2xl font-semibold text-slate-600">
            No dashboard data available.
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  // Ensure downstream components receive defined values
  const safeData = {
    totalComplaints: dashboardData.totalComplaints ?? 0,

    pendingComplaints: dashboardData.pendingComplaints ?? 0,

    assignedComplaints: dashboardData.assignedComplaints ?? 0,

    inProgressComplaints: dashboardData.inProgressComplaints ?? 0,

    resolvedComplaints: dashboardData.resolvedComplaints ?? 0,

    closedComplaints: dashboardData.closedComplaints ?? 0,

    totalEmployees: dashboardData.totalEmployees ?? 0,

    resolutionRate: dashboardData.resolutionRate ?? 0,

    complaintsByPriority: dashboardData.complaintsByPriority ?? [],

    employeePerformance: dashboardData.employeePerformance ?? [],

    recentComplaints: dashboardData.recentComplaints ?? [],
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <DashboardStats data={safeData} />

        <DepartmentPerformance
          resolutionRate={safeData.resolutionRate}
          complaintsByPriority={safeData.complaintsByPriority}
        />

        <EmployeePerformanceTable employees={safeData.employeePerformance} />

        <RecentComplaints complaints={safeData.recentComplaints} />
      </div>
    </DashboardLayout>
  );
}

export default DepartmentDashboard;
