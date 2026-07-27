import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import EmployeeComplaintTable from "../../components/departmentHead/employees/EmployeeComplaintTable";

import { getDepartmentEmployees } from "../../services/operations/departmentHeadAPI";

function DepartmentEmployees() {
  const { token } = useAuth();

  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    try {
      const data = await getDepartmentEmployees(token);
      setEmployees(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Department Employees</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <EmployeeComplaintTable employees={employees} />
        )}
      </div>
    </DashboardLayout>
  );
}

export default DepartmentEmployees;
