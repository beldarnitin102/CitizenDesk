import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function EmployeeComplaintTable({ complaints = [] }) {
  return (
    <Card className="rounded-3xl p-6">
      <h2 className="mb-8 text-2xl font-bold">Assigned Complaints</h2>

      {(complaints?.length ?? 0) === 0 ? (
        <p>No complaints assigned.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-3">Complaint</th>

                <th>Citizen</th>

                <th>Priority</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint._id} className="border-t">
                  <td className="py-5">
                    <div>
                      <h3>{complaint.title}</h3>

                      <p className="text-sm text-slate-500">
                        {complaint.complaintNumber}
                      </p>
                    </div>
                  </td>

                  <td>{complaint.citizen?.name}</td>

                  <td>
                    <Badge>{complaint.priority}</Badge>
                  </td>

                  <td>
                    <Badge>{complaint.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}

export default EmployeeComplaintTable;
