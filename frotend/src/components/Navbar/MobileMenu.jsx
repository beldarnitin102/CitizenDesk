import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="border-t bg-white lg:hidden">

      <div className="flex flex-col px-6 py-5">

        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="py-3"
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="py-3"
        >
          About
        </Link>

        <Link
          to="/services"
          onClick={() => setIsOpen(false)}
          className="py-3"
        >
          Services
        </Link>

        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="py-3"
        >
          Contact
        </Link>

        <hr className="my-4" />

        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="rounded-lg border border-[var(--primary)] py-3 text-center"
        >
          Login
        </Link>

        <Link
          to="/signup"
          onClick={() => setIsOpen(false)}
          className="mt-3 rounded-lg bg-[var(--primary)] py-3 text-center text-white"
        >
          Sign Up
        </Link>

      </div>

    </div>
  );
};

export default MobileMenu;