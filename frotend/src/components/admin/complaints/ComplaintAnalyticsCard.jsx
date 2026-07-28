import Card from "../../ui/Card";

function ComplaintAnalyticsCard({ complaints = [] }) {
  const total = complaints.length;

  const pending = complaints.filter((item) => item.status === "PENDING").length;

  const assigned = complaints.filter(
    (item) => item.status === "ASSIGNED",
  ).length;

  const progress = complaints.filter(
    (item) => item.status === "IN_PROGRESS",
  ).length;

  const resolved = complaints.filter(
    (item) => item.status === "RESOLVED" || item.status === "CLOSED",
  ).length;

  const rejected = complaints.filter(
    (item) => item.status === "REJECTED",
  ).length;

  const highPriority = complaints.filter(
    (item) => item.priority === "HIGH" || item.priority === "CRITICAL",
  ).length;

  const resolutionRate =
    total === 0 ? 0 : ((resolved / total) * 100).toFixed(1);

  const cards = [
    {
      title: "Total Complaints",
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

    {
      title: "Rejected",
      value: rejected,
    },

    {
      title: "High Priority",
      value: highPriority,
    },

    {
      title: "Resolution Rate",
      value: `${resolutionRate}%`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title} className="rounded-3xl p-6">
          <p className="text-sm text-slate-500">{card.title}</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {card.value}
          </h2>
        </Card>
      ))}
    </div>
  );
}

export default ComplaintAnalyticsCard;
