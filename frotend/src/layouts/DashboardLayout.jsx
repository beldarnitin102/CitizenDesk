import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}

      <aside className="hidden w-72 border-r border-[var(--border)] bg-white lg:block">

        <div className="p-8">

          <h2 className="text-2xl font-bold text-[var(--primary)]">
            Dashboard
          </h2>

        </div>

      </aside>

      {/* Main */}

      <div className="flex flex-1 flex-col">

        <header className="border-b bg-white p-5 shadow-sm">

          Dashboard Header

        </header>

        <main className="flex-1 bg-[#F8FAFC] p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;