"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden"
            style={{
              background: "rgba(15, 15, 25, 0.65)",
            }}
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-empire-purple via-empire-green to-empire-amber" />

            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-empire-purple/50 focus:ring-1 focus:ring-empire-purple/50 transition-all duration-300"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-empire-purple/50 focus:ring-1 focus:ring-empire-purple/50 transition-all duration-300"
                />
              </div>

              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-empire-purple/50 focus:ring-1 focus:ring-empire-purple/50 transition-all duration-300"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-empire-purple/50 focus:ring-1 focus:ring-empire-purple/50 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-neon-purple py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-10 sm:p-12 text-center border border-white/[0.08]"
            style={{
              background: "rgba(15, 15, 25, 0.7)",
            }}
          >
            {/* Animated Success Checkmark */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-empire-green/20 border border-empire-green flex items-center justify-center text-empire-green"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">
              Thank you for reaching out. We have received your inquiry and will get back to you as
              soon as possible.
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-neon-green px-6 py-2.5 text-sm cursor-pointer"
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
