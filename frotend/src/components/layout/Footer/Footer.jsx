import {
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import Container from "../../ui/Container";

import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";
import SocialLinks from "./SocialLinks";

import {
  citizenLinks,
  quickLinks,
} from "./footerLinks";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-white">

      <Container>

        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-12 rounded-xl"
              />

              <div>

                <h2 className="text-xl font-bold text-[var(--heading)]">
                  DistrictAI
                </h2>

                <p className="text-sm text-[var(--body)]">
                  Smart Complaint Portal
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-[var(--body)]">
              AI-powered grievance redressal platform helping citizens
              communicate directly with government departments through
              intelligent complaint analysis and transparent tracking.
            </p>

            <SocialLinks />

          </div>

          <FooterColumn
            title="Quick Links"
            links={quickLinks}
          />

          <FooterColumn
            title="Citizen Services"
            links={citizenLinks}
          />

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-[var(--heading)]">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FiMapPin
                  className="mt-1 text-[var(--primary)]"
                  size={18}
                />

                <span className="text-[var(--body)]">
                  District Collector Office,
                  Maharashtra, India
                </span>
              </div>

              <div className="flex gap-3">
                <FiMail
                  className="text-[var(--primary)]"
                  size={18}
                />

                <span className="text-[var(--body)]">
                  support@districtai.gov.in
                </span>
              </div>

              <div className="flex gap-3">
                <FiPhone
                  className="text-[var(--primary)]"
                  size={18}
                />

                <span className="text-[var(--body)]">
                  +91 1800-123-4567
                </span>
              </div>

            </div>

          </div>

        </div>

        <FooterBottom />

      </Container>

    </footer>
  );
};

export default Footer;