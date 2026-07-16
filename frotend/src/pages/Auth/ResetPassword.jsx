import { useState } from "react";

import AuthLayout from "./components/AuthLayout";
import PasswordInput from "./components/PasswordInput";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a new secure password for your account."
    >
      <form
        onSubmit={submitHandler}
        className="space-y-6"
      >
        <PasswordInput
          name="password"
          placeholder="New Password"
          value={formData.password}
          onChange={changeHandler}
        />

        <PasswordInput
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
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
          Update Password
        </button>

      </form>
    </AuthLayout>
  );
};

export default ResetPassword;