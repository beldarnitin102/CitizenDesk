import { useState } from "react";

import toast from "react-hot-toast";

import Card from "../../ui/Card";
import Button from "../../ui/Button";

import { useAuth } from "../../../context/AuthContext";

import { deleteEmployee } from "../../../services/operations/adminAPI";

function DeleteEmployeeModal({
  employee,

  onSuccess,

  onClose,
}) {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      await deleteEmployee(employee._id, token);

      toast.success("Employee Deleted");

      onSuccess?.();

      onClose?.();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <Card className="w-full max-w-lg rounded-3xl p-8">
        <h2 className="text-2xl font-bold">Delete Employee</h2>

        <p className="mt-4 text-slate-600">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{employee.name}</span>?
        </p>

        <div className="mt-8 flex gap-4">
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            Cancel
          </Button>

          <Button className="flex-1" onClick={handleDelete} disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default DeleteEmployeeModal;
