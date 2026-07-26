import StatCard from "./StatCard";

function DashboardStats({ data }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <StatCard
        title="Total Complaints"
        value={data.totalComplaints}
      />

      <StatCard
        title="Pending Complaints"
        value={data.pendingComplaints}
        color="text-yellow-600"
      />

      <StatCard
        title="Assigned"
        value={data.assignedComplaints}
        color="text-blue-600"
      />

      <StatCard
        title="In Progress"
        value={data.inProgressComplaints}
        color="text-orange-600"
      />

      <StatCard
        title="Resolved"
        value={data.resolvedComplaints}
        color="text-green-600"
      />

      <StatCard
        title="Employees"
        value={data.totalEmployees}
        color="text-purple-600"
      />

    </div>
  );
}

export default DashboardStats;