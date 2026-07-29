import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { useAuth } from "../../context/AuthContext";

import AssignComplaintTable from "../departmentHead/complaints/AssignComplaintTable";

import {
  getDepartmentEmployees,
  getUnassignedComplaints,
} from "../../services/operations/departmentHeadAPI";

function AssignComplaint() {
  const { token } = useAuth();

  const [employees, setEmployees] = useState([]);

  const [complaints, setComplaints] = useState([]);

  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [emp, comp] = await Promise.all([
        getDepartmentEmployees(token),
        getUnassignedComplaints(token),
      ]);

      

      setEmployees(emp);

      setComplaints(comp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Assign Complaints</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <AssignComplaintTable
            complaints={complaints}
            employees={employees}
            refresh={loadData}
          />
        )}
      </div>
    </DashboardLayout>
  );
}

export default AssignComplaint;
