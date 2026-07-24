import { Link } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

function RecentComplaints({ dashboard }) {

  if (!dashboard) return null;

  return (

    <Card className="rounded-3xl p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            Recent Complaints

          </h2>

          <p className="text-slate-500">

            Latest complaints received in your department

          </p>

        </div>

        <Link to="/employee/complaints">

          <Button variant="outline">

            View All

          </Button>

        </Link>

      </div>

      <div className="space-y-5">

        {dashboard.recentComplaints.map((complaint) => (

          <div
            key={complaint._id}
            className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md"
          >

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h3 className="text-lg font-semibold">

                  {complaint.title}

                </h3>

                <p className="mt-2 text-sm text-slate-500">

                  Complaint ID :
                  {" "}
                  {complaint.complaintNumber}

                </p>

                <p className="text-sm text-slate-500">

                  Citizen :
                  {" "}
                  {complaint.citizen?.name}

                </p>

              </div>

              <div className="flex items-center gap-4">

                <Badge>

                  {complaint.priority}

                </Badge>

                <Badge>

                  {complaint.status}

                </Badge>

                <Link
                  to={`/employee/complaints/${complaint._id}`}
                >

                  <Button>

                    View

                  </Button>

                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </Card>

  );

}

export default RecentComplaints;