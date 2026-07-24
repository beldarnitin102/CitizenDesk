import { Link } from "react-router-dom";

import Badge from "../ui/Badge";
import Button from "../ui/Button";

function ComplaintRow({
  complaint,
}) {

  const priorityColor = {
    LOW: "bg-green-100 text-green-700",
    MEDIUM: "bg-yellow-100 text-yellow-700",
    HIGH: "bg-orange-100 text-orange-700",
    CRITICAL: "bg-red-100 text-red-700",
  };

  return (

    <tr className="border-t border-slate-200 hover:bg-slate-50 transition">

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

          <p className="font-medium">

            {complaint.citizen?.name}

          </p>

          <p className="text-xs text-slate-500">

            {complaint.citizen?.phone}

          </p>

        </div>

      </td>

      <td className="px-6 py-5">

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            priorityColor[complaint.priority]
          }`}
        >
          {complaint.priority}
        </span>

      </td>

      <td className="px-6 py-5">

        <Badge>

          {complaint.status}

        </Badge>

      </td>

      <td className="px-6 py-5">

        {complaint.assignedEmployee
          ? complaint.assignedEmployee.name
          : (
            <span className="text-slate-400">
              Unassigned
            </span>
          )}

      </td>

      <td className="px-6 py-5 text-sm text-slate-600">

        {new Date(
          complaint.createdAt
        ).toLocaleDateString()}

      </td>

      <td className="px-6 py-5 text-center">

        <Link
          to={`/employee/complaints/${complaint._id}`}
        >

          <Button size="sm">

            View

          </Button>

        </Link>

      </td>

    </tr>

  );

}

export default ComplaintRow;