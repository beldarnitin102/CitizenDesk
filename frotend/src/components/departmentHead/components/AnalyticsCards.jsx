import Card from "../../ui/Card";

function AnalyticsCards({ analytics }) {

  const cards=[

      {
          title:"Total Complaints",
          value:analytics.totalComplaints
      },

      {
          title:"Resolution Rate",
          value:`${analytics.resolutionRate}%`
      },

      {
          title:"Average Resolution",
          value:`${analytics.averageResolutionDays} Days`
      },

      {
          title:"Active Employees",
          value:analytics.totalEmployees
      }

  ];

  return(

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {cards.map((item,index)=>(

              <Card
                  key={index}
                  className="rounded-3xl p-6"
              >

                  <p className="text-slate-500">

                      {item.title}

                  </p>

                  <h2 className="mt-3 text-3xl font-bold">

                      {item.value}

                  </h2>

              </Card>

          ))}

      </div>

  )

}

export default AnalyticsCards;