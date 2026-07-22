import { NavLink } from "react-router-dom";
import Container from "../ui/Container";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Departments", path: "/departments" },
  { name: "Contact", path: "/contact" },
];

const departments = [
  "Public Works",
  "Water Supply",
  "Electricity",
  "Sanitation",
  "Health",
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <Container>
        <div className="grid gap-14 py-16 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4C81] text-3xl shadow-lg">
                🛡️
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  AI Smart District
                </h2>

                <p className="text-sm text-slate-400">
                  Complaint Management System
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              An AI-powered grievance platform that automatically understands,
              categorizes and routes citizen complaints to the appropriate
              government department for faster resolution.
            </p>

            <div className="mt-8 flex gap-4">
              {["F", "X", "L", "Y"].map((item) => (
                <button
                  key={item}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition hover:border-[#0F4C81] hover:bg-[#0F4C81]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-lg font-bold">
              Quick Links
            </h3>

            <div className="space-y-4">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="block text-slate-400 transition hover:translate-x-2 hover:text-white"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Departments */}

          <div>
            <h3 className="mb-6 text-lg font-bold">
              Departments
            </h3>

            <div className="space-y-4">
              {departments.map((department) => (
                <p
                  key={department}
                  className="cursor-pointer text-slate-400 transition hover:translate-x-2 hover:text-white"
                >
                  {department}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-lg font-bold">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Email
                </p>

                <p className="mt-1">
                  support@districtai.gov.in
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Phone
                </p>

                <p className="mt-1">
                  +91 1800-123-456
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Address
                </p>

                <p className="mt-1">
                  Collector Office,
                  <br />
                  Jalgaon, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-800 py-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} AI Smart District Complaint Management
            System. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <button className="transition hover:text-white">
              Privacy Policy
            </button>

            <button className="transition hover:text-white">
              Terms of Service
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;