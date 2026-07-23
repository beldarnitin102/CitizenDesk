import { useAuth } from "../../context/AuthContext";

function DashboardNavbar({
  title = "Dashboard",
  onMenuClick,
}) {
  const { user } = useAuth();

  return (
    <header
      className="
      sticky
      top-0
      z-30
      flex
      h-20
      items-center
      justify-between
      border-b
      border-slate-200
      bg-white/90
      px-6
      backdrop-blur-md
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={onMenuClick}
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          lg:hidden
          "
        >
          ☰
        </button>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="text-sm text-slate-500">
            Welcome back, {user?.name || "Citizen"}
          </p>
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Notification */}

        <button
          className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-200
          bg-white
          transition
          hover:border-[#0F4C81]
          "
        >
          🔔

          <span
            className="
            absolute
            right-3
            top-3
            h-2.5
            w-2.5
            rounded-full
            bg-red-500
            "
          />
        </button>

        {/* Avatar */}

        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#0F4C81]
            text-lg
            font-bold
            text-white
            "
          >
            {user?.name
              ?.charAt(0)
              ?.toUpperCase() || "C"}
          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold text-slate-900">
              {user?.name}
            </h3>

            <p className="text-sm text-slate-500">
              Citizen
            </p>

          </div>

        </div>

      </div>
    </header>
  );
}

export default DashboardNavbar;