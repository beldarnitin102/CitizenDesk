import {
  FiStar,
  FiMapPin,
} from "react-icons/fi";

const TestimonialCard = ({
  image,
  name,
  district,
  complaintId,
  review,
  rating,
  icon: Icon,
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
      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>

          <h3 className="font-bold text-lg text-[var(--heading)]">
            {name}
          </h3>

          <div className="mt-1 flex items-center gap-2 text-sm text-[var(--body)]">
            <FiMapPin />
            {district}
          </div>

        </div>

      </div>

      <div className="mt-6 flex gap-1">

        {[...Array(rating)].map((_, index) => (
          <FiStar
            key={index}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      <p className="mt-6 leading-8 text-[var(--body)]">
        "{review}"
      </p>

      <div
        className="
        mt-8
        flex
        items-center
        justify-between
        rounded-xl
        bg-[var(--background)]
        p-4
        "
      >
        <div>

          <p className="text-xs text-[var(--body)]">
            Complaint ID
          </p>

          <p className="font-semibold">
            {complaintId}
          </p>

        </div>

        <div className="flex items-center gap-2 text-[var(--resolved)]">

          <Icon size={20} />

          <span className="font-medium">
            Verified
          </span>

        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;