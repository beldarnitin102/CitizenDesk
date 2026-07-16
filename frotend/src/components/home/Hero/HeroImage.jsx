import heroImage from "../../../assets/images/hero.png";

import {
  FiMapPin,
  FiCheckCircle,
  FiClock,
  FiShield,
} from "react-icons/fi";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Circle */}

      <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-100 via-white to-green-100 blur-xl"></div>

      {/* Main Image */}

      <div className="relative z-10">

        <img
          src={heroImage}
          alt="District Grievance Management"
          className="w-full max-w-xl drop-shadow-2xl"
        />

        {/* Floating Card 1 */}

        <div
          className="
          absolute
          -left-14
          top-8
          hidden
          w-64
          rounded-2xl
          border
          border-white/40
          bg-white/80
          p-5
          shadow-xl
          backdrop-blur-xl
          lg:block
          "
        >
          <div className="flex items-center gap-3">

            <div className="rounded-full bg-green-100 p-3">

              <FiCheckCircle
                className="text-green-600"
                size={22}
              />

            </div>

            <div>

              <h4 className="font-semibold text-[var(--heading)]">
                Complaint Submitted
              </h4>

              <p className="text-sm text-[var(--body)]">
                AI assigned to PWD
              </p>

            </div>

          </div>
        </div>

        {/* Floating Card 2 */}

        <div
          className="
          absolute
          -right-10
          top-44
          hidden
          w-60
          rounded-2xl
          border
          border-white/40
          bg-white/80
          p-5
          shadow-xl
          backdrop-blur-xl
          lg:block
          "
        >
          <div className="flex items-center gap-3">

            <div className="rounded-full bg-purple-100 p-3">

              <FiClock
                className="text-purple-600"
                size={20}
              />

            </div>

            <div>

              <h4 className="font-semibold text-[var(--heading)]">
                Processing
              </h4>

              <p className="text-sm text-[var(--body)]">
                ETA 2 Days
              </p>

            </div>

          </div>
        </div>

        {/* Floating Card 3 */}

        <div
          className="
          absolute
          bottom-6
          -left-8
          hidden
          w-72
          rounded-2xl
          border
          border-white/40
          bg-white/80
          p-5
          shadow-xl
          backdrop-blur-xl
          lg:block
          "
        >
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-blue-100 p-3">

                <FiMapPin
                  className="text-[var(--primary)]"
                  size={20}
                />

              </div>

              <div>

                <h4 className="font-semibold text-[var(--heading)]">
                  Jalgaon District
                </h4>

                <p className="text-sm text-[var(--body)]">
                  Smart AI Monitoring
                </p>

              </div>

            </div>

            <FiShield
              size={28}
              className="text-[var(--accent)]"
            />

          </div>
        </div>

      </div>

    </div>
  );
};

export default HeroImage;