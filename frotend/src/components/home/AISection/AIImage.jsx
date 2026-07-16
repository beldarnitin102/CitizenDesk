import dashboard from "../../../assets/images/ai-dashboard.png";

const AIImage = () => {
  return (
    <div className="relative">

      <div
        className="
        absolute
        -left-8
        -top-8
        h-28
        w-28
        rounded-full
        bg-blue-200/40
        blur-2xl
        "
      />

      <div
        className="
        absolute
        -bottom-10
        right-0
        h-32
        w-32
        rounded-full
        bg-green-200/40
        blur-2xl
        "
      />

      <img
        src={dashboard}
        alt="AI Dashboard"
        className="
        relative
        w-full
        rounded-3xl
        border
        border-white/60
        shadow-2xl
        "
      />

      <div
        className="
        absolute
        -left-5
        top-10
        rounded-2xl
        bg-white
        px-5
        py-4
        shadow-xl
        "
      >
        <p className="text-xs text-[var(--body)]">
          AI Confidence
        </p>

        <h3 className="text-2xl font-bold text-[var(--accent)]">
          98%
        </h3>
      </div>

      <div
        className="
        absolute
        -right-5
        bottom-10
        rounded-2xl
        bg-white
        px-5
        py-4
        shadow-xl
        "
      >
        <p className="text-xs text-[var(--body)]">
          Auto Routing
        </p>

        <h3 className="text-2xl font-bold text-[var(--primary)]">
          Enabled
        </h3>
      </div>

    </div>
  );
};

export default AIImage;