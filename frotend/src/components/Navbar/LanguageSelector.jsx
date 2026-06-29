const LanguageSelector = () => {
  return (
    <select
      className="hidden rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm outline-none lg:block"
    >
      <option>English</option>
      <option>मराठी</option>
      <option>हिन्दी</option>
    </select>
  );
};

export default LanguageSelector;