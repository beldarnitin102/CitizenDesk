import Badge from "../../ui/Badge";
import Card from "../../ui/Card";

function ComplaintHeader({
  complaint,
}) {

  const priorityColor = {

    LOW: "bg-green-100 text-green-700",

    MEDIUM:
      "bg-yellow-100 text-yellow-700",

    HIGH: "bg-orange-100 text-orange-700",

    CRITICAL:
      "bg-red-100 text-red-700",

  };

  return (

    <Card className="rounded-3xl p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm text-slate-500">

            Complaint Number

          </p>

          <h1 className="mt-2 text-3xl font-bold">

            {complaint.complaintNumber}

          </h1>

          <p className="mt-3 text-lg text-slate-700">

            {complaint.title}

          </p>

        </div>

        <div className="flex flex-wrap items-center gap-3">

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              priorityColor[
                complaint.priority
              ]
            }`}
          >
            {complaint.priority}
          </span>

          <Badge>

            {complaint.status}

          </Badge>

          {complaint.department && (
            <Badge>

              {complaint.department.name}

            </Badge>
          )}

        </div>

      </div>

    </Card>

  );

}

export default ComplaintHeader;