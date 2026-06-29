const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    <div className="group rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
        style={{ background: color }}
      >
        <Icon />
      </div>

      <h3 className="mb-4 text-xl font-semibold text-[var(--heading)]">
        {title}
      </h3>

      <p className="leading-7 text-[var(--body)]">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;