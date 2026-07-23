import { useState } from "react";

import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

function DashboardLayout({
  children,
  title,
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
          fixed
          inset-0
          z-40
          bg-black/40
          backdrop-blur-sm
          lg:hidden
          "
        />
      )}

      {/* Mobile Sidebar */}

      <div
        className={`
        fixed
        left-0
        top-0
        z-50
        h-full
        transform
        transition-transform
        duration-300
        lg:hidden

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
        `}
      >
        <DashboardSidebar
          mobile
          closeSidebar={() =>
            setSidebarOpen(false)
          }
        />
      </div>

      {/* Desktop Sidebar */}

      <div className="fixed left-0 top-0 hidden h-screen lg:block">
        <DashboardSidebar />
      </div>

      {/* Main */}

      <main className="lg:ml-[290px]">

        <DashboardNavbar
          title={title}
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <div className="p-6 lg:p-8">
          {children}
        </div>

      </main>

    </div>
  );
}

export default DashboardLayout;