import StatCard from "./StatCard";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function StatisticsSection() {
  // Temporary data
  // Later replace this with API response

  const statistics = [
    {
      id: 1,
      title: "Total Complaints",
      value: "12,458",
      subtitle: "+18.5% this month",
      icon: "📋",
      color: "blue",
    },
    {
      id: 2,
      title: "Pending",
      value: "2,354",
      subtitle: "Awaiting Action",
      icon: "⏳",
      color: "orange",
    },
    {
      id: 3,
      title: "In Progress",
      value: "3,128",
      subtitle: "Under Review",
      icon: "🔄",
      color: "purple",
    },
    {
      id: 4,
      title: "Resolved",
      value: "6,976",
      subtitle: "Successfully Resolved",
      icon: "✅",
      color: "green",
    },
    {
      id: 5,
      title: "Departments",
      value: "18",
      subtitle: "Active Departments",
      icon: "🏛️",
      color: "cyan",
    },
  ];

  return (
    <Section className="-mt-20 relative z-20 pb-8">
      <SectionTitle badge="Statistics" />

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
    </Section>
  );
}

export default StatisticsSection;
