
import Card from "../ui/Card";
import Badge from "../ui/Badge";

function DepartmentCard({
  icon,
  title,
 description,
  complaints,
  color,
}) {
  return (
    <Card className="group h-full overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Top */}

      <div
        className={`flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br ${color}`}
      >
        <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      </div>

      {/* Body */}

      <div className="mt-6">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-bold text-slate-900">
            {title}
          </h3>

          <Badge variant="primary">
            AI
          </Badge>

        </div>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

          <div>

            <p className="text-xs uppercase tracking-wider text-slate-400">
              Complaints
            </p>

            <p className="mt-1 text-lg font-bold text-slate-900">
              {complaints}
            </p>

          </div>

          <button className="font-semibold text-[#0F4C81] transition-all group-hover:translate-x-1">
            View →
          </button>

        </div>

      </div>

    </Card>
  );
}

export default DepartmentCard;