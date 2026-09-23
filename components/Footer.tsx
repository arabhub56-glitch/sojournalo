"use client";

import { motion } from "framer-motion";
import { Twitter, Send, Mail } from "lucide-react";
import BrandMark from "./ui/BrandMark";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Twitter / X",
    href: "https://x.com/SoJournalo",
    icon: Twitter,
  },
  {
    label: "Telegram",
    href: "https://t.me/Sojournalo",
    icon: Send,
  },
  {
    label: "Email",
    href: "mailto:sojournalo@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-white/8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-teal/10 blur-[40px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <a href="#" className="inline-flex mb-5 w-fit">
              <BrandMark variant="light" iconClassName="w-9 h-9" textClassName="text-lg" />
            </a>
            <p className="text-paper/55 text-sm leading-relaxed max-w-xs mb-6">
              Building strong Arabic communities for Web3 projects. MENA expansion,
              localized marketing, and culturally-native community growth.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    title={social.label}
                    className="w-9 h-9 rounded-lg glass-dark flex items-center justify-center text-paper/60 hover:text-teal-light transition-all duration-200"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-paper/50 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-paper/60 hover:text-teal-light text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-paper/50 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:sojournalo@gmail.com"
                className="flex items-center gap-2.5 text-paper/60 hover:text-teal-light text-sm transition-colors group"
              >
                <Mail size={14} className="text-teal-light/70 group-hover:text-teal-light" />
                sojournalo@gmail.com
              </a>
              <a
                href="https://t.me/Sojournalo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-paper/60 hover:text-teal-light text-sm transition-colors group"
              >
                <Send size={14} className="text-teal-light/70 group-hover:text-teal-light" />
                Telegram
              </a>
              <a
                href="https://x.com/SoJournalo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-paper/60 hover:text-teal-light text-sm transition-colors group"
              >
                <Twitter size={14} className="text-teal-light/70 group-hover:text-teal-light" />
                Twitter / X
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-paper/35 text-xs">
            © {new Date().getFullYear()} SoJournalo. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-teal-light/70 animate-pulse" />
            <span className="text-paper/35 text-xs ml-1.5">
              Web3 Awareness for the Arab World
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
