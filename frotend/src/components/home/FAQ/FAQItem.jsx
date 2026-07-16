import { FiMinus, FiPlus } from "react-icons/fi";

const FAQItem = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className="
      overflow-hidden
      rounded-2xl
      border
      border-[var(--border)]
      bg-white
      transition-all
      duration-300
      hover:shadow-lg
      "
    >
      <button
        onClick={onToggle}
        className="
        flex
        w-full
        items-center
        justify-between
        p-6
        text-left
        "
      >
        <h3 className="pr-6 text-lg font-semibold text-[var(--heading)]">
          {item.question}
        </h3>

        <div
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-[var(--background)]
          text-[var(--primary)]
          "
        >
          {isOpen ? (
            <FiMinus size={20} />
          ) : (
            <FiPlus size={20} />
          )}
        </div>
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <p className="px-6 pb-6 leading-8 text-[var(--body)]">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;