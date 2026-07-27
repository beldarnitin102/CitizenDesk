import Card from "../../ui/Card";

function ComplaintHistoryCard({ complaint }) {
  const history = complaint.statusHistory || [];

  return (
    <Card className="rounded-3xl p-8">
      <h2 className="mb-8 text-2xl font-bold">Complaint Timeline</h2>

      {history.length === 0 ? (
        <p className="text-slate-500">No history available.</p>
      ) : (
        <div className="space-y-8">
          {history.map((item) => (
            <div
              key={item._id}
              className="relative border-l-4 border-[#0F4C81] pl-6"
            >
              <div className="absolute -left-[10px] top-1 h-4 w-4 rounded-full bg-[#0F4C81]" />

              <h3 className="font-semibold">
                {item.previousStatus}

                {" → "}

                {item.currentStatus}
              </h3>

              <p className="mt-2 text-slate-600">
                {item.remarks || "No Remarks"}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Changed By : {item.changedBy?.name || "-"}
              </p>

              <p className="text-sm text-slate-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default ComplaintHistoryCard;
