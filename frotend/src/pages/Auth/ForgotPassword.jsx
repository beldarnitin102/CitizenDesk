import { useState } from "react";
import { FiMail } from "react-icons/fi";

import AuthLayout from "./components/AuthLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email address to receive a password reset link."
    >
      <form
        onSubmit={submitHandler}
        className="space-y-6"
      >
        <div>

          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <div className="relative">

            <FiMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
              h-14
              w-full
              rounded-xl
              border
              border-[var(--border)]
              pl-12
              outline-none
              focus:border-[var(--primary)]
              focus:ring-4
              focus:ring-blue-100
              "
            />

          </div>

        </div>

        <button
          className="
          h-14
          w-full
          rounded-xl
          bg-[var(--primary)]
          text-white
          font-semibold
          "
        >
          Send Reset Link
        </button>

      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;