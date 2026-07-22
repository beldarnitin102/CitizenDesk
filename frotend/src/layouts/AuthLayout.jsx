import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left */}

        <div className="hidden w-1/2 items-center justify-center px-16 lg:flex">

          <div>

            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0F4C81] text-5xl text-white shadow-xl">
              🛡️
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900">
              AI Powered Smart District Complaint Management System
            </h1>

            <p className="max-w-lg text-lg leading-8 text-slate-600">
              Register complaints in your own language.
              AI automatically detects department,
              priority, duplicate issues and routes
              your complaint to the correct authority.
            </p>

            <div className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-lg">
              <h3 className="font-semibold text-[#0F4C81]">
                AI Features
              </h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>✓ Multilingual Complaint Analysis</li>
                <li>✓ Automatic Department Routing</li>
                <li>✓ Duplicate Detection</li>
                <li>✓ AI Image Classification</li>
                <li>✓ Priority Prediction</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 items-center justify-center px-6 py-10 lg:px-12">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AuthLayout;