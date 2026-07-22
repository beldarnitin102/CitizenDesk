import Card from "../ui/Card";

function FeatureCard({
  icon,
  title,
  description,
  color = "blue",
}) {
  const colors = {
    blue: "from-blue-500 to-sky-500",
    green: "from-emerald-500 to-green-500",
    purple: "from-violet-500 to-purple-500",
    orange: "from-orange-500 to-amber-500",
    cyan: "from-cyan-500 to-blue-500",
    red: "from-rose-500 to-red-500",
  };

  return (
    <Card className="group relative overflow-hidden border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

      {/* Gradient Top Border */}

      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${colors[color]}`}
      />

      {/* Icon */}

      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${colors[color]} text-3xl text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
      >
        {icon}
      </div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {/* Learn More */}

      <button className="mt-6 font-semibold text-[#0F4C81] transition-all group-hover:translate-x-2">
        Learn More →
      </button>
    </Card>
  );
}

export default FeatureCard;