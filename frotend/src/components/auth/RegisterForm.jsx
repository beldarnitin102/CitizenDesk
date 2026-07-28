import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import heroImage from "../../assets/images/hero-image.png";

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

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
    <div className="flex min-h-[calc(100vh-72px)] w-full overflow-hidden bg-slate-50">
      <div className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-slate-950 p-8 lg:flex">
        <div className="relative h-[560px] w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.65)] ring-1 ring-white/10 lg:-translate-x-8">
          <img
            src={heroImage}
            alt="Citizen registration portal"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.08]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/30" />

          <div className="absolute inset-x-0 bottom-0 px-8 pb-8 text-white">
            <div className="mb-4 inline-flex rounded-full bg-slate-800/70 px-4 py-2 text-sm font-semibold tracking-tight text-slate-100 ring-1 ring-white/10">
              Citizen Onboarding
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Join Jalgaon Citizen Network
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
              Register now to submit complaints, get AI-based help, and monitor approval progress.
            </p>
          </div>

          <div className="pointer-events-none absolute left-6 top-6 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 bottom-14 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-4 md:p-8 lg:w-1/2 overflow-y-auto">
        <Card className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
          <div className="mb-8">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#0F4C81]">
              Create Account
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Citizen Registration
            </h2>

            <p className="mt-2 text-slate-500">
              Register to submit AI-powered complaints and track their progress.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />

            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
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
              <p className="text-sm text-red-500">{errors.email}</p>
            )}

            <Input
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
            />

            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[52px] text-sm font-medium text-[#0F4C81]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}

            <div className="relative">
              <Input
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-[52px] text-sm font-medium text-[#0F4C81]"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
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
                  {otpLoading ? "Sending..." : "Send OTP"}
                </Button>
              </div>
            </div>

            {errors.otp && <p className="text-sm text-red-500">{errors.otp}</p>}

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Creating Account..." : "Register"}
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
      </div>
    </div>
  );
}

export default RegisterForm;
