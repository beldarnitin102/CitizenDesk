import { cn } from "../../utils/cn";

const statusStyles = {
  PENDING:
    "bg-yellow-100 text-yellow-800 border border-yellow-200",

  ASSIGNED:
    "bg-blue-100 text-blue-800 border border-blue-200",

  IN_PROGRESS:
    "bg-indigo-100 text-indigo-800 border border-indigo-200",

  RESOLVED:
    "bg-green-100 text-green-800 border border-green-200",

  CLOSED:
    "bg-emerald-100 text-emerald-800 border border-emerald-200",

  REJECTED:
    "bg-red-100 text-red-700 border border-red-200",
};

function StatusBadge({
  status = "PENDING",
  className = "",
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
        statusStyles[status] || statusStyles.PENDING,
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-current opacity-70"></span>

      {status.replaceAll("_", " ")}
    </span>
  );
}

export default StatusBadge;