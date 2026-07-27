import Card from "../../ui/Card";

function ComplaintLocationCard({ complaint }) {
  const location = complaint.location;

  return (
    <Card className="rounded-3xl p-6">
      <h2 className="mb-6 text-2xl font-bold">Location Details</h2>

      <div className="space-y-5">
        <div>
          <p className="text-sm text-slate-500">Village</p>

          <p className="font-semibold">{location?.village || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Taluka</p>

          <p>{location?.taluka || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">District</p>

          <p>{location?.district || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">State</p>

          <p>{location?.state || "-"}</p>
        </div>
      </div>
    </Card>
  );
}

export default ComplaintLocationCard;
