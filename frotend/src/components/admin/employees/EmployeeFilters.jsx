import { useEffect, useState } from "react";

import Card from "../../ui/Card";
import Input from "../../ui/Input";

import { useAuth } from "../../../context/AuthContext";

import { getAllDepartments } from "../../../services/operations/adminAPI";

function EmployeeFilters({ onChange }) {
  const { token } = useAuth();

  const [departments, setDepartments] = useState([]);

  const [search, setSearch] = useState("");

  const [role, setRole] = useState("");

  const [department, setDepartment] = useState("");

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getAllDepartments(token);

        setDepartments(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadDepartments();
  }, []);

  useEffect(() => {
    onChange({
      search,
      role,
      department,
    });
  }, [search, role, department]);

  return (
    <Card className="rounded-3xl p-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Input
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="">All Roles</option>

          <option value="EMPLOYEE">Employee</option>

          <option value="DEPARTMENT_HEAD">Department Head</option>
        </select>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="">All Departments</option>

          {departments.map((dept) => (
            <option key={dept._id} value={dept._id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>
    </Card>
  );
}

export default EmployeeFilters;
