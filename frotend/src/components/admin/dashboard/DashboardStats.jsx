import Card from "../../ui/Card";

function DashboardStats({ dashboard }) {
  const stats = [
    {
      title: "Total Complaints",
      value: dashboard.totalComplaints,
    },

    {
      title: "Pending",
      value: dashboard.pendingComplaints,
    },

    {
      title: "Assigned",
      value: dashboard.assignedComplaints,
    },

    {
      title: "In Progress",
      value: dashboard.inProgressComplaints,
    },

    {
      title: "Resolved",
      value: dashboard.resolvedComplaints,
    },

    {
      title: "Employees",
      value: dashboard.totalEmployees,
    },

    {
      title: "Departments",
      value: dashboard.totalDepartments,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <Card key={item.title} className="rounded-3xl p-6">
          <p className="text-slate-500">{item.title}</p>

          <h2 className="mt-4 text-4xl font-bold text-[#0F4C81]">
            {item.value}
          </h2>
        </Card>
      ))}
    </div>
  );
}

export default DashboardStats;
