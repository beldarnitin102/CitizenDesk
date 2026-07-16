const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  bg,
}) => {
  return (
    <div
      className="
      group
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
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        transition-transform
        duration-500
        group-hover:rotate-6
        group-hover:scale-110
        "
        style={{
          background: bg,
          color: color,
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
        className="mt-8 h-1 w-16 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background: color,
        }}
      />
    </div>
  );
};

export default FeatureCard;