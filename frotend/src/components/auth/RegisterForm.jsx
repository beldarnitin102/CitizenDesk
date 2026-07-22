import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

function RegisterForm({
  onSendOTP,
  onSubmit,
  loading = false,
  otpLoading = false,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [errors, setErrors] = useState({});

  // ===========================
  // Handle Input Change
  // ===========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // ===========================
  // Validation
  // ===========================

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid mobile number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Confirm your password";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    if (!formData.otp.trim()) {
      newErrors.otp = "OTP is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ===========================
  // Register
  // ===========================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(formData);
  };

  // ===========================
  // Send OTP
  // ===========================

  const handleSendOTP = () => {
    if (!formData.email.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: "Enter email first",
      }));
      return;
    }

    onSendOTP(formData.email);
  };

  return (
    <Card className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

      <div className="mb-8">

        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#0F4C81]">
          Create Account
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Citizen Registration
        </h2>

        <p className="mt-2 text-slate-500">
          Register to submit AI-powered complaints
          and track their progress.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter full name"
        />

        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name}
          </p>
        )}

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email}
          </p>
        )}

        <Input
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="9876543210"
        />

        {errors.phone && (
          <p className="text-sm text-red-500">
            {errors.phone}
          </p>
        )}

        <div className="relative">

          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create password"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-[52px] text-sm font-medium text-[#0F4C81]"
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password}
          </p>
        )}

        <div className="relative">

          <Input
            label="Confirm Password"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-4 top-[52px] text-sm font-medium text-[#0F4C81]"
          >
            {showConfirmPassword
              ? "Hide"
              : "Show"}
          </button>

        </div>

        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword}
          </p>
        )}

        {/* OTP */}

        <div className="flex gap-3">

          <div className="flex-1">

            <Input
              label="OTP"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
            />

          </div>

          <div className="mt-8">

            <Button
              type="button"
              variant="outline"
              onClick={handleSendOTP}
              disabled={otpLoading}
            >
              {otpLoading
                ? "Sending..."
                : "Send OTP"}
            </Button>

          </div>

        </div>

        {errors.otp && (
          <p className="text-sm text-red-500">
            {errors.otp}
          </p>
        )}

        <Button
          type="submit"
          fullWidth
          disabled={loading}
        >
          {loading
            ? "Creating Account..."
            : "Register"}
        </Button>

      </form>

      <div className="mt-8 text-center text-sm text-slate-600">

        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-[#0F4C81] hover:underline"
        >
          Login
        </Link>

      </div>

    </Card>
  );
}

export default RegisterForm;