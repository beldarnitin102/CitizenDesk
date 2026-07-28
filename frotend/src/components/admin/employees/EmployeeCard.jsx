import { useState } from "react";
import toast from "react-hot-toast";

import Card from "../../ui/Card";
import Button from "../../ui/Button";

import { useAuth } from "../../../context/AuthContext";

import { deleteEmployee } from "../../../services/operations/adminAPI";

import EditEmployeeModal from "./EditEmployeeModal";
import DeleteEmployeeModal from "./DeleteEmployeeModal";

function EmployeeCard({
  employee,

  refresh,
}) {
  const { token } = useAuth();

  const [showEdit, setShowEdit] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteEmployee(employee._id, token);

      toast.success("Employee Deleted");

      refresh();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <>
      <Card className="rounded-3xl p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{employee.name}</h2>

            <p className="mt-2 text-slate-600">{employee.email}</p>

            <p className="text-slate-600">{employee.phone}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                {employee.role}
              </span>

              <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                {employee.department?.name}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={() => setShowEdit(true)}>Edit</Button>

            <Button variant="danger" onClick={() => setShowDelete(true)}>
              Delete
            </Button>
          </div>
        </div>
      </Card>

      {showEdit && (
        <EditEmployeeModal
          employee={employee}
          onClose={() => setShowEdit(false)}
          refresh={refresh}
        />
      )}

      {showDelete && (
        <DeleteEmployeeModal
          employee={employee}
          onClose={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}

export default EmployeeCard;
