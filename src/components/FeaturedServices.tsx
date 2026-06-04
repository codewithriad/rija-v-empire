"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { featuredServices } from "@/lib/data";

/** Emoji icon map by service id for the large visual placeholder */
const iconMap: Record<string, string> = {
  "agri-featured": "🌾",
  "edu-featured": "🎓",
  "media-featured": "🎬",
};

/* ------------------------------------------------------------------ */
/*  Animated featured‑service block (single item)                     */
/* ------------------------------------------------------------------ */
function FeaturedBlock({
  service,
  index,
}: {
  service: (typeof featuredServices)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isImageLeft = service.imagePosition === "left";

  /* Slide direction based on imagePosition */
  const imageVariants = {
    hidden: { opacity: 0, x: isImageLeft ? -80 : 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        delay: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isImageLeft ? 80 : -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        delay: 0.25,
      },
    },
  };

  /* ---- Image placeholder ---- */
  const imagePlaceholder = (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="glass-card group/img relative flex h-80 items-center justify-center overflow-hidden lg:aspect-video lg:h-auto border border-white/10"
    >
      {/* Real image for all three services */}
      <img
        src={
          service.id === "agri-featured"
            ? "/agriculture_featured.png"
            : service.id === "edu-featured"
              ? "/education-edtech.jpg"
              : "/media-production.jpg"
        }
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
      />

      {/* Gradient overlay — bottom fade to dark */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent pointer-events-none" />

      {/* Subtle color tint per service */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background:
            service.id === "agri-featured"
              ? "linear-gradient(to top right, rgba(6,78,59,0.3), transparent)"
              : service.id === "edu-featured"
                ? "linear-gradient(to top right, rgba(124,58,237,0.25), transparent)"
                : "linear-gradient(to top right, rgba(245,158,11,0.25), transparent)",
        }}
      />

      {/* Title overlaid at bottom */}
      <span className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#0a0a0f] to-transparent px-6 py-5 text-lg font-bold tracking-wide text-white">
        {service.title}
      </span>
    </motion.div>
  );

  /* ---- Text side ---- */
  const textContent = (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col justify-center"
    >
      {/* Subtitle badge */}
      <span className="mb-4 inline-block w-fit rounded-full border border-empire-green/30 bg-empire-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-empire-green">
        {service.subtitle}
      </span>

      {/* Title */}
      <h3 className="mb-4 text-3xl font-bold text-white">{service.title}</h3>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-gray-300">
        {service.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-3" role="list">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-start gap-3 text-gray-200">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-empire-green/20 text-xs font-bold text-empire-green"
              aria-hidden="true"
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
    >
      {isImageLeft ? (
        <>
          {imagePlaceholder}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imagePlaceholder}
        </>
      )}
    </div>
  );
}

/* ================================================================== */
/*  FeaturedServices section                                           */
/* ================================================================== */
export default function FeaturedServices() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="featured"
      className="bg-section-gradient relative overflow-hidden py-24"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Section Header ---- */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-empire-purple/30 bg-empire-purple/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-empire-purple">
            Featured
          </span>
          <h2
            id="featured-heading"
            className="mt-4 text-4xl font-bold text-white md:text-5xl"
          >
            Our Flagship{" "}
            <span className="text-gradient-purple-green">Services</span>
          </h2>
        </motion.div>

        {/* ---- Featured Blocks ---- */}
        <div className="space-y-24">
          {featuredServices.map((service, idx) => (
            <FeaturedBlock key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
