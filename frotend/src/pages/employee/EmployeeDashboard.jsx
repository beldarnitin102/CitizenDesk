import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import DashboardWelcome from "../../components/employee/DashboardWelcome";
import DashboardStats from "../../components/employee/DashboardStats";
import RecentComplaints from "../../components/employee/RecentComplaints";

import { useAuth } from "../../context/AuthContext";

import { getEmployeeDashboard } from "../../services/operations/employeeAPI";

function EmployeeDashboard() {

  const [dashboard, setDashboard] = useState(null);
const [loading, setLoading] = useState(true);

const { token } = useAuth();

useEffect(() => {
  if (!token) return;

  async function fetchDashboard() {
    try {
      const response = await getEmployeeDashboard(token);

      const dashboard =
        response?.data ||
        response;

      setDashboard(dashboard);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  fetchDashboard();
}, [token]);

  if (loading) {
    return (
      <DashboardLayout title="Employee Dashboard">
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Employee Dashboard">

      <div className="space-y-8">

        <DashboardWelcome dashboard={dashboard} />

        <DashboardStats dashboard={dashboard} />

        <RecentComplaints dashboard={dashboard} />

      </div>

    </DashboardLayout>
  );
}

export default EmployeeDashboard;