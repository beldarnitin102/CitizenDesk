import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import { useAuth } from "../../../context/AuthContext";

import { getEmployeeDetails } from "../../../services/operations/departmentHeadAPI";

import EmployeeComplaintTable from "../../departmentHead/employees/EmployeeComplaintTable";

function EmployeeDetails() {
  const { id } = useParams();

  const { token } = useAuth();

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await getEmployeeDetails(id, token);

        setData(response);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Unable to fetch employee",
        );
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-20 text-center">Loading...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white p-8 shadow">
          <h1 className="text-3xl font-bold">{data.employee.name}</h1>

          <p className="mt-2 text-slate-500">{data.employee.email}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="rounded-2xl bg-white p-5 shadow">
            <h2>Total</h2>

            <p className="text-3xl font-bold">{data.stats.totalAssigned}</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <h2>Assigned</h2>

            <p className="text-3xl font-bold">{data.stats.assigned}</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <h2>Progress</h2>

            <p className="text-3xl font-bold">{data.stats.inProgress}</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <h2>Resolved</h2>

            <p className="text-3xl font-bold text-green-600">
              {data.stats.resolved}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <h2>Workload</h2>

            <p className="text-3xl font-bold text-[#0F4C81]">
              {data.stats.workload}
            </p>
          </div>
        </div>

        <EmployeeComplaintTable complaints={data.complaints} />
      </div>
    </DashboardLayout>
  );
}

export default EmployeeDetails;
