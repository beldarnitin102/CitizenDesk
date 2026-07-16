import Badge from "./Badge";

const SectionHeading = ({
  badge,
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : ""
      }`}
    >
      {badge && (
        <Badge>

          {badge}

        </Badge>
      )}

      <h2 className="mt-5 text-4xl font-bold text-[var(--heading)] lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[var(--body)]">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionHeading;