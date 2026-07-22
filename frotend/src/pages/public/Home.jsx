import Footer from "../../components/common/Footer";
import Hero from "../../components/hero/Hero";
import AIFeaturesSection from "../../components/home/AIFeaturesSection";
import DepartmentsSection from "../../components/home/DepartmentsSection";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import StatisticsSection from "../../components/home/StatisticsSection";

function Home() {
  return (
    <>
      <Hero />
      <StatisticsSection />
      <HowItWorksSection />
      <AIFeaturesSection />
      <DepartmentsSection />
      <Footer />
    </>
  );
}

export default Home;
