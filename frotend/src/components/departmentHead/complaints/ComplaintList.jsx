import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useAuth } from "../../../context/AuthContext";

import ComplaintFilters from "./ComplaintFilters";
import ComplaintTable from "./ComplaintTable";

import { getDepartmentComplaints } from "../../../services/operations/departmentHeadAPI";

function ComplaintList() {

  const { token } = useAuth();

  const [loading, setLoading] = useState(true);

  const [complaints, setComplaints] = useState([]);

  const [pagination, setPagination] = useState({});

  const [filters, setFilters] = useState({

    search: "",

    status: "",

    priority: "",

    page: 1,

    limit: 10,

  });

  const fetchComplaints = async () => {

    setLoading(true);

    try {

      const data = await getDepartmentComplaints(
        token,
        filters
      );

      setComplaints(data.complaints);

      setPagination(data.pagination);

    } catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Unable to load complaints"

      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchComplaints();

  }, [filters]);

  return (

    <div className="space-y-8">

      <ComplaintFilters

        filters={filters}

        setFilters={setFilters}

      />

      <ComplaintTable

        complaints={complaints}

        loading={loading}

        pagination={pagination}

        filters={filters}

        setFilters={setFilters}

      />

    </div>

  );

}

export default ComplaintList;