import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function ProfileCard({ user }) {
  const isCitizen = user?.role === "CITIZEN";

  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero Card */}

      <Card className="overflow-hidden rounded-3xl">
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#2563EB] p-10 text-white">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl font-bold text-[#0F4C81] shadow-lg">
                {user?.name?.charAt(0)?.toUpperCase()}
              </div>

              <div>
                <h1 className="text-4xl font-bold">{user?.name}</h1>

                <p className="mt-2 text-blue-100">
                  {isCitizen
                    ? "Citizen Account"
                    : user?.role === "EMPLOYEE"
                      ? "Employee Account"
                      : user?.role === "DEPARTMENT_HEAD"
                        ? "Department Head"
                        : "Administrator"}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Badge variant="success">{user?.role}</Badge>

                  <Badge variant={user?.isVerified ? "success" : "warning"}>
                    {user?.isVerified ? "Verified" : "Not Verified"}
                  </Badge>
                </div>
              </div>
            </div>

            <Button variant="secondary" disabled>
              Edit Profile
              <span className="ml-2 text-xs">(Coming Soon)</span>
            </Button>
          </div>
        </div>
      </Card>

      {/* Information */}

      <Card className="mt-8 rounded-3xl p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Personal Information
          </h2>

          <p className="mt-2 text-slate-500">
            Your registered account information.
          </p>
        </div>

        <div
          className={`grid gap-6 ${
            isCitizen ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Full Name</p>

            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              {user?.name}
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Email Address</p>

            <h3 className="mt-2 break-all text-xl font-semibold text-slate-900">
              {user?.email}
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Mobile Number</p>

            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              {user?.phone || "Not Provided"}
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Role</p>

            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              {user?.role}
            </h3>
          </div>

          {/* Show only for Employee / Department Head */}

          {!isCitizen && (
            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm text-slate-500">Department</p>

              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {user?.department?.name || "Not Assigned"}
              </h3>
            </div>
          )}

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Account Status</p>

            <h3 className="mt-2 text-xl font-semibold text-green-600">
              Active
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProfileCard;
