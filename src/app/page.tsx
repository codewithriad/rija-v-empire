import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FlagshipServices from "@/components/FlagshipServices";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Preview & stats */}
        <AboutSection />

        {/* 3. Services Section Grid */}
        <ServicesSection />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Our Flagship Services (Tab-based) */}
        <FlagshipServices />

        {/* 6. Call to Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
