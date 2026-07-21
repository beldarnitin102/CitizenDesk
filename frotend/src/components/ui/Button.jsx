import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-[#0F4C81] text-white hover:bg-[#0A3A63]",

  secondary:
    "bg-[#17803D] text-white hover:opacity-90",

  outline:
    "border border-gray-300 bg-white text-slate-800 hover:bg-slate-50",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  ghost:
    "text-slate-700 hover:bg-slate-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  loading = false,
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "rounded-xl font-medium transition-all duration-300",
        "flex items-center justify-center gap-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
      )}

      {children}
    </button>
  );
}

export default Button;