import Card from "../../ui/Card";

function ComplaintCitizenCard({ complaint }) {
  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-xl font-bold">Citizen Details</h2>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-sm text-slate-500">Name</p>

          <p className="font-semibold">{complaint.citizen?.name}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Email</p>

          <p className="font-semibold">{complaint.citizen?.email}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Phone</p>

          <p className="font-semibold">{complaint.citizen?.phone || "-"}</p>
        </div>
      </div>
    </Card>
  );
}

export default ComplaintCitizenCard;
