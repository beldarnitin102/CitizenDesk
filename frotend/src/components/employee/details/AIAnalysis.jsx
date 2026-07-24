import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function AIAnalysis({ complaint }) {

  const ai = complaint?.aiClassification;

  return (

    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        AI Analysis
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <p className="text-sm text-slate-500">
            AI Detected Category
          </p>

          <div className="mt-2">
            <Badge>
              {ai?.detectedCategory || complaint.category}
            </Badge>
          </div>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Original Language
          </p>

          <p className="mt-2 text-lg font-medium text-slate-800">
            {complaint.originalLanguage}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            AI Confidence
          </p>

          <div className="mt-3">

            <div className="h-3 w-full rounded-full bg-slate-200">

              <div
                className="h-3 rounded-full bg-green-500"
                style={{
                  width: `${(ai?.confidence || 0) * 100}%`,
                }}
              />

            </div>

            <p className="mt-2 font-semibold text-green-600">
              {((ai?.confidence || 0) * 100).toFixed(0)}%
            </p>

          </div>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Duplicate Complaint
          </p>

          <p className="mt-2 text-lg font-medium">

            {complaint.duplicateOf
              ? "Yes"
              : "No"}

          </p>

        </div>

      </div>

    </Card>

  );

}

export default AIAnalysis;