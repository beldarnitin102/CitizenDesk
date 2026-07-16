import Hero from "../../components/home/Hero/Hero";
import TrustedBy from "../../components/home/TrustedBy/TrustedBy";
import Features from "../../components/home/Features/Features";
import Statistics from "../../components/home/Stats/Statistics";
import HowItWorks from "../../components/home/HowItWorks/HowItWorks";
import AISection from "../../components/home/AISection/AISection";
import Departments from "../../components/home/Departments/Departments";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import FAQ from "../../components/home/FAQ/FAQ";
import CTA from "../../components/home/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <Statistics />
      <HowItWorks />
      <AISection />
      <Departments />
      <Testimonials />
      <FAQ />
        <CTA />
    </>
  );
};

export default Home;