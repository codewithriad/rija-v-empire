"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // iOS-safe body scroll lock when mobile menu is open
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="relative flex items-center gap-2 group"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="RIJA-V EMPIRE NIGERIA LIMITED Logo"
                className="h-16 w-auto object-contain brightness-100 group-hover:scale-[1.03] transition-transform duration-300"
                width={160}
                height={64}
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.ul
            className="hidden items-center gap-1 md:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empire-purple/50 focus-visible:ring-offset-2 focus-visible:ring-offset-empire-darker ${
                      isActive ? "text-white" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-glow"
                        className="absolute inset-0 rounded-lg -z-10 bg-white/5 border border-empire-purple/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] shadow-empire-purple/5"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(22, 163, 74, 0.04) 100%)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden md:block"
            >
              <Link
                href="/contact"
                className="btn-neon-purple px-5 py-2.5 text-sm inline-block cursor-pointer"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empire-purple/50 md:hidden"
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

        {/* Mobile Menu */}
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
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      role="menuitem"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? "bg-empire-purple/10 text-white border-l-2 border-empire-purple px-3"
                            : "text-slate-300 hover:bg-empire-purple/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}

                {/* Mobile CTA */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="mt-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-neon-purple block w-full text-center"
                  >
                    Get in Touch
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay */}
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
