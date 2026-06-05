"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { services } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const CARD_GRADIENTS = [
  "from-empire-purple/20 to-empire-deepgreen/10",
  "from-empire-green/20 to-empire-deeppurple/10",
  "from-empire-amber/20 to-empire-purple/10",
  "from-empire-deeppurple/20 to-empire-green/10",
  "from-empire-green/20 to-empire-amber/10",
  "from-empire-purple/20 to-empire-amber/10",
  "from-empire-amber/20 to-empire-deepgreen/10",
  "from-empire-deeppurple/20 to-empire-green/10",
];

const BORDER_COLORS = [
  "hover:border-empire-purple/40",
  "hover:border-empire-green/40",
  "hover:border-empire-amber/40",
  "hover:border-empire-deeppurple/40",
  "hover:border-empire-green/40",
  "hover:border-empire-purple/40",
  "hover:border-empire-amber/40",
  "hover:border-empire-green/40",
];

const GLOW_COLORS = [
  "hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)]",
  "hover:shadow-[0_8px_30px_rgba(22,163,74,0.15)]",
  "hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)]",
  "hover:shadow-[0_8px_30px_rgba(76,29,149,0.15)]",
  "hover:shadow-[0_8px_30px_rgba(22,163,74,0.15)]",
  "hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)]",
  "hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)]",
  "hover:shadow-[0_8px_30px_rgba(22,163,74,0.15)]",
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 bg-section-gradient"
      aria-labelledby="services-heading"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-[150px]"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-empire-green/30 bg-empire-green/10 text-sm font-medium text-empire-green mb-4">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What We{" "}
            <span className="text-gradient-purple-green">Deliver</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            From agriculture to investment, we provide comprehensive solutions
            across multiple industries to drive growth and create lasting value.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              className={`group relative p-6 rounded-xl border border-white/5 bg-gradient-to-br ${CARD_GRADIENTS[index]} backdrop-blur-sm transition-all duration-400 cursor-pointer ${BORDER_COLORS[index]} ${GLOW_COLORS[index]} hover:-translate-y-1`}
              aria-label={service.title}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-empire-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient-purple-green transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-1 text-empire-purple opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24 mx-auto w-3/4" />
    </section>
  );
}
