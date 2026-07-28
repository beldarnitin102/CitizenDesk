import Card from "../../ui/Card";

function ComplaintHistoryCard({ complaint }) {
  const history = complaint.statusLogs || [];

  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-2xl font-bold">Complaint History</h2>

      {history.length === 0 ? (
        <div className="mt-6 rounded-xl bg-slate-50 p-8 text-center text-slate-500">
          No history available.
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {history.map((item) => (
            <div
              key={item._id}
              className="rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">
                    {item.previousStatus}
                    {" → "}
                    {item.currentStatus}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-medium">{item.changedBy?.name || "-"}</p>
                </div>
              </div>

              {item.remarks && (
                <p className="mt-4 text-slate-600">{item.remarks}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default ComplaintHistoryCard;
