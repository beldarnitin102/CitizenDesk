import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function ComplaintInfoCard({ complaint }) {

  return (

    <Card className="rounded-3xl p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            {complaint.title}

          </h2>

          <p className="mt-2 text-slate-500">

            {complaint.complaintNumber}

          </p>

        </div>

        <Badge>

          {complaint.status}

        </Badge>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>

          <h3 className="font-semibold">

            Description

          </h3>

          <p className="mt-2 text-slate-600">

            {complaint.description}

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Category

          </h3>

          <p className="mt-2">

            {complaint.category}

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Priority

          </h3>

          <Badge>

            {complaint.priority}

          </Badge>

        </div>

        <div>

          <h3 className="font-semibold">

            Department

          </h3>

          <p>

            {complaint.department?.name}

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Assigned Employee

          </h3>

          <p>

            {

              complaint.assignedEmployee?.name ||

              "Not Assigned"

            }

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Created

          </h3>

          <p>

            {

              new Date(

                complaint.createdAt

              ).toLocaleString()

            }

          </p>

        </div>

      </div>

      {

        complaint.attachments?.length > 0 && (

          <div className="mt-10">

            <h3 className="mb-4 font-semibold">

              Attachments

            </h3>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

              {

                complaint.attachments.map(

                  (image, index) => (

                    <img

                      key={index}

                      src={image}

                      alt="attachment"

                      className="h-40 w-full rounded-xl object-cover"

                    />

                  )

                )

              }

            </div>

          </div>

        )

      }

    </Card>

  );

}

export default ComplaintInfoCard;