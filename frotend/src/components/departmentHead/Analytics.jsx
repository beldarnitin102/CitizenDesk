import { useEffect, useState } from "react";

import DashboardLayout from "../DashboardLayout";

import { useAuth } from "../../../context/AuthContext";

import AnalyticsCards from "../../../components/departmentHead/analytics/AnalyticsCards";
import ComplaintTrendChart from "../../../components/departmentHead/analytics/ComplaintTrendChart";
import PriorityChart from "../../../components/departmentHead/analytics/PriorityChart";

import {
  getAnalytics,
} from "../../../services/operations/departmentHeadAPI";

function Analytics() {

  const { token } = useAuth();

  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {

    async function load() {

      try {

        const data = await getAnalytics(token);

        setAnalytics(data);

      } catch (error) {
        console.log(error);
      }

    }

    load();

  }, []);

  if (!analytics) {
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <AnalyticsCards
          analytics={analytics}
        />

        <ComplaintTrendChart
          analytics={analytics}
        />

        <PriorityChart
          analytics={analytics}
        />

      </div>

    </DashboardLayout>
  );
}

export default Analytics;