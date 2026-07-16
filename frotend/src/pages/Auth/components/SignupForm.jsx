import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";

import PasswordInput from "./PasswordInput";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  const inputClass = `
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
  `;

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-5"
    >
      <div>

        <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
          Full Name
        </label>

        <div className="relative">

          <FiUser
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={changeHandler}
            className={inputClass}
          />

        </div>

      </div>

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
            placeholder="Enter email"
            value={formData.email}
            onChange={changeHandler}
            className={inputClass}
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
          Phone Number
        </label>

        <div className="relative">

          <FiPhone
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={changeHandler}
            className={inputClass}
          />

        </div>

      </div>

      <PasswordInput
        value={formData.password}
        onChange={changeHandler}
      />

      <button
        className="
          h-14
          w-full
          rounded-xl
          bg-[var(--accent)]
          text-white
          font-semibold
          transition
          hover:opacity-90
        "
      >
        Send OTP
      </button>

      <p className="text-center text-sm text-[var(--body)]">

        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-[var(--primary)]"
        >
          Login
        </Link>

      </p>

    </form>
  );
};

export default SignupForm;