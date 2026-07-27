import { useState } from "react";
import toast from "react-hot-toast";

import Card from "../../ui/Card";
import Button from "../../ui/Button";

import { useAuth } from "../../../context/AuthContext";

import { assignComplaint } from "../../../services/operations/departmentHeadAPI";

function AssignComplaintTable({ complaints, employees, refresh }) {
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

      console.log(error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <Card className="rounded-3xl p-6 overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="py-4 text-left">Complaint</th>

            <th className="py-4 text-left">Citizen</th>

            <th className="py-4 text-left">Priority</th>

            <th className="py-4 text-left">Employee</th>

            <th className="py-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id} className="border-b">
              <td className="py-5">
                <p className="font-semibold">{complaint.title}</p>

                <p className="text-sm text-slate-500">
                  {complaint.complaintNumber}
                </p>
              </td>

              <td>{complaint.citizen?.name}</td>

              <td>{complaint.priority}</td>

              <td>
                <select
                  value={selectedEmployee[complaint._id] || ""}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      [complaint._id]: e.target.value,
                    })
                  }
                  className="w-52 rounded-lg border p-2"
                >
                  <option value="">Select Employee</option>

                  {employees.map((employee) => (
                    <option key={employee._id} value={employee._id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </td>

              <td className="text-center">
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
    </Card>
  );
}

export default AssignComplaintTable;
