import { useEffect, useState } from "react";

import DashboardLayout from "../DashboardLayout";

import { useAuth } from "../../../context/AuthContext";

import ComplaintFilters from "../../../components/departmentHead/complaints/ComplaintFilters";
import ComplaintTable from "../../../components/departmentHead/complaints/ComplaintTable";

import {
  getDepartmentComplaints,
} from "../../../services/operations/departmentHeadAPI";

function ComplaintManagement() {

  const { token } = useAuth();

  const [complaints, setComplaints] = useState([]);

  const [filters, setFilters] = useState({});

  const loadComplaints = async () => {

    try {

      const data = await getDepartmentComplaints(
        token,
        filters
      );

      setComplaints(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadComplaints();
  }, [filters]);

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <h1 className="text-3xl font-bold">
          Complaint Management
        </h1>

        <ComplaintFilters
          onChange={setFilters}
        />

        <ComplaintTable
          complaints={complaints}
        />

      </div>

    </DashboardLayout>
  );
}

export default ComplaintManagement;