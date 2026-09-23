"use client";

import { motion } from "framer-motion";
import { Twitter, Send, Mail } from "lucide-react";

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
    href: "https://twitter.com/sosjournal",
    icon: Twitter,
  },
  {
    label: "Telegram",
    href: "https://t.me/sosjournal",
    icon: Send,
  },
  {
    label: "Email",
    href: "mailto:contact@sosjournal.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#08080A] border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-[#C9A84C]/5 blur-[40px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-2.5 group mb-5 w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#A07830] flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                <span className="text-black font-bold text-xs font-display">SJ</span>
              </div>
              <span className="font-display font-bold text-lg text-white group-hover:text-[#E2C97E] transition-colors">
                SO&apos;s Journal
              </span>
            </a>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
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
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/55 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/55 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@sosjournal.com"
                className="flex items-center gap-2.5 text-white/55 hover:text-[#C9A84C] text-sm transition-colors group"
              >
                <Mail size={14} className="text-[#C9A84C]/60 group-hover:text-[#C9A84C]" />
                contact@sosjournal.com
              </a>
              <a
                href="https://t.me/sosjournal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/55 hover:text-[#C9A84C] text-sm transition-colors group"
              >
                <Send size={14} className="text-[#C9A84C]/60 group-hover:text-[#C9A84C]" />
                Telegram
              </a>
              <a
                href="https://twitter.com/sosjournal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/55 hover:text-[#C9A84C] text-sm transition-colors group"
              >
                <Twitter size={14} className="text-[#C9A84C]/60 group-hover:text-[#C9A84C]" />
                Twitter / X
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} SO&apos;s Journal. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-[#C9A84C]/60 animate-pulse" />
            <span className="text-white/35 text-xs ml-1.5">
              Arabic Web3 Marketing Agency
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
