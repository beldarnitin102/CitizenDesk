const StatCard = ({
  icon: Icon,
  number,
  title,
  description,
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
      shadow-sm
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-2xl
      "
    >
      <div
        className="
        absolute
        right-0
        top-0
        h-32
        w-32
        rounded-full
        opacity-20
        blur-3xl
        transition-all
        duration-500
        group-hover:scale-150
        "
        style={{
          background: color,
        }}
      />

      <div
        className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        "
        style={{
          background: bg,
          color: color,
        }}
      >
        <Icon size={30} />
      </div>

      <h2
        className="mt-8 text-5xl font-bold"
        style={{
          color,
        }}
      >
        {number}
      </h2>

      <h3 className="mt-4 text-xl font-semibold text-[var(--heading)]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[var(--body)]">
        {description}
      </p>
    </div>
  );
};

export default StatCard;