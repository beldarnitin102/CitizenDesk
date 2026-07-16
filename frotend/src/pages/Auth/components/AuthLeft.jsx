import {
  FiShield,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";

import hero from "../../../assets/images/hero.png";

const features = [
  "AI Complaint Classification",
  "Live Complaint Tracking",
  "Secure Government Platform",
];

const AuthLeft = () => {
  return (
    <div
      className="
      relative
      hidden
      lg:flex
      w-1/2
      overflow-hidden
      bg-gradient-to-br
      from-[#0F4C81]
      via-[#19588F]
      to-[#2BAE66]
      p-14
      text-white
      "
    >
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">

            <FiCpu />

            AI Powered Platform

          </div>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Smart District Complaint Management
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Submit complaints, track progress, and receive AI-powered
            assistance in English, Hindi and Marathi.
          </p>

        </div>

        <img
          src={hero}
          alt=""
          className="mx-auto my-10 w-[85%]"
        />

        <div className="space-y-5">

          {features.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-white/15 p-3">
                <FiCheckCircle size={20} />
              </div>

              <span className="text-lg">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default AuthLeft;