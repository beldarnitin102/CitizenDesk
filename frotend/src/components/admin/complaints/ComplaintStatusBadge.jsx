function ComplaintStatusBadge({ status }) {
  const colors = {
    PENDING: "bg-yellow-100 text-yellow-700",

    ASSIGNED: "bg-blue-100 text-blue-700",

    IN_PROGRESS: "bg-indigo-100 text-indigo-700",

    RESOLVED: "bg-green-100 text-green-700",

    REJECTED: "bg-red-100 text-red-700",

    CLOSED: "bg-slate-200 text-slate-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status]}`}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}

export default ComplaintStatusBadge;
