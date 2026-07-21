import { cn } from "../../utils/cn";

function Textarea({
  label,
  name,
  placeholder = "",
  value,
  onChange,
  rows = 5,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  className = "",
  ...props
}) {
  return (
    <div className={cn("space-y-2", fullWidth && "w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-slate-700"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          "w-full rounded-xl border border-slate-300",
          "bg-white",
          "px-4 py-3",
          "text-slate-800 placeholder:text-slate-400",
          "outline-none transition-all duration-200",
          "resize-none",

          error
            ? "border-red-500 focus:border-red-500"
            : "focus:border-[#0F4C81]",

          disabled &&
            "cursor-not-allowed bg-slate-100 opacity-70"
        )}
        {...props}
      />

      {error ? (
        <p className="text-sm text-red-500">
          {error}
        </p>
      ) : (
        helperText && (
          <p className="text-sm text-slate-500">
            {helperText}
          </p>
        )
      )}
    </div>
  );
}

export default Textarea;