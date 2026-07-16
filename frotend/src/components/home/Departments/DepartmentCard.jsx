import { FiArrowRight } from "react-icons/fi";

const DepartmentCard = ({
  icon: Icon,
  title,
  description,
  complaints,
  color,
  bg,
}) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-[var(--border)]
      bg-white
      p-8
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-2xl
      "
    >
      <div
        className="
        absolute
        -right-10
        -top-10
        h-36
        w-36
        rounded-full
        opacity-10
        blur-3xl
        "
        style={{
          background: color,
        }}
      />

      <div
        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:rotate-6
        "
        style={{
          background: bg,
          color,
        }}
      >
        <Icon size={30} />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-[var(--heading)]">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-[var(--body)]">
        {description}
      </p>

      <div
        className="
        mt-6
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--background)]
        p-4
        text-sm
        text-[var(--body)]
        "
      >
        {complaints}
      </div>

      <button
        className="
        mt-8
        flex
        items-center
        gap-2
        font-semibold
        transition-all
        group-hover:gap-4
        "
        style={{
          color,
        }}
      >
        Learn More

        <FiArrowRight />
      </button>
    </div>
  );
};

export default DepartmentCard;