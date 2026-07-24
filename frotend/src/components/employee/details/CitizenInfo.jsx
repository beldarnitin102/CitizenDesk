import Card from "../../ui/Card";

function CitizenInfo({ complaint }) {
  const citizen = complaint?.citizen;

  return (
    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Citizen Information
      </h2>

      <div className="space-y-5">

        <div>
          <p className="text-sm text-slate-500">
            Full Name
          </p>

          <p className="mt-1 text-lg font-semibold text-slate-800">
            {citizen?.name || "-"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Email Address
          </p>

          <p className="mt-1 text-lg text-slate-800">
            {citizen?.email || "-"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Mobile Number
          </p>

          <p className="mt-1 text-lg text-slate-800">
            {citizen?.phone || "-"}
          </p>
        </div>

      </div>

    </Card>
  );
}

export default CitizenInfo;