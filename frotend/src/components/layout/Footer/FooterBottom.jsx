import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div
      className="
      mt-16
      flex
      flex-col
      items-center
      justify-between
      gap-4
      border-t
      border-[var(--border)]
      pt-8
      text-sm
      md:flex-row
      "
    >
      <p className="text-[var(--body)]">
        © {new Date().getFullYear()} District AI Complaint Management System.
        All rights reserved.
      </p>

      <div className="flex gap-6">

        <Link
          to="/privacy"
          className="text-[var(--body)] hover:text-[var(--primary)]"
        >
          Privacy
        </Link>

        <Link
          to="/terms"
          className="text-[var(--body)] hover:text-[var(--primary)]"
        >
          Terms
        </Link>

        <Link
          to="/accessibility"
          className="text-[var(--body)] hover:text-[var(--primary)]"
        >
          Accessibility
        </Link>

      </div>

    </div>
  );
};

export default FooterBottom;