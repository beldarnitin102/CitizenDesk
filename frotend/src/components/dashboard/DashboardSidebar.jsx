import { useNavigate } from "react-router-dom";

import SidebarItem from "./SidebarItem";

import Button from "../ui/Button";

import { useAuth } from "../../context/AuthContext";

const citizenLinks = [
  { title: "Dashboard", path: "/dashboard", icon: "🏠" },
  { title: "Create Complaint", path: "/dashboard/create-complaint", icon: "➕" },
  { title: "My Complaints", path: "/dashboard/my-complaints", icon: "📋" },
  { title: "AI Assistant", path: "/dashboard/ai-assistant", icon: "🤖" },
  { title: "Profile", path: "/dashboard/profile", icon: "👤" },
];

const employeeLinks = [
  { title: "Employee Dashboard", path: "/employee/dashboard", icon: "🏢" },
  { title: "Department Complaints", path: "/employee/complaints", icon: "📋" },
  { title: "Profile", path: "/dashboard/profile", icon: "👤" },
];

const departmentHeadLinks = [
  { title: "Department Dashboard", path: "/department-head/dashboard", icon: "🏢" },
  { title: "Employees", path: "/department-head/employees", icon: "👥" },
  { title: "Complaints", path: "/department-head/complaints", icon: "📋" },
  { title: "Assign", path: "/department-head/assign", icon: "🔧" },
  { title: "Analytics", path: "/department-head/analytics", icon: "📊" },
  { title: "Profile", path: "/dashboard/profile", icon: "👤" },
];

const adminLinks = [
  { title: "Admin Dashboard", path: "/admin/dashboard", icon: "🛠️" },
  { title: "Employees", path: "/admin/employees", icon: "👥" },
  { title: "Departments", path: "/admin/departments", icon: "🏛️" },
  { title: "Profile", path: "/dashboard/profile", icon: "👤" },
];

function DashboardSidebar({
  mobile = false,
  closeSidebar,
}) {
  const navigate = useNavigate();

  const { logout, user } = useAuth();

  // Choose links based on user role
  let sidebarLinks = citizenLinks;

  if (user) {
    switch (user.role) {
      case "EMPLOYEE":
        sidebarLinks = employeeLinks;
        break;
      case "DEPARTMENT_HEAD":
        sidebarLinks = departmentHeadLinks;
        break;
      case "ADMIN":
        sidebarLinks = adminLinks;
        break;
      default:
        sidebarLinks = citizenLinks;
    }
  }

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <aside
      className={`
      flex
      h-full
      w-[290px]
      flex-col
      border-r
      border-slate-200
      bg-white
      px-6
      py-8
      shadow-sm
      `}
    >
      {/* Logo */}

      <div className="mb-10 flex items-center gap-4">
        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#0F4C81]
          text-2xl
          text-white
          shadow-lg
          "
        >
          🛡️
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            AI Smart District
          </h2>

          <p className="text-xs text-slate-500">
            Complaint System
          </p>
        </div>
      </div>

      {/* Citizen Info */}

      <div
        className="
        mb-8
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-4
        "
      >
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Logged In As
        </p>

        <h3 className="mt-1 font-semibold text-slate-900">
          {user?.name || "Citizen"}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {user?.email}
        </p>
      </div>

      {/* Navigation */}

      <div className="flex flex-1 flex-col gap-3">
        {sidebarLinks.map((item) => (
          <SidebarItem
            key={item.path}
            to={item.path}
            title={item.title}
            icon={item.icon}
            onClick={mobile ? closeSidebar : undefined}
          />
        ))}
      </div>

      {/* Logout */}

      <Button
        variant="danger"
        fullWidth
        onClick={handleLogout}
      >
        Logout
      </Button>
    </aside>
  );
}

export default DashboardSidebar;