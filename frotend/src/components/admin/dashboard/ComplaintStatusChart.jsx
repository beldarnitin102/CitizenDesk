import Card from "../../ui/Card";

function ComplaintStatusChart({ dashboard }) {
  const data = [
    {
      label: "Pending",
      value: dashboard.pendingComplaints,
    },

    {
      label: "Assigned",
      value: dashboard.assignedComplaints,
    },

    {
      label: "In Progress",
      value: dashboard.inProgressComplaints,
    },

    {
      label: "Resolved",
      value: dashboard.resolvedComplaints,
    },
  ];

  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-2xl font-bold">Complaint Status</h2>

      <div className="mt-8 space-y-6">
        {data.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between">
              <span>{item.label}</span>

              <span>{item.value}</span>
            </div>

            <div className="mt-2 h-3 rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-[#0F4C81]"
                style={{
                  width: `${(item.value / max) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ComplaintStatusChart;
