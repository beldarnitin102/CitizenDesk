function SectionTitle({
  badge,
  title,
  subtitle,
  align = "left",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <div className={`space-y-3 ${alignment[align]}`}>
      {badge && (
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-[#0F4C81]">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;