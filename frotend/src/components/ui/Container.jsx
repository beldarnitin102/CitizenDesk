import { cn } from "../../utils/cn";

function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1500px] px-5 md:px-8 lg:px-10 2xl:px-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;