import Button from "../../ui/Button";

function ComplaintActions({ complaint, onRefresh }) {
  const handleRefresh = async () => {
    if (onRefresh) {
      await onRefresh();
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Actions</h2>

      <p className="mb-6 text-slate-600">
        Use this section to refresh complaint details or perform future actions.
      </p>

      <Button onClick={handleRefresh}>Refresh Complaint</Button>
    </div>
  );
}

export default ComplaintActions;
