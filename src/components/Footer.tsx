"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { companyInfo, services } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: companyInfo.facebook,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: companyInfo.instagram,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: companyInfo.linkedin,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: companyInfo.twitter,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  const displayedServices = services.slice(0, 6);

  return (
    <footer className="relative bg-empire-darker" role="contentinfo">
      {/* Gradient divider */}
      <div className="section-divider" />

      {/* Gradient overlay at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-empire-purple/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        {/* Grid */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Column 1 — Brand */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="RIJA-V EMPIRE NIGERIA LIMITED Logo"
                className="h-16 w-auto object-contain brightness-100 group-hover:scale-105 transition-transform duration-300"
                width={160}
                height={64}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {companyInfo.tagline}
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-empire-purple/15 bg-white/5 text-slate-400 transition-all duration-300 hover:border-empire-purple/40 hover:bg-empire-purple/10 hover:text-empire-purple hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white font-heading">
              Quick Links
            </h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-slate-400 transition-colors duration-300 hover:text-empire-green"
                    >
                      <span className="mr-2 inline-block h-1 w-1 rounded-full bg-empire-purple/50 transition-all duration-300 group-hover:w-2 group-hover:bg-empire-green" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Column 3 — Services */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white font-heading">
              Our Services
            </h3>
            <ul className="space-y-3">
              {displayedServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="group flex items-center text-sm text-slate-400 transition-colors duration-300 hover:text-empire-green"
                  >
                    <span className="mr-2 inline-block h-1 w-1 rounded-full bg-empire-purple/50 transition-all duration-300 group-hover:w-2 group-hover:bg-empire-green" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white font-heading">
              Contact Us
            </h3>
            <address className="not-italic">
              <ul className="space-y-4">
                {/* Location */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-empire-purple/10 text-empire-purple">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-400">{companyInfo.location}</span>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-empire-green/10 text-empire-green">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-empire-green"
                  >
                    {companyInfo.email}
                  </a>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-empire-amber/10 text-empire-amber">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-empire-amber"
                  >
                    {companyInfo.phone}
                  </a>
                </li>
              </ul>
            </address>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-empire-purple/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {companyInfo.fullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-empire-green animate-pulse" />
              <span className="text-xs text-slate-500">Empowering Growth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
