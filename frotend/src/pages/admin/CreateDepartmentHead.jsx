import DashboardLayout from "../../components/dashboard/DashboardLayout";

import DepartmentHeadForm from "../../components/admin/employees/DepartmentHeadForm";

function CreateDepartmentHead() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Create Department Head</h1>

        <DepartmentHeadForm />
      </div>
    </DashboardLayout>
  );
}

export default CreateDepartmentHead;
