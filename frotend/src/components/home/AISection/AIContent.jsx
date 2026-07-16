import {
  FiCpu,
  FiGlobe,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

const features = [
  "Automatic Complaint Categorization",

  "Priority Detection using AI",

  "Smart Department Assignment",

  "Duplicate Complaint Detection",

  "Multilingual Understanding",

  "AI Citizen Assistant",
];

const AIContent = () => {
  return (
    <div>

      <span
        className="
        inline-flex
        rounded-full
        bg-blue-100
        px-5
        py-2
        text-sm
        font-semibold
        text-[var(--primary)]
        "
      >
        AI POWERED SYSTEM
      </span>

      <h2
        className="
        mt-6
        text-4xl
        font-bold
        leading-tight
        text-[var(--heading)]
        lg:text-5xl
        "
      >
        Artificial Intelligence Handles Every Complaint Automatically
      </h2>

      <p
        className="
        mt-6
        text-lg
        leading-8
        text-[var(--body)]
        "
      >
        Our platform leverages advanced Artificial Intelligence to understand
        complaints in multiple languages, classify them, determine priority,
        identify duplicate issues, and route them directly to the appropriate
        government department—reducing manual effort and improving response time.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">

        {features.map((item) => (
          <div
            key={item}
            className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-white
            p-4
            shadow-sm
            "
          >
            <FiCheckCircle
              size={20}
              className="text-[var(--accent)]"
            />

            <span className="font-medium">
              {item}
            </span>
          </div>
        ))}

      </div>

      <div className="mt-12 flex flex-wrap gap-5">

        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-white
          px-5
          py-4
          shadow-md
          "
        >
          <FiCpu
            size={28}
            className="text-[var(--primary)]"
          />

          <div>
            <p className="font-semibold">
              AI Classification
            </p>

            <span className="text-sm text-[var(--body)]">
              Complaint Analysis
            </span>
          </div>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-white
          px-5
          py-4
          shadow-md
          "
        >
          <FiGlobe
            size={28}
            className="text-purple-600"
          />

          <div>
            <p className="font-semibold">
              Multilingual
            </p>

            <span className="text-sm text-[var(--body)]">
              Hindi • Marathi • English
            </span>
          </div>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-white
          px-5
          py-4
          shadow-md
          "
        >
          <FiZap
            size={28}
            className="text-yellow-500"
          />

          <div>
            <p className="font-semibold">
              Smart Routing
            </p>

            <span className="text-sm text-[var(--body)]">
              Auto Department Selection
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AIContent;