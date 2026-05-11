import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import ServiceCards from "./components/ServiceCards";
import ServicePickGrid from "./components/ServicePickGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f1ec]">
      <Navbar />
      <Hero />
      <StatsBar />
      <ServiceCards />
      <ServicePickGrid />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  );
}
