import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `text-[15px] font-medium transition ${
                isActive
                  ? "text-[var(--primary)]"
                  : "text-[var(--body)] hover:text-[var(--primary)]"
              }`
            }
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;