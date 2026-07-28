import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-up flex flex-col gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_44px_120px_-50px_rgba(15,23,42,0.25)] sm:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F4C81]">
          Smart civic governance
        </p>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          Your Voice.
          <span className="block text-[#0F4C81]">Our Intelligence.</span>
          <span className="block">Better Governance.</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Report civic issues in Marathi, Hindi, English, or your regional
          language. Our AI understands your complaint and routes it accurately.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          size="lg"
          className="w-full bg-[#0F4C81] text-white shadow-xl hover:bg-[#0c3a65] sm:w-auto"
          onClick={() => navigate("/register")}
        >
          Register Complaint
          <ArrowRight size={18} className="ml-2" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full border-slate-300 bg-white text-slate-950 hover:bg-slate-100 sm:w-auto"
          onClick={() => navigate("/login")}
        >
          Track Complaint
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-3xl bg-slate-50 p-4">
          <ShieldCheck size={18} className="text-[#0F4C81]" />
          <p className="text-sm font-medium text-slate-700">Secure Complaint Tracking</p>
        </div>

        <div className="flex items-center gap-3 rounded-3xl bg-slate-50 p-4">
          <ShieldCheck size={18} className="text-[#0F4C81]" />
          <p className="text-sm font-medium text-slate-700">AI Powered Classification</p>
        </div>
      </div>

      <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
        <div>
          <h3 className="text-3xl font-bold text-slate-950">24×7</h3>
          <p className="mt-2 text-sm text-slate-600">AI Assistance</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-950">100%</h3>
          <p className="mt-2 text-sm text-slate-600">Multilingual Support</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-950">Fast</h3>
          <p className="mt-2 text-sm text-slate-600">Department Routing</p>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
