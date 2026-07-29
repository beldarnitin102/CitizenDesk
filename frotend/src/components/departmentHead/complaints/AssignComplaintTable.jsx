import { useState } from "react";
import toast from "react-hot-toast";

import Card from "../../ui/Card";
import Button from "../../ui/Button";

import { useAuth } from "../../../context/AuthContext";

import { assignComplaint } from "../../../services/operations/departmentHeadAPI";

function AssignComplaintTable({ complaints = [], employees = [], refresh }) {
  const { token } = useAuth();

  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [loadingId, setLoadingId] = useState(null);

  const handleAssign = async (complaintId) => {
    const employeeId = selectedEmployee[complaintId];

    if (!employeeId) {
      toast.error("Please select an employee");
      return;
    }

    setLoadingId(complaintId);

    try {
      await assignComplaint(
        {
          complaintId,
          employeeId,
        },
        token,
      );

      toast.success("Complaint assigned successfully");

      refresh?.();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to assign complaint",
      );
    } finally {
      setLoadingId(null);
    }
  };

  // ==========================
  // Empty State
  // ==========================

  if (complaints.length === 0) {
    return (
      <Card className="rounded-3xl p-16 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">
          📭
        </div>

        <h2 className="mt-8 text-3xl font-bold text-slate-800">
          No Complaints Available
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-500">
          There are currently no pending and unassigned complaints for your
          department. Once a new complaint is received, it will appear here for
          assignment.
        </p>
      </Card>
    );
  }

  // ==========================
  // Table
  // ==========================

  return (
    <Card className="rounded-3xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Assign Complaints
          </h2>

          <p className="mt-1 text-slate-500">
            {complaints.length} complaint
            {complaints.length > 1 ? "s" : ""} waiting for assignment
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-4 text-left font-semibold">Complaint</th>

              <th className="px-4 py-4 text-left font-semibold">Citizen</th>

              <th className="px-4 py-4 text-left font-semibold">Priority</th>

              <th className="px-4 py-4 text-left font-semibold">
                Assign Employee
              </th>

              <th className="px-4 py-4 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr
                key={complaint._id}
                className="border-b transition hover:bg-slate-50"
              >
                <td className="px-4 py-5">
                  <p className="font-semibold text-slate-800">
                    {complaint.title}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {complaint.complaintNumber}
                  </p>
                </td>

                <td className="px-4 py-5">
                  <p className="font-medium">{complaint.citizen?.name}</p>

                  <p className="text-sm text-slate-500">
                    {complaint.citizen?.email}
                  </p>
                </td>

                <td className="px-4 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      complaint.priority === "HIGH"
                        ? "bg-red-100 text-red-700"
                        : complaint.priority === "MEDIUM"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {complaint.priority}
                  </span>
                </td>

                <td className="px-4 py-5">
                  <select
                    value={selectedEmployee[complaint._id] || ""}
                    onChange={(e) =>
                      setSelectedEmployee({
                        ...selectedEmployee,
                        [complaint._id]: e.target.value,
                      })
                    }
                    className="w-56 rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none transition focus:border-[#0F4C81]"
                  >
                    <option value="">Select Employee</option>

                    {employees.map((employee) => (
                      <option key={employee._id} value={employee._id}>
                        {employee.name}
                      </option>
                    ))}
                  </select>
                </td>

                <td className="px-4 py-5 text-center">
                  <Button
                    onClick={() => handleAssign(complaint._id)}
                    disabled={loadingId === complaint._id}
                  >
                    {loadingId === complaint._id ? "Assigning..." : "Assign"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default AssignComplaintTable;
