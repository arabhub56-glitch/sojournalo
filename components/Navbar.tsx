"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B0B0D]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#A07830] flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-transform group-hover:scale-105">
                <span className="text-black font-bold text-xs font-display">SJ</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-[#E2C97E] transition-colors">
                SoJournalo
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-[#E2C97E] transition-colors duration-200 font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-black text-sm font-semibold shadow-[0_0_20px_rgba(201,168,76,0.25)] hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300"
              >
                Book a Call
              </motion.a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden text-white/70 hover:text-white transition-colors p-1"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#0B0B0D]/95 backdrop-blur-xl border-b border-white/5 px-6 py-6 md:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/75 hover:text-[#E2C97E] text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-black text-sm font-semibold text-center shadow-[0_0_20px_rgba(201,168,76,0.25)]"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
