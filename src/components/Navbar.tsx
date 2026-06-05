"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, companyInfo } from "@/lib/data";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // iOS-safe body scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      // Small delay so menu close animation plays before scroll
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    },
    [],
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-empire-purple/20 shadow-lg shadow-empire-purple/5"
            : "border-b border-transparent"
        }`}
        style={
          scrolled
            ? {
                backgroundColor: "rgba(8, 5, 20, 0.80)",
                WebkitBackdropFilter: "blur(24px)",
                backdropFilter: "blur(24px)",
              }
            : undefined
        }
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="relative flex items-center gap-2 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.png"
              alt="RIJA-V EMPIRE NIGERIA LIMITED Logo"
              className="h-16 w-auto object-contain brightness-100 group-hover:scale-[1.03] transition-transform duration-300"
              width={20}
              height={20}
            />
          </motion.a>

          {/* Desktop Navigation Links */}
          <motion.ul
            className="hidden items-center gap-1 md:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empire-purple/50 focus-visible:ring-offset-2 focus-visible:ring-offset-empire-darker"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="btn-neon-purple hidden px-5 py-2.5 text-sm md:inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in Touch
            </motion.a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-amber-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empire-purple/50 md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-5 w-6">
                {/* Top bar */}
                <motion.span
                  className="absolute left-0 block h-[2px] w-6 rounded-full bg-white"
                  animate={
                    mobileOpen
                      ? { rotate: 45, top: "50%", y: "-50%" }
                      : { rotate: 0, top: "2px", y: "0%" }
                  }
                  transition={{ duration: 0.3 }}
                />
                {/* Middle bar */}
                <motion.span
                  className="absolute left-0 top-1/2 block h-[2px] w-6 -translate-y-1/2 rounded-full bg-white"
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
                {/* Bottom bar */}
                <motion.span
                  className="absolute left-0 block h-[2px] w-6 rounded-full bg-white"
                  animate={
                    mobileOpen
                      ? { rotate: -45, bottom: "50%", y: "50%" }
                      : { rotate: 0, bottom: "2px", y: "0%" }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu — sits inside header so it stays fixed with it */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              role="menu"
              className="border-b border-empire-purple/20 md:hidden"
              style={{
                backgroundColor: "rgba(8, 5, 20, 0.97)",
                WebkitBackdropFilter: "blur(24px)",
                backdropFilter: "blur(24px)",
                willChange: "height, opacity",
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <ul className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    role="menuitem"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-slate-300 transition-colors duration-200 hover:bg-empire-purple/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}

                {/* Mobile CTA */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="mt-2"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="btn-neon-purple block w-full text-center"
                  >
                    Get in Touch
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay — closes menu when tapping outside */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
