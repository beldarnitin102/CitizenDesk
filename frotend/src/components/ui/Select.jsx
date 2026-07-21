import { cn } from "../../utils/cn";

function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
  error,
  helperText,
  className = "",
  ...props
}) {
  return (
    <div className={cn("space-y-2", className)}>
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

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          "w-full rounded-xl border",
          "border-slate-300",
          "bg-white",
          "px-4 py-3",
          "text-slate-800",
          "outline-none transition-all duration-200",

          error
            ? "border-red-500 focus:border-red-500"
            : "focus:border-[#0F4C81]",

          disabled &&
            "cursor-not-allowed bg-slate-100 opacity-70"
        )}
        {...props}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

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

export default Select;