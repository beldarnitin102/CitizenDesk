const Input = ({
  label,
  error,
  icon,
  ...props
}) => {
  return (
    <div className="space-y-2">

      {label && (
        <label className="font-medium text-[var(--heading)]">
          {label}
        </label>
      )}

      <div className="relative">

        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}

        <input
          {...props}
          className={`
          w-full
          rounded-xl
          border
          border-[var(--border)]
          bg-white
          py-3
          ${icon ? "pl-12" : "px-4"}
          outline-none
          transition
          focus:border-[var(--primary)]
          focus:ring-4
          focus:ring-blue-100
          `}
        />

      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
};

export default Input;