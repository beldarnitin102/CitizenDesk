import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/ui/Button";

import DepartmentTable from "../../components/admin/departments/DepartmentTable";
import CreateDepartmentModal from "../../components/admin/departments/CreateDepartmentModal";
import EditDepartmentModal from "../../components/admin/departments/EditDepartmentModal";

import { useAuth } from "../../context/AuthContext";

import {
  getAllDepartments,
} from "../../services/operations/adminAPI";

function DepartmentManagement() {
  const { token } = useAuth();

  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const loadDepartments = async () => {
    try {
      const data = await getAllDepartments(token);
      setDepartments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  const openEdit = (department) => {
    setSelectedDepartment(department);
    setIsEditOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Department Management</h1>
            <p className="mt-2 text-sm text-slate-500">
              Create, edit, and manage departments for your district.
            </p>
          </div>

          <Button onClick={() => setIsCreateOpen(true)}>
            Create Department
          </Button>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <DepartmentTable
            departments={departments}
            onEdit={openEdit}
          />
        )}

        <CreateDepartmentModal
          open={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
          refresh={loadDepartments}
        />

        <EditDepartmentModal
          department={selectedDepartment}
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          refresh={loadDepartments}
        />
      </div>
    </DashboardLayout>
  );
}

export default DepartmentManagement;
