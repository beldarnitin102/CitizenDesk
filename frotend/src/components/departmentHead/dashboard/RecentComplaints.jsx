import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function RecentComplaints({ complaints }) {

  return (

    <Card className="rounded-3xl p-6">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Recent Complaints

        </h2>

        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">

          {complaints.length} Complaints

        </span>

      </div>

      {complaints.length === 0 ? (

        <div className="py-10 text-center text-slate-500">

          No recent complaints found.

        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200">

                <th className="px-4 py-4 text-left">
                  Complaint
                </th>

                <th className="px-4 py-4 text-left">
                  Citizen
                </th>

                <th className="px-4 py-4 text-center">
                  Priority
                </th>

                <th className="px-4 py-4 text-center">
                  Status
                </th>

                <th className="px-4 py-4 text-left">
                  Assigned To
                </th>

                <th className="px-4 py-4 text-center">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {complaints.map((complaint) => (

                <tr
                  key={complaint._id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >

                  <td className="px-4 py-5">

                    <div>

                      <h3 className="font-semibold">

                        {complaint.title}

                      </h3>

                      <p className="text-sm text-slate-500">

                        {complaint.complaintNumber}

                      </p>

                    </div>

                  </td>

                  <td className="px-4 py-5">

                    {complaint.citizen?.name || "-"}

                  </td>

                  <td className="px-4 py-5 text-center">

                    <Badge>

                      {complaint.priority}

                    </Badge>

                  </td>

                  <td className="px-4 py-5 text-center">

                    <Badge>

                      {complaint.status}

                    </Badge>

                  </td>

                  <td className="px-4 py-5">

                    {complaint.assignedEmployee?.name || "Not Assigned"}

                  </td>

                  <td className="px-4 py-5 text-center text-sm text-slate-500">

                    {new Date(
                      complaint.createdAt
                    ).toLocaleDateString()}

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

export default RecentComplaints;