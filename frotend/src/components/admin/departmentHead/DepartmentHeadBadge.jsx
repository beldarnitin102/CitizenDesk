function DepartmentHeadBadge({ role }) {
  if (role === "DEPARTMENT_HEAD") {
    return (
      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
        Department Head
      </span>
    );
  }

  if (role === "ADMIN") {
    return (
      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
        Admin
      </span>
    );
  }

  return (
    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
      Employee
    </span>
  );
}

export default DepartmentHeadBadge;
