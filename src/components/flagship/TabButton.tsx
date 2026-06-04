"use client";

import { motion } from "framer-motion";
import type { ServiceTab } from "@/lib/servicesData";

interface TabButtonProps {
  tab: ServiceTab;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ tab, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer sm:px-6 sm:py-3.5 sm:text-base md:px-8"
      style={{
        color: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
      }}
      aria-selected={isActive}
      role="tab"
    >
      {/* Active background glow */}
      {isActive && (
        <motion.span
          layoutId="tab-active-bg"
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${tab.accentColor}22, ${tab.accentColor}10)`,
            border: `1px solid ${tab.accentColor}44`,
            boxShadow: `0 0 24px ${tab.glowColor}, 0 0 48px ${tab.accentColor}20, inset 0 1px 0 rgba(255,255,255,0.06)`,
          }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 32,
          }}
        />
      )}

      {/* Icon */}
      <span
        className="relative z-10 text-lg transition-transform duration-300"
        style={{
          transform: isActive ? "scale(1.15)" : "scale(1)",
          filter: isActive
            ? `drop-shadow(0 0 6px ${tab.glowColor})`
            : "none",
        }}
      >
        {tab.icon}
      </span>

      {/* Label */}
      <span
        className="relative z-10 transition-colors duration-300"
        style={{
          textShadow: isActive ? `0 0 16px ${tab.glowColor}` : "none",
        }}
      >
        {tab.label}
      </span>

      {/* Active neon underline */}
      {isActive && (
        <motion.span
          layoutId="tab-underline"
          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${tab.accentColor}, transparent)`,
            boxShadow: `0 2px 12px ${tab.glowColor}`,
          }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 32,
          }}
        />
      )}
    </button>
  );
}
