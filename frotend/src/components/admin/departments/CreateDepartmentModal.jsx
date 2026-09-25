import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";

import { useAuth } from "../../../context/AuthContext";

import { createDepartment } from "../../../services/operations/adminAPI";

function CreateDepartmentModal({ open, onClose, refresh }) {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    email: "",
  });

  if (!open) return null;

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await createDepartment(form, token);

      toast.success("Department created successfully");

      setForm({
        name: "",
        description: "",
        email: "",
      });

      refresh?.();

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to create department",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8">
        <h2 className="mb-6 text-2xl font-bold">Create Department</h2>

        <form onSubmit={submitHandler} className="space-y-5">
          <Input
            label="Department Name"
            name="name"
            value={form.name}
            onChange={changeHandler}
            required
          />

          <Input
            label="Department Email"
            name="email"
            type="email"
            value={form.email}
            onChange={changeHandler}
            required
          />

          <Textarea
            rows={4}
            label="Description"
            name="description"
            value={form.description}
            onChange={changeHandler}
          />

          <div className="flex justify-end gap-3">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateDepartmentModal;
