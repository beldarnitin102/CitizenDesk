import DashboardLayout from "../../components/dashboard/DashboardLayout";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

function CitizenDashboard() {
  // Temporary Static Data
  // Later replace using Dashboard API

  const stats = [
    {
      title: "Total Complaints",
      value: 12,
      color: "text-blue-700",
      bg: "bg-blue-100",
      icon: "📋",
    },
    {
      title: "Pending",
      value: 4,
      color: "text-orange-600",
      bg: "bg-orange-100",
      icon: "⏳",
    },
    {
      title: "In Progress",
      value: 3,
      color: "text-purple-700",
      bg: "bg-purple-100",
      icon: "🚧",
    },
    {
      title: "Resolved",
      value: 5,
      color: "text-green-700",
      bg: "bg-green-100",
      icon: "✅",
    },
  ];

  const recentComplaints = [
    {
      id: "JAL-2026-001",
      title: "Road damaged near Market",
      department: "PWD",
      status: "Pending",
      date: "18 July 2026",
    },
    {
      id: "JAL-2026-002",
      title: "Street light not working",
      department: "Electricity",
      status: "In Progress",
      date: "16 July 2026",
    },
    {
      id: "JAL-2026-003",
      title: "Garbage collection delayed",
      department: "Sanitation",
      status: "Resolved",
      date: "14 July 2026",
    },
  ];

  return (
    <DashboardLayout title="Citizen Dashboard">

      <div className="space-y-8">

        {/* Welcome Card */}

        <Card className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F4C81] to-[#2563EB] p-8 text-white">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <h1 className="text-4xl font-bold">
                Welcome Back 👋
              </h1>

              <p className="mt-4 max-w-2xl text-blue-100">
                Submit complaints, monitor their progress,
                receive AI-powered assistance and help improve
                your district with faster issue resolution.
              </p>

            </div>

            <Button
              className="bg-white text-[#0F4C81] hover:bg-slate-100"
            >
              + Create Complaint
            </Button>

          </div>

        </Card>

        {/* Statistics */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (

            <Card
              key={item.title}
              className="rounded-3xl p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

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

            <Button variant="outline">
              View All
            </Button>

          </div>

          <div className="space-y-5">

            {recentComplaints.map((complaint) => (

              <div
                key={complaint.id}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 p-6 transition hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
              >

                <div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {complaint.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Complaint ID : {complaint.id}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Department : {complaint.department}
                  </p>

                </div>

                <div className="flex items-center gap-6">

                  <Badge>
                    {complaint.status}
                  </Badge>

                  <span className="text-sm text-slate-500">
                    {complaint.date}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </Card>

        {/* AI Assistant */}

        <Card className="rounded-3xl border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <Badge>
                AI Assistant
              </Badge>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Need help regarding your complaint?
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">
                Ask questions in English, Hindi or Marathi.
                The AI Assistant can explain complaint status,
                department information and guide you through
                the complaint process.
              </p>

            </div>

            <Button>
              Open AI Chat
            </Button>

          </div>

        </Card>

      </div>

    </DashboardLayout>
  );
}

export default CitizenDashboard;