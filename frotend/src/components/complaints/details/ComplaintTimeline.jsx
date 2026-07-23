import Card from "../../ui/Card";

const timelineSteps = [
  {
    key: "PENDING",
    title: "Complaint Submitted",
    description: "Complaint has been successfully registered.",
  },
  {
    key: "ASSIGNED",
    title: "Assigned",
    description: "Complaint assigned to the responsible department.",
  },
  {
    key: "IN_PROGRESS",
    title: "In Progress",
    description: "Department is currently resolving the issue.",
  },
  {
    key: "RESOLVED",
    title: "Resolved",
    description: "Complaint has been successfully resolved.",
  },
];

function ComplaintTimeline({ complaint }) {
  const currentStatus = complaint.status;

  const currentIndex = timelineSteps.findIndex(
    (step) => step.key === currentStatus
  );

  return (
    <Card className="rounded-3xl p-8">

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900">
          Complaint Progress
        </h2>

        <p className="mt-2 text-slate-500">
          Current lifecycle of your complaint.
        </p>
      </div>

      <div className="space-y-8">

        {timelineSteps.map((step, index) => {
          const completed = index <= currentIndex;

          return (
            <div
              key={step.key}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${
                    completed
                      ? "bg-green-600"
                      : "bg-slate-300"
                  }`}
                >
                  {completed ? "✓" : index + 1}
                </div>

                {index !== timelineSteps.length - 1 && (
                  <div
                    className={`mt-2 h-16 w-1 rounded-full ${
                      completed
                        ? "bg-green-600"
                        : "bg-slate-300"
                    }`}
                  />
                )}
              </div>

              <div className="pb-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </Card>
  );
}

export default ComplaintTimeline;