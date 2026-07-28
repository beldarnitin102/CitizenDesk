import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Input from "../ui/Input";
import heroImage from "../../assets/images/hero-image.png";

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
    onSubmit(formData);
  };

  return (
    <div className="flex min-h-[calc(100vh-72px)] w-full overflow-hidden bg-slate-50">
      <div className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-slate-950 p-8 lg:flex">
        <div className="relative h-[560px] w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.65)] ring-1 ring-white/10 lg:-translate-x-8">
          <img
            src={heroImage}
            alt="District administration portal"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.08]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/30" />

          <div className="absolute inset-x-0 bottom-0 px-8 pb-8 text-white">
            <div className="mb-4 inline-flex rounded-full bg-slate-800/70 px-4 py-2 text-sm font-semibold tracking-tight text-slate-100 ring-1 ring-white/10">
              Smart Citizen Hub
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">Jalgaon Citizen Network</h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
              Connecting our community through digital infrastructure, AI tools, and instant grievance tracking.
            </p>
          </div>

          <div className="pointer-events-none absolute left-6 top-6 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 bottom-14 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-4 md:p-8 lg:w-1/2 overflow-y-auto">
        <Card className="w-full max-w-xl min-h-[640px] rounded-[2rem] border border-slate-200/90 bg-white p-10 shadow-[0_32px_90px_-30px_rgba(15,23,42,0.18)] my-auto">
          <div className="mb-8">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#0F4C81]">Welcome Back</span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900">Login to Your Account</h2>
            <p className="mt-3 text-sm text-slate-500">Access your complaints, AI assistant, and district dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input label="Email Address" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <div className="relative">
                <Input label="Password" type={showPassword ? "text" : "password"} name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[48px] text-xs font-medium text-[#0F4C81] hover:text-blue-700">
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300" /> Remember Me
              </label>
              <Link to="/forgot-password" className="font-medium text-[#0F4C81] hover:underline">Forgot Password?</Link>
            </div>

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Logging In..." : "Login"}
            </Button>
          </form>

          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-slate-200"></div>
            <span className="mx-3 text-xs text-slate-400">OR</span>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          <p className="text-center text-xs text-slate-600">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-[#0F4C81] hover:underline">Create Account</Link>
          </p>
        </Card>
      </div>

    </div>
  );
}

export default LoginForm;
