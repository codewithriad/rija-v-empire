import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import FlagshipServices from "@/components/FlagshipServices";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "Our Services | RIJA-V EMPIRE NIGERIA LIMITED",
  description:
    "Explore the wide range of services offered by RIJA-V EMPIRE NIGERIA LIMITED, spanning Agriculture, Education, Media, Real Estate, Consultancy, Fashion, Import & Export, and Investment.",
};

export default function Services() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* 1. Services Page Header */}
        <section className="relative overflow-hidden pt-36 pb-20 bg-hero-gradient">
          <ParticleBackground />

          {/* Decorative gradient orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(22, 163, 74, 0.1) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-empire-green/30 bg-empire-green/10 text-sm font-semibold text-gradient-green mb-4">
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Our Diverse <span className="text-gradient-purple-green">Services</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-slate-400 text-lg leading-relaxed">
              We deliver scalable solutions across 10+ industries to drive growth, create value, and
              transform communities in Nigeria.
            </p>
          </div>
        </section>

        {/* 2. Core Services Grid (8 Sectors) */}
        <ServicesSection />

        {/* 3. Flagship Services (Tabbed Details: Agriculture, Education, Media) */}
        <FlagshipServices />

        {/* 4. Call to Action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
