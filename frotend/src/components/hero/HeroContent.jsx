import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Button from "../ui/Button";

function HeroContent() {
  return (
    <div className="animate-fade-up flex flex-col">
      {/* Badge */}

    

      {/* Heading */}

      <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
       Your Voice.

        <span className="block text-[#0F4C81]">Our Intelligence.</span>
        <span className="block">Better Governance.</span>
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Report civic issues in Marathi, Hindi, English, or your regional
        language. Our AI automatically understands the complaint.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button
          size="lg"
          className="shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Register Complaint
          <ArrowRight size={18} className="ml-2" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="hover:-translate-y-1 transition-all duration-300"
        >
          Track Complaint
        </Button>
      </div>

      {/* Features */}

      <div className="mt-10 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-green-600" />

          <span className="text-sm font-medium text-slate-700">
            Secure Complaint Tracking
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-green-600" />

          <span className="text-sm font-medium text-slate-700">
            AI Powered Classification
          </span>
        </div>
      </div>

      {/* Statistics */}

      <div className="mt-16 grid grid-cols-3 gap-6 md:gap-10 border-t border-slate-200 pt-8">
        <div>
          <h3 className="text-3xl font-bold text-[#0F4C81]">24×7</h3>

          <p className="mt-2 text-sm text-slate-600">AI Assistance</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#0F4C81]">100%</h3>

          <p className="mt-2 text-sm text-slate-600">Multilingual Support</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#0F4C81]">Fast</h3>

          <p className="mt-2 text-sm text-slate-600">Department Routing</p>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
