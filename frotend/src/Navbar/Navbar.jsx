import { Link } from "react-router-dom";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <NavLinks />

        <div className="flex items-center gap-4">
          <LanguageSelector />

          <Link
            to="/login"
            className="hidden rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[var(--secondary)] lg:block"
          >
            Login
          </Link>

          <MobileMenu />
        </div>

      </div>
    </header>
  );
};

export default Navbar;