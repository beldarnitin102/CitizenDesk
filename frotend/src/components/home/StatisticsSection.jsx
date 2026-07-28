import { useEffect, useState } from "react";

import StatCard from "./StatCard";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

import { getHeroStatistics } from "../../services/operations/heroAPI";

function StatisticsSection() {

  const [statistics, setStatistics] = useState([]);

  const [loading, setLoading] = useState(true);

  const loadStatistics = async () => {

    try {

      const data = await getHeroStatistics();

      setStatistics([
        {
          id: 1,
          title: "Total Complaints",
          value: data.totalComplaints,
          subtitle: "Registered Complaints",
          icon: "📋",
          color: "blue",
        },
        {
          id: 2,
          title: "Pending",
          value: data.pendingComplaints,
          subtitle: "Awaiting Action",
          icon: "⏳",
          color: "orange",
        },
        {
          id: 3,
          title: "In Progress",
          value: data.inProgressComplaints,
          subtitle: "Currently Processing",
          icon: "🔄",
          color: "purple",
        },
        {
          id: 4,
          title: "Resolved",
          value: data.resolvedComplaints,
          subtitle: "Successfully Resolved",
          icon: "✅",
          color: "green",
        },
        {
          id: 5,
          title: "Departments",
          value: data.totalDepartments,
          subtitle: "Government Departments",
          icon: "🏛️",
          color: "cyan",
        },
      ]);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadStatistics();

  }, []);

  return (
    <Section className="-mt-20 relative z-20 pb-8">

      <SectionTitle badge="Statistics" />

      {loading ? (

        <div className="py-16 text-center text-slate-500">
          Loading Statistics...
        </div>

      ) : (

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">

          {statistics.map((item) => (

            <StatCard
              key={item.id}
              title={item.title}
              value={item.value}
              subtitle={item.subtitle}
              icon={item.icon}
              color={item.color}
            />

          ))}

        </div>

      )}

    </Section>
  );

}

export default StatisticsSection;