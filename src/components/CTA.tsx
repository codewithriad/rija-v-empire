"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      aria-labelledby="cta-heading"
      style={{
        background:
          "linear-gradient(135deg, rgba(6,78,59,0.55) 0%, rgba(76,29,149,0.50) 100%)",
      }}
    >
      {/* Decorative animated gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(22,163,74,0.7) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 h-[350px] w-[350px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.7) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-1/3 top-1/4 h-[200px] w-[200px] rounded-full opacity-25 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.6) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Glass overlay card */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.88, y: 40 }
          }
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          }}
          className="glass-card px-6 py-16 text-center sm:px-12 md:px-16 md:py-20"
        >
          {/* Heading */}
          <h2
            id="cta-heading"
            className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Let&rsquo;s Build Your Business{" "}
            <span className="text-gradient-purple-green">Together</span>
          </h2>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            Partner with RIJA‑V EMPIRE and unlock your growth potential across
            multiple industries.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {/* Contact Us Page */}
            <Link
              href="/contact"
              className="btn-neon-purple inline-flex items-center gap-2 text-center"
              aria-label="Visit our contact page"
            >
              {/* Mail/Message icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </Link>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/2348166431574"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-green inline-flex items-center gap-2 text-center"
              aria-label="Message us on WhatsApp"
            >
              {/* WhatsApp SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
