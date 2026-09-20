import { Building2 } from "lucide-react";

function ChallengesHeader() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F4C81]/15 bg-[#0F4C81]/5 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
            <Building2 size={16} />
            Public Civic Challenges
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Real problems.
            <span className="block text-[#0F4C81]">Visible to everyone.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore civic problems reported by citizens across the district.
            These challenges help communities, students, universities, and
            innovators understand real local needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChallengesHeader;
