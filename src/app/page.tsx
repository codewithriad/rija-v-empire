import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home | RIJA-V EMPIRE NIGERIA LIMITED",
  description:
    "A diversified powerhouse delivering excellence across Agriculture, Education, Media, Real Estate, and beyond — building the future of Nigerian enterprise.",
};

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Highlights Section (Stats + Why Choose Us) */}
        <div id="highlights" className="relative bg-section-gradient pt-24 pb-12">
          {/* Subtle decoration orb */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(22, 163, 74, 0.05) 0%, rgba(124, 58, 237, 0.02) 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Highlights Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pb-16">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="glass-card p-6 sm:p-8 flex items-center justify-center border border-white/[0.06]"
                  style={{
                    background: "rgba(15, 15, 25, 0.45)",
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>
              ))}
            </div>
            
            {/* Divider line */}
            <div className="section-divider max-w-4xl mx-auto opacity-50 mb-8" />
          </div>
        </div>

        {/* 3. Why Choose Us (The RIJA-V Advantage) */}
        <WhyChooseUs />

        {/* 4. Call to Action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
