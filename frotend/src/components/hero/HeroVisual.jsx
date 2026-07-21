import heroImage from "../../assets/images/hero-image.png";

function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">

      {/* Background Glow */}

      <div className="absolute -right-10 top-10 h-[620px] w-[620px] rounded-full bg-gradient-to-br from-blue-100 via-sky-50 to-transparent blur-3xl"></div>

      {/* ================= Notification ================= */}

      {/* <div className="absolute right-12 top-2 z-30 hidden lg:flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-5 py-3 shadow-xl animate-float-fast">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">

          ✅

        </div>

        <div>

          <p className="text-sm font-semibold text-slate-800">
            AI Routed Successfully
          </p>

          <p className="text-xs text-slate-500">
            Complaint sent to PWD Department
          </p>

        </div>

      </div> */}

      {/* ================= Building Container ================= */}

      <div className="relative z-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

        <img
          src={heroImage}
          alt="District Office"
          className="h-[620px] w-[650px] object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/18 via-transparent to-transparent"></div>

      </div>

      {/* ================= AI Analysis Card ================= */}

      {/* <div className="absolute -left-4 top-24 z-20 hidden w-72 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl animate-float-slow lg:block">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">

            🤖

          </div>

          <div>

            <h3 className="font-bold text-slate-900">
              AI Analysis
            </h3>

            <p className="text-sm text-slate-500">
              Complaint Classified
            </p>

          </div>

        </div>

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Language
            </span>

            <span className="font-semibold text-slate-800">
              Marathi
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Category
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-[#0F4C81]">

              Road Issue

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Priority
            </span>

            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">

              Medium

            </span>

          </div>

        </div>

      </div> */}

      {/* ================= Complaint Card ================= */}

      {/* <div className="absolute -bottom-8 right-0 z-20 hidden w-72 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl animate-float-fast lg:block">

        <div className="mb-5 flex items-center justify-between">

          <h3 className="font-bold text-slate-900">

            Complaint

          </h3>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

            Active

          </span>

        </div>

        <div className="space-y-3">

          <div>

            <p className="text-xs uppercase tracking-wide text-slate-400">

              Department

            </p>

            <p className="font-semibold text-slate-900">

              Public Works Department

            </p>

          </div>

          <div>

            <p className="text-xs uppercase tracking-wide text-slate-400">

              Issue

            </p>

            <p className="font-semibold text-slate-900">

              Road Damage

            </p>

          </div>

          <div>

            <p className="text-xs uppercase tracking-wide text-slate-400">

              Status

            </p>

            <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">

              Under Review

            </span>

          </div>

        </div>

      </div> */}

      {/* Decorative Elements */}

      <div className="absolute left-16 top-10 h-5 w-5 rounded-full bg-blue-400"></div>

      <div className="absolute bottom-20 left-5 h-4 w-4 rounded-full bg-green-400"></div>

      <div className="absolute right-6 bottom-32 h-6 w-6 rounded-full bg-orange-300"></div>

    </div>
  );
}

export default HeroVisual;