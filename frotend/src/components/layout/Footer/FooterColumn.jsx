import { Link } from "react-router-dom";

const FooterColumn = ({
  title,
  links,
}) => {
  return (
    <div>

      <h3 className="mb-6 text-lg font-semibold text-[var(--heading)]">
        {title}
      </h3>

      <ul className="space-y-4">

        {links.map((link) => (
          <li key={link.title}>
            <Link
              to={link.path}
              className="
              text-[15px]
              text-[var(--body)]
              transition-colors
              duration-300
              hover:text-[var(--primary)]
              "
            >
              {link.title}
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
};

export default FooterColumn;