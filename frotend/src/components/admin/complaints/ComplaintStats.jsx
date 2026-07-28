import Card from "../../ui/Card";

function ComplaintStats({ complaints }) {
  const total = complaints.length;

  const pending = complaints.filter((c) => c.status === "PENDING").length;

  const assigned = complaints.filter((c) => c.status === "ASSIGNED").length;

  const progress = complaints.filter((c) => c.status === "IN_PROGRESS").length;

  const resolved = complaints.filter(
    (c) => c.status === "RESOLVED" || c.status === "CLOSED",
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
    },

    {
      title: "Pending",
      value: pending,
    },

    {
      title: "Assigned",
      value: assigned,
    },

    {
      title: "In Progress",
      value: progress,
    },

    {
      title: "Resolved",
      value: resolved,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((item) => (
        <Card key={item.title} className="rounded-3xl p-6">
          <p className="text-slate-500">{item.title}</p>

          <h2 className="mt-3 text-3xl font-bold">{item.value}</h2>
        </Card>
      ))}
    </div>
  );
}

export default ComplaintStats;
