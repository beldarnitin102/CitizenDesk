import {
  X,
  MapPin,
  CalendarDays,
  FileText,
  Flag,
  Building2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ChallengeDetailsModal({ challenge, onClose }) {
  const navigate = useNavigate();

  if (!challenge) return null;

  const formattedDate = challenge.createdAt
    ? new Date(challenge.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not available";

  const priorityStyles = {
    HIGH: "bg-red-50 text-red-700 border-red-100",
    MEDIUM: "bg-amber-50 text-amber-700 border-amber-100",
    LOW: "bg-emerald-50 text-emerald-700 border-emerald-100",
    CRITICAL: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white px-6 py-5 sm:px-8">
          <div className="pr-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F4C81]">
              Civic Challenge
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-950">
              {challenge.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
            aria-label="Close challenge details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 sm:px-8">
          {/* Status / Priority */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#0F4C81]/10 px-3 py-1.5 text-xs font-semibold text-[#0F4C81]">
              {challenge.category}
            </span>

            <span
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                priorityStyles[challenge.priority] ||
                "border-slate-200 bg-slate-50 text-slate-600"
              }`}
            >
              {challenge.priority} Priority
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
              {challenge.status}
            </span>
          </div>

          {challenge.attachments?.length > 0 && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src={challenge.attachments[0]}
                alt={challenge.title}
                className="h-64 w-full object-cover sm:h-80"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}

          {/* Description */}
          <div className="mt-7">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#0F4C81]" />
              <h3 className="font-semibold text-slate-950">
                About this challenge
              </h3>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {challenge.description}
            </p>
          </div>

          {/* Details */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={17} />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Location
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                {challenge.location}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-400">
                <CalendarDays size={17} />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Reported
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                {formattedDate}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Flag size={17} />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Status
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                {challenge.status}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Building2 size={17} />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Reports
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                {challenge.reports} citizen report
                {challenge.reports !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Complaint number */}
          {challenge.complaintNumber && (
            <div className="mt-5 rounded-2xl border border-slate-200 px-4 py-3">
              <p className="text-xs font-medium text-slate-400">
                Reference number
              </p>

              <p className="mt-1 font-mono text-sm font-semibold text-slate-700">
                {challenge.complaintNumber}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-7 rounded-2xl bg-[#0F4C81]/5 p-5">
            <h3 className="font-semibold text-slate-950">
              Facing the same problem?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Register your complaint so the issue can be formally reported and
              tracked.
            </p>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="mt-4 rounded-xl bg-[#0F4C81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123B6A]"
            >
              Report a Similar Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengeDetailsModal;
