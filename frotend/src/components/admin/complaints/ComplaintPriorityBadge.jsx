function ComplaintPriorityBadge({ priority }) {
  const colors = {
    LOW: "bg-green-100 text-green-700",

    MEDIUM: "bg-blue-100 text-blue-700",

    HIGH: "bg-orange-100 text-orange-700",

    CRITICAL: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[priority]}`}
    >
      {priority}
    </span>
  );
}

export default ComplaintPriorityBadge;
