import { useMemo } from "react";

import ComplaintCard from "./ComplaintCard";

function ComplaintTable({ complaints, filters, refresh }) {
  const filteredComplaints = useMemo(() => {
    let data = [...complaints];

    if (filters.search) {
      const keyword = filters.search.toLowerCase();

      data = data.filter(
        (complaint) =>
          complaint.title?.toLowerCase().includes(keyword) ||
          complaint.complaintNumber?.toLowerCase().includes(keyword) ||
          complaint.citizen?.name?.toLowerCase().includes(keyword),
      );
    }

    if (filters.status) {
      data = data.filter((complaint) => complaint.status === filters.status);
    }

    if (filters.priority) {
      data = data.filter(
        (complaint) => complaint.priority === filters.priority,
      );
    }

    if (filters.department) {
      data = data.filter(
        (complaint) => complaint.department?._id === filters.department,
      );
    }

    return data;
  }, [complaints, filters]);

  if (filteredComplaints.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-12 text-center shadow">
        No Complaints Found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {filteredComplaints.map((complaint) => (
        <ComplaintCard
          key={complaint._id}
          complaint={complaint}
          refresh={refresh}
        />
      ))}
    </div>
  );
}

export default ComplaintTable;
