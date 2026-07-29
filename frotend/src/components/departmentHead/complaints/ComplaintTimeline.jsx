import Card from "../../ui/Card";

function ComplaintTimeline({ timeline = [] }) {
  return (
    <Card className="rounded-3xl p-6">
      <h2 className="mb-6 text-2xl font-bold">Complaint Timeline</h2>

      {timeline.length === 0 ? (
        <p className="text-slate-500">No timeline entries available.</p>
      ) : (
        <div className="space-y-6">
          {timeline.map((entry) => (
            <div
              key={entry._id}
              className="rounded-3xl border border-slate-200 p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-900">
                  {entry.previousStatus} → {entry.currentStatus}
                </p>
                <p className="text-sm text-slate-500">
                  {new Date(entry.createdAt).toLocaleString()}
                </p>
              </div>
              <p className="mt-3 text-slate-600">{entry.remarks || "No remarks."}</p>
              <p className="mt-2 text-sm text-slate-500">
                Changed by: {entry.changedBy?.name || "Unknown"}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default ComplaintTimeline;
