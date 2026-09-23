"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Twitter,
  MessageCircle,
  FileText,
  Globe,
  Zap,
  TrendingUp,
  Rocket,
  Mic,
  Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./ui/Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const categories: { label: string; services: Service[] }[] = [
  {
    label: "Community & Growth",
    services: [
      {
        icon: Users,
        title: "Arabic Community Management",
        description:
          "Full-time, native Arabic community management that builds genuine trust, fosters engagement, and cultivates loyal ecosystem members across all channels.",
      },
      {
        icon: MessageCircle,
        title: "Telegram Moderation & Support",
        description:
          "Professional Telegram community moderation and 24/7 member support in Arabic, ensuring safety, engagement, and a premium community experience.",
      },
      {
        icon: Rocket,
        title: "Campaigns & Community Activations",
        description:
          "High-impact community campaigns, giveaways, and activations designed to drive rapid growth, engagement, and virality within Arabic Web3 circles.",
      },
      {
        icon: Heart,
        title: "Community Retention Strategy",
        description:
          "Long-term retention frameworks that keep Arabic community members engaged, informed, and committed — turning holders into passionate advocates.",
      },
      {
        icon: Mic,
        title: "AMA & Educational Events",
        description:
          "Professionally hosted AMA sessions and educational events in Arabic — building credibility, answering community questions, and driving adoption.",
      },
    ],
  },
  {
    label: "Content & Voice",
    services: [
      {
        icon: Twitter,
        title: "Twitter/X Growth Strategy",
        description:
          "Data-driven Twitter/X growth tailored to the Arabic-speaking Web3 audience — from content calendars to engagement tactics that amplify reach.",
      },
      {
        icon: FileText,
        title: "Arabic Content Creation",
        description:
          "Premium Web3 content written in native Arabic — threads, announcements, educational posts, and narratives that resonate deeply with MENA audiences.",
      },
      {
        icon: Globe,
        title: "Localization & Translation",
        description:
          "Expert Arabic localization of whitepapers, websites, and marketing materials that preserves intent, tone, and cultural nuance — not just words.",
      },
    ],
  },
  {
    label: "Strategy & Positioning",
    services: [
      {
        icon: Zap,
        title: "Web3 Brand Positioning",
        description:
          "Strategic brand positioning for Web3 projects entering the MENA market — identity, narrative, and messaging crafted for Arabic-speaking communities.",
      },
      {
        icon: TrendingUp,
        title: "MENA Market Expansion",
        description:
          "End-to-end market entry strategy for the Middle East and North Africa — from research and positioning to community seeding and growth.",
      },
    ],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="relative rounded-2xl p-6 bg-paper-card border border-ink/8 overflow-hidden group transition-all duration-300 hover:border-teal/30 hover:shadow-[0_20px_50px_rgba(21,33,47,0.1)]"
    >
      <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-teal/10" />

      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 bg-teal/10 group-hover:bg-teal/20">
          <Icon size={20} className="text-teal-deep" />
        </div>
        <h3 className="font-display font-semibold text-base text-ink mb-3 leading-snug">
          {service.title}
        </h3>
        <p className="text-ink/60 text-sm leading-relaxed group-hover:text-ink/75 transition-colors">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-28 md:py-32 bg-paper overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/6 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-deep block mb-4">
              What We Do
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-tight mb-5">
              Services Built for <span className="italic text-brand-gradient">Arabic Web3</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-ink/65 text-lg max-w-xl mx-auto leading-relaxed">
              Every service is designed specifically for the MENA Web3 landscape —
              culturally aware, strategically sharp, and results-driven.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div
            role="tablist"
            aria-label="Service categories"
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  active === i
                    ? "bg-ink text-paper shadow-[0_6px_20px_rgba(21,33,47,0.18)]"
                    : "glass text-ink/60 hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[220px]">
          <AnimatePresence mode="wait">
            {categories[active].services.map((s, i) => (
              <ServiceCard key={`${active}-${s.title}`} service={s} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
