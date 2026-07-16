import { FiCheckCircle } from "react-icons/fi";

const TrustedCard = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    <div
      className="
      group
      flex
      items-center
      gap-4
      rounded-2xl
      border
      border-[var(--border)]
      bg-white
      p-5
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-transparent
      hover:shadow-xl
      "
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
        style={{ background: color }}
      >
        {Icon ? (
          <Icon size={26} />
        ) : (
          <FiCheckCircle size={26} />
        )}
      </div>

      <div>

        <h3 className="font-semibold text-[var(--heading)]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[var(--body)]">
          {description}
        </p>

      </div>
    </div>
  );
};

export default TrustedCard;