import Card from "../../ui/Card";

function StatCard({
  title,
  value,
  color = "text-[#0F4C81]",
}) {
  return (
    <Card className="rounded-3xl p-6">

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h2
        className={`mt-3 text-4xl font-bold ${color}`}
      >
        {value}
      </h2>

    </Card>
  );
}

export default StatCard;