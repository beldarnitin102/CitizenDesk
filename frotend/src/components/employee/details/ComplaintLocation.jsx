import Card from "../../ui/Card";

function ComplaintLocation({ complaint }) {
  const location = complaint?.location || {};

  return (
    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Complaint Location
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">

        <div>
          <p className="text-sm text-slate-500">
            Village
          </p>

          <p className="mt-1 text-lg font-medium text-slate-800">
            {location.village || "-"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Taluka
          </p>

          <p className="mt-1 text-lg font-medium text-slate-800">
            {location.taluka || "-"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            District
          </p>

          <p className="mt-1 text-lg font-medium text-slate-800">
            {location.district || "-"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Pincode
          </p>

          <p className="mt-1 text-lg font-medium text-slate-800">
            {location.pincode || "-"}
          </p>
        </div>

      </div>

    </Card>
  );
}

export default ComplaintLocation;