import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import Card from "../../ui/Card";

function MonthlyTrendChart({ data = [] }) {
  const chartData = data.map((item) => ({
    month: `${item._id.month}/${item._id.year}`,
    complaints: item.count,
  }));

  return (
    <Card className="rounded-3xl p-6">
      <h2 className="mb-6 text-xl font-bold">Monthly Complaint Trend</h2>

      {chartData.length === 0 ? (
        <p className="text-slate-500">No monthly trend available.</p>
      ) : (
        <div className="h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="complaints"
                stroke="#0F4C81"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}

export default MonthlyTrendChart;
