import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Card from "../../ui/Card";

const COLORS = [
  "#0F4C81",
  "#3B82F6",
  "#F59E0B",
  "#10B981",
  "#EF4444",
  "#8B5CF6",
];

function StatusChart({ data = [] }) {
  const chartData = data.map((item) => ({
    name: item._id,
    value: item.count,
  }));

  return (
    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-xl font-bold">
        Complaint Status Distribution
      </h2>

      {chartData.length === 0 ? (
        <p className="text-slate-500">
          No status data available.
        </p>
      ) : (
        <div className="h-[360px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>
      )}

    </Card>
  );
}

export default StatusChart;