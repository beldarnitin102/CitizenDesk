import Input from "../ui/Input";

function ComplaintSearch({
  value,
  onChange,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <Input
        placeholder="Search by Complaint ID, Title or Citizen..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default ComplaintSearch;