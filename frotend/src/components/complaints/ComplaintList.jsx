import ComplaintCard from "./ComplaintCard";

function ComplaintList({ complaints }) {
  if (!complaints.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-4xl">
          📄
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          No Complaints Found
        </h2>

        <p className="mt-3 text-slate-600">
          You haven't submitted any complaints yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3">
      {complaints.map((complaint) => (
        <ComplaintCard
          key={complaint._id}
          complaint={complaint}
        />
      ))}
    </div>
  );
}

export default ComplaintList;