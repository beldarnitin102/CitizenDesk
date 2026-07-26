import Card from "../../ui/Card";

function DepartmentPerformance({
  resolutionRate,
  complaintsByPriority,
}) {
  return (
    <Card className="rounded-3xl p-6">

      <h2 className="text-2xl font-bold">
        Department Performance
      </h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        {/* Resolution Rate */}

        <div>

          <p className="text-sm font-medium text-slate-500">
            Resolution Rate
          </p>

          <h3 className="mt-2 text-5xl font-bold text-green-600">
            {resolutionRate}%
          </h3>

        </div>

        {/* Priority Distribution */}

        <div>

          <p className="mb-4 text-sm font-medium text-slate-500">
            Complaints by Priority
          </p>

          <div className="space-y-4">

            {complaintsByPriority.length === 0 ? (

              <p className="text-slate-500">
                No complaints available.
              </p>

            ) : (

              complaintsByPriority.map((item) => (

                <div
                  key={item._id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-3"
                >

                  <span className="font-medium">

                    {item._id}

                  </span>

                  <span className="rounded-full bg-[#0F4C81]/10 px-4 py-1 font-semibold text-[#0F4C81]">

                    {item.count}

                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </Card>
  );
}

export default DepartmentPerformance;