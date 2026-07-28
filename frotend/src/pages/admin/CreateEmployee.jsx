import DashboardLayout from "../../components/dashboard/DashboardLayout";

import EmployeeForm from "../../components/admin/employees/EmployeeForm";

function CreateEmployee() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Create Employee</h1>

        <EmployeeForm />
      </div>
    </DashboardLayout>
  );
}

export default CreateEmployee;
