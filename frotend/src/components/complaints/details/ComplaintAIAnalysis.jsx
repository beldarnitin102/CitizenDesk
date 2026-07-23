import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function ComplaintAIAnalysis({ complaint }) {
  const ai = complaint.aiClassification || {};

  return (
    <Card className="overflow-hidden rounded-3xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-7 text-white">

        <h2 className="text-2xl font-bold">
          AI Analysis
        </h2>

        <p className="mt-2 text-blue-100">
          Automatically generated using AI after complaint submission.
        </p>

      </div>

      {/* Body */}

      <div className="p-8">

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl bg-blue-50 p-6">

            <p className="text-sm text-slate-500">
              Detected Category
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#0F4C81]">
              {ai.detectedCategory || complaint.category}
            </h3>

          </div>

          <div className="rounded-2xl bg-green-50 p-6">

            <p className="text-sm text-slate-500">
              AI Confidence
            </p>

            <h3 className="mt-2 text-xl font-bold text-green-700">
              {ai.confidence
                ? `${Math.round(ai.confidence * 100)}%`
                : "N/A"}
            </h3>

          </div>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div>

            <p className="text-sm text-slate-500">
              Predicted Department
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              {complaint.department?.name || "Pending Assignment"}
            </h3>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Priority Predicted
            </p>

            <Badge variant="warning">
              {complaint.priority}
            </Badge>

          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">

          <h4 className="font-semibold text-[#0F4C81]">
            AI Summary
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            The AI analyzed the complaint description
            and any uploaded images, identified the
            complaint category, estimated its priority,
            and suggested the most appropriate government
            department for handling the issue.
          </p>

        </div>

      </div>

    </Card>
  );
}

export default ComplaintAIAnalysis;