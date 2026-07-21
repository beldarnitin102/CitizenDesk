import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-[#EAF4FF] text-[#0F4C81]",

  success:
    "bg-green-100 text-green-700",

  warning:
    "bg-yellow-100 text-yellow-700",

  danger:
    "bg-red-100 text-red-700",

  gray:
    "bg-slate-100 text-slate-700",

  purple:
    "bg-purple-100 text-purple-700",
};

function Badge({
  children,
  variant = "primary",
  rounded = true,
  className = "",
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "px-3 py-1",
        "text-xs font-semibold",
        rounded ? "rounded-full" : "rounded-lg",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;