"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { companyInfo } from "@/lib/data";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 30 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const headingX = useTransform(smoothX, [-0.5, 0.5], [15, -15]);
  const headingY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const subX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const subY = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const orbX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const orbY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
      aria-label="Hero section"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          x: orbX,
          y: orbY,
        }}
      />
      <motion.div
        style={{
          background: "radial-gradient(circle, #16a34a 0%, transparent 70%)",
          x: useTransform(orbX, (v) => -v),
          y: useTransform(orbY, (v) => -v),
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-[80px] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-empire-purple/30 bg-empire-purple/10 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-empire-green animate-pulse" />
          <span className="text-sm font-medium text-gray-300">
            Multi-Sector Excellence Since Day One
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ x: headingX, y: headingY }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6"
        >
          <span className="text-white">Empowering</span>{" "}
          <span className="text-gradient-purple-green">Multi-Industry</span>
          <br />
          <span className="text-white">Growth Across </span>
          <span className="text-gradient-amber">Nigeria</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ x: subX, y: subY }}
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          {companyInfo.subTagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="btn-neon-purple text-center min-w-[200px]"
            aria-label="Explore our services"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Services
              <svg
                className="w-5 h-5"
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
            </span>
          </a>
          <a
            href="#contact"
            className="btn-neon-green text-center min-w-[200px]"
            aria-label="Get in touch with us"
          >
            <span className="flex items-center justify-center gap-2">
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector("#about");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400 uppercase tracking-widest group-hover:text-empire-green transition-colors duration-300">
              Scroll Down
            </span>
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-empire-green transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
}
