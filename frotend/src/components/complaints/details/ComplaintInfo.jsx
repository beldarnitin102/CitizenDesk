import Card from "../../ui/Card";

function ComplaintInfo({ complaint }) {
  return (
    <Card className="rounded-3xl p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Complaint Information
        </h2>

        <p className="mt-2 text-slate-500">
          General information submitted by the citizen.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Description
          </p>

          <p className="mt-3 leading-8 text-slate-700">
            {complaint.description}
          </p>

        </div>

        <div className="space-y-6">

          <div className="flex justify-between border-b border-slate-100 pb-4">
            <span className="text-slate-500">
              Category
            </span>

            <span className="font-semibold text-slate-900">
              {complaint.category}
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-4">
            <span className="text-slate-500">
              Priority
            </span>

            <span className="font-semibold text-slate-900">
              {complaint.priority}
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-4">
            <span className="text-slate-500">
              Department
            </span>

            <span className="font-semibold text-slate-900">
              {complaint.department?.name || "Not Assigned"}
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-4">
            <span className="text-slate-500">
              Submitted On
            </span>

            <span className="font-semibold text-slate-900">
              {new Date(
                complaint.createdAt
              ).toLocaleDateString()}
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-4">
            <span className="text-slate-500">
              Language
            </span>

            <span className="font-semibold text-slate-900">
              {complaint.originalLanguage || "English"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">
              Complaint ID
            </span>

            <span className="font-semibold text-slate-900">
              {complaint._id}
            </span>
          </div>

        </div>

      </div>

    </Card>
  );
}

export default ComplaintInfo;