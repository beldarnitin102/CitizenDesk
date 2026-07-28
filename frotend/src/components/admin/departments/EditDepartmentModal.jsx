import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

import { useAuth } from "../../../context/AuthContext";

import { updateDepartment } from "../../../services/operations/adminAPI";

function EditDepartmentModal({ department, open, onClose, refresh }) {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    email: "",
  });

  useEffect(() => {
    if (department) {
      setForm({
        name: department.name || "",
        description: department.description || "",
        email: department.email || "",
      });
    }
  }, [department]);

  if (!open || !department) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await updateDepartment(department._id, form, token);

      toast.success("Department Updated");

      refresh?.();

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to update department",
      );

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8">
        <h2 className="mb-8 text-2xl font-bold">Edit Department</h2>

        <div className="space-y-5">
          <Input
            label="Department Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="Department Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Updating..." : "Update Department"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditDepartmentModal;
