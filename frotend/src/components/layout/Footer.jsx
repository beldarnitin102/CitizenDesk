import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-white">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          <div>

            <h2 className="text-2xl font-bold text-[var(--primary)]">
              District AI
            </h2>

            <p className="mt-4 leading-7 text-[var(--body)]">
              AI Powered District Complaint
              Management System for citizens,
              employees and administrators.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <Link to="/">Home</Link>

              <Link to="/signup">
                Register
              </Link>

              <Link to="/login">
                Login
              </Link>

            </div>

          </div>

          <div>

            <h3 className="font-semibold">
              Citizen
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <Link>
                Submit Complaint
              </Link>

              <Link>
                Track Complaint
              </Link>

            </div>

          </div>

          <div>

            <h3 className="font-semibold">
              Contact
            </h3>

            <p className="mt-4 text-[var(--body)]">
              collector@district.gov.in
            </p>

            <p className="mt-2 text-[var(--body)]">
              +91 1800-000-000
            </p>

          </div>

        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-[var(--body)]">

          © 2026 District AI Complaint Management System

        </div>

      </div>

    </footer>
  );
};

export default Footer;