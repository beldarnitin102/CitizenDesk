import Card from "../../ui/Card";

function ComplaintCitizenCard({ complaint }) {

  const citizen = complaint.citizen;

  return (
    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Citizen Details
      </h2>

      <div className="space-y-5">

        <div>

          <p className="text-sm text-slate-500">
            Name
          </p>

          <p className="font-semibold">
            {citizen?.name}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Email
          </p>

          <p>
            {citizen?.email}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Phone
          </p>

          <p>
            {citizen?.phone || "-"}
          </p>

        </div>

      </div>

    </Card>
  );
}

export default ComplaintCitizenCard;