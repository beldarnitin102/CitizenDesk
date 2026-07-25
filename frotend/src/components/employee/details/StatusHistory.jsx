import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

import {
  getComplaintHistory,
} from "../../../services/operations/employeeAPI";

function StatusHistory({ complaintId, refreshKey = 0 }) {
  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(true);

  const { token } = useAuth();

  useEffect(() => {
    async function fetchHistory() {
      try {
        const data = await getComplaintHistory(
          complaintId,
          token
        );

        setHistory(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, [complaintId, refreshKey,token]);

  if (loading) {
    return (
      <Card className="rounded-3xl p-6">
        Loading history...
      </Card>
    );
  }

  return (
    <Card className="rounded-3xl p-6">

      <h2 className="mb-8 text-2xl font-bold">
        Status History
      </h2>

      {history.length === 0 ? (
        <p className="text-slate-500">
          No status history available.
        </p>
      ) : (
        <div className="space-y-6">

          {history.map((item) => (

            <div
              key={item._id}
              className="rounded-2xl border border-slate-200 p-5"
            >

              <div className="flex flex-wrap items-center gap-3">

                <Badge>

                  {item.previousStatus}

                </Badge>

                <span>→</span>

                <Badge>

                  {item.currentStatus}

                </Badge>

              </div>

              <p className="mt-4 text-slate-700">

                {item.remarks || "No remarks"}

              </p>

              <div className="mt-4 text-sm text-slate-500">

                <p>

                  Changed By :
                  {" "}
                  {item.changedBy?.name}

                </p>

                <p>

                  {new Date(
                    item.createdAt
                  ).toLocaleString()}

                </p>

              </div>

            </div>

          ))}

        </div>
      )}

    </Card>
  );
}

export default StatusHistory;