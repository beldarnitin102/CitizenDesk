const ProcessCard = ({
  step,
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">

      <div
        className="flex h-20 w-20 items-center justify-center rounded-full text-4xl text-white shadow-lg transition-all duration-300 hover:scale-110"
        style={{ background: color }}
      >
        <Icon />
      </div>

      <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
        {step}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-[var(--heading)]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[var(--body)]">
        {description}
      </p>

    </div>
  );
};

export default ProcessCard;