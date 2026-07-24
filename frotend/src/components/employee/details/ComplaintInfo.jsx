import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function ComplaintInfo({ complaint }) {

  return (

    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Complaint Information
      </h2>

      <div className="space-y-5">

        <div>

          <p className="text-sm text-slate-500">
            Complaint Title
          </p>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            {complaint.title}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Description
          </p>

          <p className="mt-1 whitespace-pre-wrap leading-7 text-slate-700">
            {complaint.description}
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <p className="text-sm text-slate-500">
              Category
            </p>

            <p className="mt-1 text-lg text-slate-800">
              {complaint.category}
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Original Language
            </p>

            <p className="mt-1 text-lg text-slate-800">
              {complaint.originalLanguage}
            </p>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <p className="text-sm text-slate-500">
              Priority
            </p>

            <div className="mt-2">

              <Badge>

                {complaint.priority}

              </Badge>

            </div>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Current Status
            </p>

            <div className="mt-2">

              <Badge>

                {complaint.status}

              </Badge>

            </div>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <p className="text-sm text-slate-500">
              Complaint Number
            </p>

            <p className="mt-1 font-medium text-slate-800">
              {complaint.complaintNumber}
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Submitted On
            </p>

            <p className="mt-1 font-medium text-slate-800">
              {new Date(
                complaint.createdAt
              ).toLocaleString()}
            </p>

          </div>

        </div>

      </div>

    </Card>

  );

}

export default ComplaintInfo;