import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUserPlus, FiShield } from "react-icons/fi";
import heroImage from "../../../assets/images/hero.png";

const Hero = () => {
  return (
   <section className="pt-0 pb-8">
     <div className="w-full px-5">
        {/* Hero Card */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#EEF4FB] via-white to-[#EEF8F3] shadow-lg border border-slate-100">

          <div className="grid items-center lg:grid-cols-[50%_50%] min-h-[620px]">

            {/* LEFT SIDE */}
            <div className="flex h-full flex-col justify-center px-8 py-10 lg:px-14">

              <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl">
                <span className="block text-[#123D8D]">
                  Your Voice.
                </span>

                <span className="mt-2 block text-[#16A34A]">
                  Our Action.
                </span>
              </h1>

              <p className="mt-7 max-w-md text-lg leading-8 text-slate-600">
                Report issues, track progress and help us build a better
                Jalgaon through an AI-powered grievance management system.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#123D8D] px-7 py-4 font-semibold text-white shadow-md transition hover:bg-[#0E3173]"
                >
                  <FiUserPlus />
                  Register Grievance
                </Link>

                <Link
                  to="/track"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-[#123D8D] hover:text-[#123D8D]"
                >
                  <FiSearch />
                  Track Complaint
                </Link>

              </div>

              {/* Badge */}

              <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-3 shadow-sm">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <FiShield className="text-green-600" />
                </div>

                <div>
                  <p className="font-semibold text-green-700">
                    AI-Powered System for Faster Resolution
                  </p>

                  <p className="text-sm text-slate-500">
                    Smart Routing • Duplicate Detection • Live Tracking
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="relative h-full min-h-[520px] overflow-hidden">

              <img
                src={heroImage}
                alt="District Office"
                className="h-full w-full object-cover"
              />

              {/* Left Fade */}

              <div className="absolute inset-y-0 left-0 w-52 bg-gradient-to-r from-[#EEF4FB] via-[#EEF4FB]/70 to-transparent"></div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;