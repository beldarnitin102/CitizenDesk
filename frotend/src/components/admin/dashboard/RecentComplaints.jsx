import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function RecentComplaints({ complaints }) {
  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-8">Recent Complaints</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-4 text-left">Complaint</th>

              <th className="text-left">Citizen</th>

              <th className="text-left">Department</th>

              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.slice(0, 5).map((item) => (
              <tr key={item._id} className="border-b">
                <td className="py-5">{item.title}</td>

                <td>{item.citizen?.name}</td>

                <td>{item.department?.name}</td>

                <td>
                  <Badge>{item.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default RecentComplaints;
