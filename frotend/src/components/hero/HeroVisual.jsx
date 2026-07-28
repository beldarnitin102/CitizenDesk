import heroImage from "../../assets/images/hero-image.png";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute inset-0 -left-6 -right-6 rounded-[2.5rem] bg-gradient-to-br from-slate-100 via-white to-slate-50 shadow-[0_44px_120px_-50px_rgba(15,23,42,0.25)]" />

      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
        <img
          src={heroImage}
          alt="Community governance"
          className="h-[620px] w-full object-cover object-center"
        />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
      </div>

      <div className="absolute -bottom-10 right-10 hidden w-64 rounded-[2rem] border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-xl sm:block">
        Live AI Routing
        <p className="mt-3 text-sm text-slate-600">
          Smart classification, faster response, and transparent complaint status.
        </p>
      </div>
    </div>
  );
}

export default HeroVisual;
