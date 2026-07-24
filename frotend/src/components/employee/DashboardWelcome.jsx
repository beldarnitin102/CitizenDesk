import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

function DashboardWelcome({ dashboard }) {
  if (!dashboard) return null;

  return (
    <Card className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F4C81] to-[#2563EB] p-8 text-white">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <Badge className="bg-white/20 text-white">Employee Portal</Badge>

          <h1 className="mt-4 text-4xl font-bold">Welcome {user?.name} 👋</h1>

          <p className="mt-3 max-w-2xl text-blue-100">
            Department :{" "}
            <span className="font-semibold">{dashboard.department?.name}</span>
          </p>

          <p className="mt-2 text-blue-100">
            Manage complaints assigned to your department, update complaint
            status and improve citizen services.
          </p>
        </div>

        <Link to="/employee/complaints">
          <Button>View Department Complaints</Button>
        </Link>
      </div>
    </Card>
  );
}

export default DashboardWelcome;
