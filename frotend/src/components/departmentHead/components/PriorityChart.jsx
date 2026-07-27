import Card from "../../ui/Card";

function PriorityChart({ data = [] }) {
  const colors = {
    LOW: "bg-green-500",

    MEDIUM: "bg-yellow-500",

    HIGH: "bg-orange-500",

    CRITICAL: "bg-red-500",
  };

  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-6">Complaints By Priority</h2>

      <div className="space-y-5">
        {data.map((item) => (
          <div key={item._id}>
            <div className="flex justify-between">
              <span>{item._id}</span>

              <span>{item.count}</span>
            </div>

            <div className="mt-2 h-3 rounded-full bg-slate-200">
              <div
                className={`h-3 rounded-full ${colors[item._id]}`}
                style={{
                  width: `${item.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default PriorityChart;
