import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "About Us | RIJA-V EMPIRE NIGERIA LIMITED",
  description:
    "Learn about RIJA-V EMPIRE NIGERIA LIMITED, a diversified powerhouse driving growth, value creation, and community transformation across Nigeria.",
};

export default function About() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* 1. About Page Header */}
        <section className="relative overflow-hidden pt-36 pb-20 bg-hero-gradient">
          <ParticleBackground />

          {/* Decorative gradient orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-empire-purple/30 bg-empire-purple/10 text-sm font-semibold text-gradient-purple-green mb-4">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              About Our <span className="text-gradient-purple-green">Empire</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-slate-400 text-lg leading-relaxed">
              A diversified Nigerian conglomerate operating across agriculture, education, media,
              real estate, and investment to build a stronger economic future.
            </p>
          </div>
        </section>

        {/* 2. Full Company Details & Stats Counter */}
        <AboutSection />

        {/* 3. Mission, Vision & Values Section */}
        <section
          id="mission-vision"
          className="relative overflow-hidden py-24 bg-section-gradient"
          aria-labelledby="mission-heading"
        >
          {/* Subtle decorations */}
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(22, 163, 74, 0.05) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-gradient-amber border border-empire-amber/20 bg-empire-amber/5 mb-4">
                Our Purpose
              </span>
              <h2
                id="mission-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Driving Excellence with <span className="text-gradient-purple-green">Purpose</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Our operations are guided by a clear roadmap and core principles that keep us focused
                on delivering value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission Card */}
              <div
                className="glass-card p-8 sm:p-10 border border-white/[0.08] relative overflow-hidden flex flex-col"
                style={{
                  background: "rgba(15, 15, 25, 0.5)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-empire-purple" />
                <div className="text-4xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  To drive sustainable economic growth and value creation in Nigeria by delivering
                  exceptional, innovative, and scalable solutions across agriculture, education, media,
                  and other key industrial sectors.
                </p>
              </div>

              {/* Vision Card */}
              <div
                className="glass-card p-8 sm:p-10 border border-white/[0.08] relative overflow-hidden flex flex-col"
                style={{
                  background: "rgba(15, 15, 25, 0.5)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-empire-green" />
                <div className="text-4xl mb-6">👁️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  To be the leading diversified business conglomerate in West Africa, recognized for
                  empowering communities, fostering technology-driven innovation, and building
                  global-standard enterprises.
                </p>
              </div>

              {/* Values Card */}
              <div
                className="glass-card p-8 sm:p-10 border border-white/[0.08] relative overflow-hidden flex flex-col"
                style={{
                  background: "rgba(15, 15, 25, 0.5)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-empire-amber" />
                <div className="text-4xl mb-6">💎</div>
                <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
                <ul className="space-y-3 text-gray-400 flex-grow" role="list">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-empire-purple" />
                    <strong>Integrity:</strong> Honesty and transparency in all dealings.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-empire-green" />
                    <strong>Excellence:</strong> Delivering the highest quality results.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-empire-amber" />
                    <strong>Innovation:</strong> Continuously improving and adapting.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-empire-purple" />
                    <strong>Empowerment:</strong> Creating value for local communities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Call to Action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
