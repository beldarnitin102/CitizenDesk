import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "./components/AuthLayout";
import OTPField from "./components/OTPInput";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(otp);
  };

  return (
    <AuthLayout
      title="Verify Email"
      subtitle="Enter the 6-digit OTP sent to your registered email."
    >
      <form
        onSubmit={submitHandler}
        className="space-y-8"
      >
        <OTPField
          otp={otp}
          setOtp={setOtp}
        />

        <button
          className="
          h-14
          w-full
          rounded-xl
          bg-[var(--primary)]
          font-semibold
          text-white
          transition
          hover:opacity-90
          "
        >
          Verify OTP
        </button>

        <button
          type="button"
          className="
          w-full
          rounded-xl
          border
          border-[var(--border)]
          py-4
          font-medium
          text-[var(--primary)]
          "
        >
          Resend OTP
        </button>

        <p className="text-center text-sm text-[var(--body)]">
          Wrong email?

          <Link
            to="/signup"
            className="ml-2 font-semibold text-[var(--primary)]"
          >
            Go Back
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default VerifyOTP;