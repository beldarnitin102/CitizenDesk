import Card from "../ui/Card";

function DashboardStats({ dashboard }) {
  if (!dashboard) return null;

  const stats = [
    {
      title: "Total",
      value: dashboard.statistics.totalComplaints,
      icon: "📋",
      color: "text-blue-700",
      bg: "bg-blue-100",
    },

    {
      title: "Pending",
      value: dashboard.statistics.pendingComplaints,
      icon: "⏳",
      color: "text-orange-600",
      bg: "bg-orange-100",
    },

    {
      title: "Assigned",
      value: dashboard.statistics.assignedComplaints,
      icon: "👤",
      color: "text-purple-700",
      bg: "bg-violet-100",
    },

    {
      title: "In Progress",
      value: dashboard.statistics.inProgressComplaints,
      icon: "🚧",
      color: "text-cyan-700",
      bg: "bg-cyan-100",
    },

    {
      title: "Resolved",
      value: dashboard.statistics.resolvedComplaints,
      icon: "✅",
      color: "text-green-700",
      bg: "bg-green-100",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
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
  );
}

export default DashboardStats;
