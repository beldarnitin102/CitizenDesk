import { NavLink } from "react-router-dom";

function SidebarItem({
  to,
  icon,
  title,
  onClick,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `
        group
        flex
        items-center
        gap-4
        rounded-2xl
        px-4
        py-3
        text-[15px]
        font-medium
        transition-all
        duration-300

        ${
          isActive
            ? "bg-[#0F4C81] text-white shadow-lg"
            : "text-slate-600 hover:bg-slate-100 hover:text-[#0F4C81]"
        }
        `
      }
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl"
      >
        {icon}
      </span>

      <span>{title}</span>
    </NavLink>
  );
}

export default SidebarItem;