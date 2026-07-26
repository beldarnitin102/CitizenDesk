import Card from "../../ui/Card";

function CitizenCard({

  citizen,

  location,

}) {

  return (

    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold">

        Citizen Information

      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <h3 className="font-semibold">

            Name

          </h3>

          <p>

            {citizen?.name}

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Email

          </h3>

          <p>

            {citizen?.email}

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Phone

          </h3>

          <p>

            {citizen?.phone}

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Village

          </h3>

          <p>

            {location?.village}

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Taluka

          </h3>

          <p>

            {location?.taluka}

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            District

          </h3>

          <p>

            {location?.district}

          </p>

        </div>

      </div>

    </Card>

  );

}

export default CitizenCard;