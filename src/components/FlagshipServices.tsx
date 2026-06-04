"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Tabs from "./flagship/Tabs";
import ServiceCard from "./flagship/ServiceCard";
import { serviceTabs } from "@/lib/servicesData";

/* ------------------------------------------------------------------ */
/*  Content transition variants                                        */
/* ------------------------------------------------------------------ */
const contentVariants = {
  enter: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(6px)",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

/* ================================================================== */
/*  FlagshipServices — Our Flagship Services (tab-based)               */
/* ================================================================== */
export default function FlagshipServices() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const currentTab = serviceTabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="featured"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "linear-gradient(170deg, #041f15 0%, #0a0a0f 35%, #0f0a1a 65%, #1a0a2e 100%)",
      }}
      aria-labelledby="flagship-heading"
    >
      {/* ---- Decorative background orbs ---- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Green orb — top left */}
        <div
          className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background: "radial-gradient(circle, #16a34a, transparent 70%)",
          }}
        />
        {/* Purple orb — bottom right */}
        <div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-[0.08] blur-[140px]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        {/* Amber orb — center */}
        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04] blur-[100px]"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent 70%)",
          }}
        />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Section Header ---- */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="mb-4 inline-block rounded-full border border-empire-purple/30 bg-empire-purple/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-empire-purple">
            Featured
          </span>
          <h2
            id="flagship-heading"
            className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            Our Flagship{" "}
            <span className="text-gradient-purple-green">Services</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Explore our core service verticals designed to empower businesses,
            transform communities, and drive sustainable growth across Nigeria.
          </p>
        </motion.div>

        {/* ---- Tabs ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 sm:mb-14"
        >
          <Tabs
            tabs={serviceTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </motion.div>

        {/* ---- Tab Content (Cards Grid) ---- */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              role="tabpanel"
              aria-label={`${currentTab.label} services`}
            >
              {currentTab.cards.map((card, idx) => (
                <ServiceCard
                  key={card.id}
                  card={card}
                  index={idx}
                  accentColor={currentTab.accentColor}
                  glowColor={currentTab.glowColor}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mx-auto mt-24 w-3/4" />
    </section>
  );
}
