import Card from "../ui/Card";

function StepCard({
  number,
  title,
  description,
  icon,
  isLast = false,
}) {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Connector Line */}

      {!isLast && (
        <div className="absolute left-[60%] top-8 hidden h-[2px] w-full border-t-2 border-dashed border-slate-300 lg:block"></div>
      )}

      {/* Icon */}

      <Card className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <span className="text-4xl">
          {icon}
        </span>

      </Card>

      {/* Step Number */}

      <span className="mt-6 rounded-full bg-blue-100 px-4 py-1 text-xs font-bold tracking-wider text-[#0F4C81]">

        STEP {number}

      </span>

      {/* Title */}

      <h3 className="mt-4 text-xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-3 max-w-[240px] leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}

export default StepCard;