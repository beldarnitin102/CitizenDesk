import { HiOutlineMenuAlt3 } from "react-icons/hi";

const MobileMenu = () => {
  return (
    <button className="text-3xl text-[var(--primary)] lg:hidden">
      <HiOutlineMenuAlt3 />
    </button>
  );
};

export default MobileMenu;