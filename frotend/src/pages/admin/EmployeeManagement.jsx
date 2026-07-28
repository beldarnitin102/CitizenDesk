import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { useAuth } from "../../context/AuthContext";

import EmployeeFilters from "../../components/admin/employees/EmployeeFilters";
import EmployeeTable from "../../components/admin/employees/EmployeeTable";

import { getAllEmployees } from "../../services/operations/adminAPI";

function EmployeeManagement() {
  const { token } = useAuth();

  const [employees, setEmployees] = useState([]);

  const [filters, setFilters] = useState({});

  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    try {
      const data = await getAllEmployees(token);

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
        <h1 className="text-3xl font-bold">Employee Management</h1>

        <EmployeeFilters onChange={setFilters} />

        <EmployeeTable
          employees={employees}
          filters={filters}
          refresh={loadEmployees}
        />
      </div>
    </DashboardLayout>
  );
}

export default EmployeeManagement;
