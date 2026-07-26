import Card from "../../ui/Card";
import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/department-head/employees/${employee._id}`)}
      className="rounded-3xl p-6"
    >
      <h2 className="text-xl font-bold">{employee.name}</h2>

      <p className="mt-2 text-slate-500">{employee.email}</p>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span>Total Assigned</span>

          <strong>{employee.stats.totalAssigned}</strong>
        </div>

        <div className="flex justify-between">
          <span>Resolved</span>

          <strong className="text-green-600">{employee.stats.resolved}</strong>
        </div>

        <div className="flex justify-between">
          <span>In Progress</span>

          <strong className="text-orange-600">
            {employee.stats.inProgress}
          </strong>
        </div>

        <div className="flex justify-between">
          <span>Pending</span>

          <strong className="text-red-500">{employee.stats.pending}</strong>
        </div>
      </div>
    </Card>
  );
}

export default EmployeeCard;
