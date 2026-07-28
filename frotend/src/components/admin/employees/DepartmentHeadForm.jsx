import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

import { useAuth } from "../../../context/AuthContext";

import { createDepartmentHead } from "../../../services/operations/adminAPI";

function DepartmentHeadForm({
  departments,

  onSuccess,
}) {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    email: "",

    password: "",

    phone: "",

    department: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await createDepartmentHead(
        formData,

        token,
      );

      toast.success("Department Head Created");

      onSuccess?.();
    } catch (error) {
      toast.error(error.response?.data?.message || "Creation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Input
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        required
      >
        <option value="">Select Department</option>

        {departments.map((dept) => (
          <option key={dept._id} value={dept._id}>
            {dept.name}
          </option>
        ))}
      </select>

      <Button className="w-full" disabled={loading}>
        {loading ? "Creating..." : "Create Department Head"}
      </Button>
    </form>
  );
}

export default DepartmentHeadForm;
