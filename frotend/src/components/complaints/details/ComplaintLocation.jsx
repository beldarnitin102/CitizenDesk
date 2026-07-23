import Card from "../../ui/Card";

function ComplaintLocation({ complaint }) {
  const location = complaint.location || {};

  return (
    <Card className="rounded-3xl p-8">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Complaint Location
        </h2>

        <p className="mt-2 text-slate-500">
          Location provided by the citizen while submitting the complaint.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Village
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {location.village || "Not Available"}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Taluka
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {location.taluka || "Not Available"}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            District
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {location.district || "Not Available"}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            State
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {location.state || "Not Available"}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Latitude
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {location.latitude || "--"}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Longitude
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {location.longitude || "--"}
          </h3>
        </div>

      </div>

    </Card>
  );
}

export default ComplaintLocation;