import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // 1. IMPORTED useAuth context hook
import DashboardLayout from "../../components/dashboard/DashboardLayout";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

import { getCitizenDashboard } from "../../services/operations/complaintAPI";

function CitizenDashboard() {
  const { token } = useAuth(); // 2. EXTRACTED the auth token
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run the API call if the user token has loaded successfully
    if (token) {
      fetchDashboard();
    }
  }, [token]);

  async function fetchDashboard() {
    try {
      setLoading(true);
      const response = await getCitizenDashboard(token);

      // Safely reads the nested 'data' block from the ApiResponse instance envelope structure
      const payload = response?.data?.data || response?.data || response;

      setDashboardData(payload);
    } catch (error) {
      console.log("Dashboard fetch operation breakdown log:", error);
    } finally {
      setLoading(false);
    }
  }

  const stats = [
    {
      title: "Total Complaints",
      value: dashboardData?.stats?.total ?? 0,
      color: "text-blue-700",
      bg: "bg-blue-100",
      icon: "📋",
    },
    {
      title: "Pending",
      value: dashboardData?.stats?.pending ?? 0,
      color: "text-orange-600",
      bg: "bg-orange-100",
      icon: "⏳",
    },
    {
      title: "In Progress",
      value: dashboardData?.stats?.inProgress ?? 0,
      color: "text-purple-700",
      bg: "bg-purple-100",
      icon: "🚧",
    },
    {
      title: "Resolved",
      value: dashboardData?.stats?.resolved ?? 0,
      color: "text-green-700",
      bg: "bg-green-100",
      icon: "✅",
    },
  ];

  if (loading) {
    return (
      <DashboardLayout title="Citizen Dashboard">
        <div className="flex h-[60vh] items-center justify-center">
          <p className="text-lg font-medium text-slate-500 animate-pulse">
            Loading dashboard records...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Citizen Dashboard">
      <div className="space-y-8">
        {/* Welcome Card */}
        <Card className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F4C81] to-[#2563EB] p-8 text-white">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
              <p className="mt-4 max-w-2xl text-blue-100">
                Submit complaints, monitor their progress, receive AI-powered
                assistance and help improve your district with faster issue
                resolution.
              </p>
            </div>

            <Link to="/dashboard/create-complaint">
              <Button className="bg-white text-[#0F4C81] hover:bg-slate-100">
                + Create Complaint
              </Button>
            </Link>
          </div>
        </Card>

        {/* Statistics Grid Section */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.title} className="rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <h2 className={`mt-3 text-4xl font-bold ${item.color}`}>
                    {item.value}
                  </h2>
                </div>
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${item.bg}`}
                >
                  {item.icon}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Complaints */}
        <Card className="rounded-3xl p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Recent Complaints
              </h2>
              <p className="mt-1 text-slate-500">
                Your recently submitted complaints
              </p>
            </div>

            <Link to="/dashboard/my-complaints">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="space-y-5">
            {dashboardData?.recentComplaints &&
            dashboardData.recentComplaints.length > 0 ? (
              dashboardData.recentComplaints.map((complaint) => (
                <div
                  key={complaint.id || complaint._id}
                  className="flex flex-col gap-5 rounded-2xl border border-slate-200 p-6 transition hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {complaint.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Complaint ID : {complaint.id || complaint._id}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Department : {complaint.department?.name || "Unassigned"}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <Badge>{complaint.status}</Badge>
                    <span className="text-sm text-slate-500">
                      {complaint.createdAt
                        ? new Date(complaint.createdAt).toLocaleDateString()
                        : "N/A"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-6 text-sm text-slate-400">
                No complaints registered yet.
              </p>
            )}
          </div>
        </Card>

        {/* AI Assistant */}
        <Card className="rounded-3xl border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <Badge>AI Assistant</Badge>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Need help regarding your complaint?
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Ask questions in English, Hindi or Marathi. The AI Assistant can
                explain complaint status, department information and guide you
                through the complaint process.
              </p>
            </div>
            <Button>Open AI Chat</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default CitizenDashboard;
