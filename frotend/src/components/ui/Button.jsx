const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  onClick,
  disabled = false,
}) => {
  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--secondary)]",

    secondary:
      "bg-[var(--accent)] text-white hover:opacity-90",

    outline:
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",

    ghost:
      "text-[var(--heading)] hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-xl
      font-semibold
      transition-all
      duration-300
      active:scale-95
      disabled:opacity-60
      disabled:cursor-not-allowed
      ${variants[variant]}
      ${sizes[size]}
      ${fullWidth ? "w-full" : ""}
      `}
    >
      {icon}

      {children}
    </button>
  );
};

export default Button;