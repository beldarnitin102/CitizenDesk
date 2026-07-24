import ComplaintRow from "./ComplaintRow";

function ComplaintTable({
  complaints,
  loading,
}) {
  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        <p className="text-slate-500">
          Loading complaints...
        </p>
      </div>
    );
  }

  if (!complaints.length) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        <p className="text-slate-500">
          No complaints found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Complaint No
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Title
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Citizen
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Priority
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Assigned
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Created
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {complaints.map((complaint) => (

              <ComplaintRow
                key={complaint._id}
                complaint={complaint}
              />

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ComplaintTable;