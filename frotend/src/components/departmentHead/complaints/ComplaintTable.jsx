import { Link } from "react-router-dom";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

function ComplaintTable({ complaints = [], loading }) {
  // Normalize complaints to an array in case callers pass an object
  const items = Array.isArray(complaints)
    ? complaints
    : (complaints?.complaints ?? complaints?.data ?? []);

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        <p className="text-slate-500">Loading complaints...</p>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        <p className="text-slate-500">No complaints found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Complaint No
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Citizen
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Priority
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Assigned
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Created
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((complaint) => (
              <tr
                key={complaint._id}
                className="border-t border-slate-200 hover:bg-slate-50 transition"
              >
                <td className="px-6 py-5 text-sm font-medium text-slate-700">
                  {complaint.complaintNumber}
                </td>

                <td className="px-6 py-5">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {complaint.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {complaint.category}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div>
                    <p className="font-medium">{complaint.citizen?.name}</p>
                    <p className="text-xs text-slate-500">
                      {complaint.citizen?.phone}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold`}
                  >
                    {complaint.priority}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <Badge>{complaint.status}</Badge>
                </td>

                <td className="px-6 py-5">
                  {complaint.assignedEmployee ? (
                    complaint.assignedEmployee.name
                  ) : (
                    <span className="text-slate-400">Unassigned</span>
                  )}
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {complaint.createdAt
                    ? new Date(complaint.createdAt).toLocaleDateString()
                    : "-"}
                </td>

                <td className="px-6 py-5 text-center">
                  <Link to={`/department-head/complaints/${complaint._id}`}>
                    <Button size="sm">View</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintTable;
