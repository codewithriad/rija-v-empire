'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { reasons } from '@/lib/data';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Background: subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.06) 0%, rgba(22, 163, 74, 0.03) 35%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-gradient-amber border border-empire-amber/20 bg-empire-amber/5 mb-6">
            Why Choose Us
          </span>

          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            The{' '}
            <span className="text-gradient-purple-green">RIJA-V Advantage</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine multi-industry expertise with relentless execution to
            deliver results that transform businesses and communities.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {reasons.map((reason) => (
            <motion.article
              key={reason.id}
              variants={cardVariants}
              className="group relative glass-card overflow-hidden p-6 sm:p-8 flex flex-col items-start"
              aria-label={reason.title}
            >
              {/* Top gradient border line */}
              <div
                className="absolute top-0 left-0 w-full h-[3px]"
                style={{
                  background:
                    'linear-gradient(90deg, #16a34a, #7c3aed)',
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <span
                className="text-4xl mb-5 block transition-transform duration-300 group-hover:scale-110"
                role="img"
                aria-hidden="true"
              >
                {reason.icon}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
