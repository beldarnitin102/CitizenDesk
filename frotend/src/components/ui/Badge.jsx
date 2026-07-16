const Badge = ({
  children,
  color = "primary",
}) => {
  const colors = {
    primary:
      "bg-blue-100 text-[var(--primary)]",

    success:
      "bg-green-100 text-[var(--resolved)]",

    warning:
      "bg-yellow-100 text-[var(--pending)]",

    danger:
      "bg-red-100 text-[var(--danger)]",
  };

  return (
    <span
      className={`
      inline-flex
      rounded-full
      px-4
      py-2
      text-sm
      font-semibold
      ${colors[color]}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;