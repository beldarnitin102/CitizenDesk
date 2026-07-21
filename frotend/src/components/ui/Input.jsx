import { cn } from "../../utils/cn";

function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onBlur,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  leftIcon,
  rightIcon,
  className = "",
  inputClassName = "",
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

      <div className="relative">

        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {leftIcon}
          </div>
        )}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={cn(
            "w-full rounded-xl border bg-white transition-all duration-200",
            "px-4 py-3",
            "text-slate-800 placeholder:text-slate-400",
            "outline-none",

            leftIcon && "pl-12",

            rightIcon && "pr-12",

            error
              ? "border-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-[#0F4C81]",

            disabled &&
              "cursor-not-allowed bg-slate-100 opacity-70",

            inputClassName
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            {rightIcon}
          </div>
        )}
      </div>

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

export default Input;