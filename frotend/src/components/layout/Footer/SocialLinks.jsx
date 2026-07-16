import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const icons = [
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
];

const SocialLinks = () => {
  return (
    <div className="mt-8 flex gap-4">

      {icons.map((Icon, index) => (
        <button
          key={index}
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-[var(--background)]
          text-[var(--primary)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[var(--primary)]
          hover:text-white
          "
        >
          <Icon size={18} />
        </button>
      ))}

    </div>
  );
};

export default SocialLinks;