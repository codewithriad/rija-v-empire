"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ServiceCard as ServiceCardType } from "@/lib/servicesData";

interface ServiceCardProps {
  card: ServiceCardType;
  index: number;
  accentColor: string;
  glowColor: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: i * 0.08,
    },
  }),
};

export default function ServiceCard({
  card,
  index,
  accentColor,
  glowColor,
}: ServiceCardProps) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] backdrop-blur-xl transition-all duration-500"
      style={{
        background:
          "linear-gradient(160deg, rgba(15, 15, 25, 0.75), rgba(10, 10, 18, 0.9))",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${accentColor}55`;
        el.style.boxShadow = `0 8px 40px ${glowColor}, 0 0 0 1px ${accentColor}22, 0 20px 60px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "none";
      }}
      aria-label={card.title}
    >
      {/* Image container */}
      <div className="relative h-52 w-full overflow-hidden sm:h-56">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top, rgba(10,10,18,0.95) 0%, rgba(10,10,18,0.3) 50%, transparent 100%)`,
          }}
        />

        {/* Color tint overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"
          style={{
            background: `linear-gradient(to top right, ${accentColor}30, transparent)`,
          }}
        />

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full transition-transform duration-[1200ms] ease-out group-hover:translate-x-full">
          <div
            className="h-full w-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        {/* Accent line */}
        <div
          className="mb-4 h-[2px] w-10 rounded-full opacity-60 transition-all duration-500 group-hover:w-16 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, ${accentColor}, transparent)`,
            boxShadow: `0 0 8px ${glowColor}`,
          }}
        />

        {/* Title */}
        <h3 className="mb-2.5 text-lg font-bold tracking-tight text-white transition-colors duration-300 sm:text-xl">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {card.description}
        </p>

        {/* CTA indicator */}
        <div className="flex items-center gap-2 text-sm font-medium opacity-0 transition-all duration-400 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          <span style={{ color: accentColor }}>Learn more</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: accentColor }}
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
      </div>

      {/* Bottom glow line on hover */}
      <div
        className="absolute bottom-0 left-4 right-4 h-[1px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)`,
          boxShadow: `0 0 12px ${glowColor}`,
        }}
      />
    </motion.article>
  );
}
