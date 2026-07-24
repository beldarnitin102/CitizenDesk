import { useEffect, useState } from "react";

import Card from "../../ui/Card";

import {
  getComplaintHistory,
} from "../../../services/operations/employeeAPI";

function ComplaintTimeline({
  complaintId,
}) {

  const [history, setHistory] =
    useState([]);

  useEffect(() => {

    async function loadHistory() {

      try {

        const data =
          await getComplaintHistory(
            complaintId
          );

        setHistory(data);

      } catch (error) {

        console.log(error);

      }

    }

    loadHistory();

  }, [complaintId]);

  return (

    <Card className="rounded-3xl p-6">

      <h2 className="mb-8 text-2xl font-bold">

        Complaint Timeline

      </h2>

      {history.length === 0 ? (

        <p className="text-slate-500">
          No timeline available.
        </p>

      ) : (

        <div className="space-y-8">

          {history.map((item) => (

            <div
              key={item._id}
              className="relative border-l-4 border-[#0F4C81] pl-6"
            >

              <div className="absolute -left-[10px] top-1 h-4 w-4 rounded-full bg-[#0F4C81]" />

              <h3 className="font-semibold">

                {item.previousStatus}
                {" → "}
                {item.currentStatus}

              </h3>

              <p className="mt-1 text-slate-600">

                {item.remarks || "No remarks"}

              </p>

              <p className="mt-1 text-sm text-slate-500">

                Changed By :

                {" "}

                {item.changedBy?.name}

              </p>

              <p className="text-sm text-slate-500">

                {new Date(
                  item.createdAt
                ).toLocaleString()}

              </p>

            </div>

          ))}

        </div>

      )}

    </Card>

  );

}

export default ComplaintTimeline;