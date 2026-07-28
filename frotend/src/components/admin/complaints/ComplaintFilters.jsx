import { useEffect, useState } from "react";

import Card from "../../ui/Card";
import Input from "../../ui/Input";

import { useAuth } from "../../../context/AuthContext";

import { getAllDepartments } from "../../../services/operations/adminAPI";

function ComplaintFilters({ onChange }) {
  const { token } = useAuth();

  const [departments, setDepartments] = useState([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [priority, setPriority] = useState("");

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
      status,
      priority,
      department,
    });
  }, [search, status, priority, department]);

  return (
    <Card className="rounded-3xl p-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <Input
          placeholder="Search Complaint..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="">All Status</option>

          <option value="PENDING">Pending</option>

          <option value="ASSIGNED">Assigned</option>

          <option value="IN_PROGRESS">In Progress</option>

          <option value="RESOLVED">Resolved</option>

          <option value="REJECTED">Rejected</option>

          <option value="CLOSED">Closed</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="">All Priority</option>

          <option value="LOW">Low</option>

          <option value="MEDIUM">Medium</option>

          <option value="HIGH">High</option>

          <option value="CRITICAL">Critical</option>
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

export default ComplaintFilters;
