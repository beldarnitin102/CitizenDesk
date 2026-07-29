import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../dashboard/DashboardLayout";

import Loader from "../../components/ui/Loader";

import { useAuth } from "../../context/AuthContext";

import { getAnalytics } from "../../services/operations/departmentHeadAPI";

import AnalyticsCards from "../departmentHead/components/AnalyticsCards";
import PriorityChart from "../departmentHead/components/PriorityChart";
import StatusChart from "../departmentHead/components/StatusChart";
import EmployeePerformanceTable from "../departmentHead/components/EmployeePerformanceTable";
import MonthlyTrendChart from "../departmentHead/components/MonthlyTrendChart";

function Analytics() {
  const { token } = useAuth();

  const [loading, setLoading] = useState(true);

  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    try {
      const data = await getAnalytics(token);

      console.log(data);

      setAnalytics(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to load analytics");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <AnalyticsCards analytics={analytics} />

        <div className="grid lg:grid-cols-2 gap-6">
          <PriorityChart data={analytics?.byPriority || []} />

          <StatusChart data={analytics?.byStatus || []} />
        </div>

        <MonthlyTrendChart data={analytics?.monthly || []} />

        <EmployeePerformanceTable
          employees={analytics?.employeePerformance || []}
        />
      </div>
    </DashboardLayout>
  );
}

export default Analytics;
