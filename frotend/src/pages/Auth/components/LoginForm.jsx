import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

import PasswordInput from "./PasswordInput";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-6"
    >
      <div>

        <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
          Email Address
        </label>

        <div className="relative">

          <FiMail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={changeHandler}
            className="
              h-14
              w-full
              rounded-xl
              border
              border-[var(--border)]
              bg-white
              pl-12
              outline-none
              transition
              focus:border-[var(--primary)]
              focus:ring-4
              focus:ring-blue-100
            "
          />

        </div>

      </div>

      <PasswordInput
        value={formData.password}
        onChange={changeHandler}
      />

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm">

          <input type="checkbox" />

          Remember me

        </label>

        <Link
          to="/forgot-password"
          className="text-sm font-medium text-[var(--primary)]"
        >
          Forgot Password?
        </Link>

      </div>

      <button
        className="
          h-14
          w-full
          rounded-xl
          bg-[var(--primary)]
          text-white
          font-semibold
          transition
          hover:opacity-90
        "
      >
        Login
      </button>

      <p className="text-center text-sm text-[var(--body)]">

        Don't have an account?{" "}

        <Link
          to="/signup"
          className="font-semibold text-[var(--primary)]"
        >
          Sign Up
        </Link>

      </p>

    </form>
  );
};

export default LoginForm;