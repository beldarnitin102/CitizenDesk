import {
  ArrowRight,
  MapPin,
  Users,
  AlertTriangle,
  Droplets,
  Lightbulb,
  Trash2,
  Building2,
} from "lucide-react";

const categoryIcons = {
  "Road Infrastructure": AlertTriangle,
  "Water Supply": Droplets,
  Electricity: Lightbulb,
  Sanitation: Trash2,
  "Public Property": Building2,
};

const priorityStyles = {
  HIGH: "bg-red-50 text-red-700 border-red-100",
  MEDIUM: "bg-amber-50 text-amber-700 border-amber-100",
  LOW: "bg-emerald-50 text-emerald-700 border-emerald-100",
};

const statusStyles = {
  "Under Review": "bg-blue-50 text-blue-700",
  "In Progress": "bg-violet-50 text-violet-700",
  Reported: "bg-slate-100 text-slate-700",
  Resolved: "bg-emerald-50 text-emerald-700",
};

function ChallengeCard({ challenge, onView }) {
  const Icon = categoryIcons[challenge.category] || Building2;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F4C81]/20 hover:shadow-xl">
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
          <Icon size={22} className="text-[#0F4C81]" />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            priorityStyles[challenge.priority] ||
            "border-slate-200 bg-slate-50 text-slate-600"
          }`}
        >
          {challenge.priority} Priority
        </span>
      </div>

      {/* Category */}
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#0F4C81]">
        {challenge.category}
      </p>

      {/* Title */}
      <h2 className="mt-2 text-xl font-bold leading-7 text-slate-950">
        {challenge.title}
      </h2>

      {/* Description */}
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
        {challenge.description}
      </p>

      {/* Location */}
      <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
        <MapPin size={16} className="shrink-0 text-slate-400" />
        <span>{challenge.location}</span>
      </div>

      {/* Bottom information */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-slate-400" />

          <span className="text-sm font-medium text-slate-600">
            {challenge.reports} citizen reports
          </span>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusStyles[challenge.status] || "bg-slate-100 text-slate-700"
          }`}
        >
          {challenge.status}
        </span>
      </div>

      {/* Action */}
      <button
        type="button"
        onClick={() => onView?.(challenge)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0F4C81]"
      >
        View Challenge
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </article>
  );
}

export default ChallengeCard;
