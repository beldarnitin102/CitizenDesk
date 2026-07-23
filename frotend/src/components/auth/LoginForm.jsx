import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Input from "../ui/Input";

function LoginForm({ onSubmit, loading = false }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must contain at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData); // Sends raw values straight up to Login.jsx
  };

  return (
    <Card className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
      <div className="mb-8">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#0F4C81]">Welcome Back</span>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">Login to Your Account</h2>
        <p className="mt-2 text-slate-500">Access your complaints, AI assistant, and district dashboard.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input label="Email Address" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <div className="relative">
            <Input label="Password" type={showPassword ? "text" : "password"} name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[52px] text-sm font-medium text-[#0F4C81] hover:text-blue-700">
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="rounded border-slate-300" /> Remember Me
          </label>
          <Link to="/forgot-password" className="font-medium text-[#0F4C81] hover:underline">Forgot Password?</Link>
        </div>

        <Button type="submit" fullWidth disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </Button>
      </form>

      <div className="my-8 flex items-center">
        <div className="h-px flex-1 bg-slate-200"></div>
        <span className="mx-4 text-sm text-slate-400">OR</span>
        <div className="h-px flex-1 bg-slate-200"></div>
      </div>

      <p className="text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link to="/register" className="font-semibold text-[#0F4C81] hover:underline">Create Account</Link>
      </p>
    </Card>
  );
}

export default LoginForm;
