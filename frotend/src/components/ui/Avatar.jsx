import { cn } from "../../utils/cn";

function Avatar({
  name = "User",
  image,
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "h-10 w-10 text-sm",

    md: "h-12 w-12 text-base",

    lg: "h-16 w-16 text-lg",

    xl: "h-20 w-20 text-2xl",
  };

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={cn(
          "rounded-full object-cover border border-slate-200",
          sizes[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full",
        "bg-[#0F4C81] text-white font-semibold",
        sizes[size],
        className
      )}
    >
      {initials}
    </div>
  );
}

export default Avatar;