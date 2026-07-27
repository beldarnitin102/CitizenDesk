import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { useAuth } from "../../context/AuthContext";

import { getDepartmentEmployees } from "../../services/operations/departmentHeadAPI";

import EmployeeCard from "../../components/departmentHead/employees/EmployeeCard";
import EmployeeStats from "../../components/departmentHead/employees/EmployeeStats";

function EmployeeList() {
  const { token } = useAuth();

  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    setLoading(true);

    try {
      const data = await getDepartmentEmployees(token);

      setEmployees(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <div className="text-center py-20">Loading Employees...</div>
      ) : (
        <div className="space-y-8">
          <EmployeeStats employees={employees} />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {employees.map((employee) => (
              <EmployeeCard key={employee._id} employee={employee} />
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default EmployeeList;
