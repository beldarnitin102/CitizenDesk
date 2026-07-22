import Card from "../ui/Card";

function StatCard({
  title,
  value,
  subtitle,
  icon,
  color = "blue",
}) {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      ring: "ring-blue-100",
    },

    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      ring: "ring-orange-100",
    },

    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      ring: "ring-purple-100",
    },

    green: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      ring: "ring-emerald-100",
    },

    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      ring: "ring-cyan-100",
    },
  };

  const style = colors[color];

  return (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex items-center gap-5">

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${style.bg} ${style.text} ring-8 ${style.ring} transition-transform duration-300 group-hover:scale-110`}
        >
          <span className="text-3xl">{icon}</span>
        </div>

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-1 text-4xl font-extrabold text-slate-900">
            {value}
          </h2>

          <p className={`mt-2 text-sm font-medium ${style.text}`}>
            {subtitle}
          </p>

        </div>

      </div>

    </Card>
  );
}

export default StatCard;