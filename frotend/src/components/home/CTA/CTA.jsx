import {
  FiCpu,
  FiShield,
  FiZap,
} from "react-icons/fi";

import Container from "../../ui/Container";

import CTAButtons from "./CTAButtons";

const CTA = () => {
  return (
    <section className="py-24">

      <Container>

        <div
          className="
          relative
          overflow-hidden
          rounded-[36px]
          bg-gradient-to-r
          from-[#0F4C81]
          via-[#155A97]
          to-[#2BAE66]
          px-8
          py-20
          text-white
          shadow-2xl
          lg:px-20
          "
        >

          {/* Background Effects */}

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              <FiCpu />

              AI Powered District Grievance Platform
            </div>

            <h2 className="mt-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Ready to Transform Public Complaint Management?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
              Experience faster complaint resolution with Artificial
              Intelligence, smart department routing, multilingual support,
              and complete transparency from submission to resolution.
            </p>

            <CTAButtons />

            <div className="mt-16 flex flex-wrap items-center justify-center gap-10">

              <div className="flex items-center gap-3">
                <FiShield size={24} />

                <span>Secure Platform</span>
              </div>

              <div className="flex items-center gap-3">
                <FiZap size={24} />

                <span>AI Powered Routing</span>
              </div>

              <div className="flex items-center gap-3">
                <FiCpu size={24} />

                <span>Real-Time Tracking</span>
              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default CTA;