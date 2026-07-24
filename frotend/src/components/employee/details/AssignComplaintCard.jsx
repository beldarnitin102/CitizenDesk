import Button from "../../ui/Button";
import Card from "../../ui/Card";

import { assignComplaint } from "../../../services/operations/employeeAPI";

function AssignComplaintCard({ complaint, onRefresh }) {
  const [loading, setLoading] = useState(false);

  const handleAssign = async () => {
    setLoading(true);

    try {
      await assignComplaint(complaint._id);

      onRefresh?.();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-3xl p-6">
      <h2 className="text-2xl font-bold">Assign Complaint</h2>

      <p className="mt-4 text-slate-600">
        Assign this complaint to yourself before starting work.
      </p>

      <div className="mt-8">
        {complaint.assignedEmployee ? (
          <div className="rounded-xl bg-green-100 p-4 text-center font-semibold text-green-700">
            Assigned to {complaint.assignedEmployee.name}
          </div>
        ) : (
          <Button onClick={handleAssign} disabled={loading} className="w-full">
            {loading ? "Assigning..." : "Assign To Me"}
          </Button>
        )}
      </div>
    </Card>
  );
}

export default AssignComplaintCard;
