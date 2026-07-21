import { cn } from "../../utils/cn";

function Card({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  hover = false,
  bordered = true,
  padding = "md",
  className = "",
}) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl transition-all duration-300",

        bordered && "border border-slate-200",

        hover &&
          "hover:-translate-y-1 hover:shadow-lg hover:border-[#0F4C81]/20",

        paddingClasses[padding],

        className
      )}
    >
      {(title || subtitle || headerAction) && (
        <div className="flex items-start justify-between mb-5">

          <div>

            {title && (
              <h3 className="text-xl font-semibold text-slate-900">
                {title}
              </h3>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-slate-500">
                {subtitle}
              </p>
            )}

          </div>

          {headerAction && headerAction}

        </div>
      )}

      <div>{children}</div>

      {footer && (
        <div className="border-t border-slate-200 mt-6 pt-5">
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;