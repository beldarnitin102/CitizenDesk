import { NavLink } from "react-router-dom";
import navLinks from "./navData";

const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navLinks.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `font-medium transition-all duration-300 ${
                isActive
                  ? "text-[var(--primary)]"
                  : "text-[var(--body)] hover:text-[var(--primary)]"
              }`
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;