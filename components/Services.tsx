"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const services = [
  {
    icon: Users,
    title: "Arabic Community Management",
    description:
      "Full-time, native Arabic community management that builds genuine trust, fosters engagement, and cultivates loyal ecosystem members across all channels.",
    accent: "gold",
  },
  {
    icon: Twitter,
    title: "Twitter/X Growth Strategy",
    description:
      "Data-driven Twitter/X growth tailored to the Arabic-speaking Web3 audience — from content calendars to engagement tactics that amplify reach.",
    accent: "violet",
  },
  {
    icon: MessageCircle,
    title: "Telegram Moderation & Support",
    description:
      "Professional Telegram community moderation and 24/7 member support in Arabic, ensuring safety, engagement, and a premium community experience.",
    accent: "gold",
  },
  {
    icon: FileText,
    title: "Arabic Content Creation",
    description:
      "Premium Web3 content written in native Arabic — threads, announcements, educational posts, and narratives that resonate deeply with MENA audiences.",
    accent: "violet",
  },
  {
    icon: Globe,
    title: "Localization & Translation",
    description:
      "Expert Arabic localization of whitepapers, websites, and marketing materials that preserves intent, tone, and cultural nuance — not just words.",
    accent: "gold",
  },
  {
    icon: Zap,
    title: "Web3 Brand Positioning",
    description:
      "Strategic brand positioning for Web3 projects entering the MENA market — identity, narrative, and messaging crafted for Arabic-speaking communities.",
    accent: "violet",
  },
  {
    icon: TrendingUp,
    title: "MENA Market Expansion",
    description:
      "End-to-end market entry strategy for the Middle East and North Africa — from research and positioning to community seeding and growth.",
    accent: "gold",
  },
  {
    icon: Rocket,
    title: "Campaigns & Community Activations",
    description:
      "High-impact community campaigns, giveaways, and activations designed to drive rapid growth, engagement, and virality within Arabic Web3 circles.",
    accent: "violet",
  },
  {
    icon: Mic,
    title: "AMA & Educational Events",
    description:
      "Professionally hosted AMA sessions and educational events in Arabic — building credibility, answering community questions, and driving adoption.",
    accent: "gold",
  },
  {
    icon: Heart,
    title: "Community Retention Strategy",
    description:
      "Long-term retention frameworks that keep Arabic community members engaged, informed, and committed — turning holders into passionate advocates.",
    accent: "violet",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;
  const isGold = service.accent === "gold";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 5) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative rounded-2xl p-6 bg-[#141414] border border-white/5 overflow-hidden group cursor-default transition-all duration-300 hover:border-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${
          isGold
            ? "bg-gradient-to-br from-[#C9A84C]/8 to-transparent"
            : "bg-gradient-to-br from-[#7C3AED]/8 to-transparent"
        }`}
      />
      {/* Corner accent */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl ${
          isGold ? "bg-[#C9A84C]/10" : "bg-[#7C3AED]/10"
        }`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
            isGold
              ? "bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
              : "bg-[#7C3AED]/10 group-hover:bg-[#7C3AED]/20 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]"
          }`}
        >
          <Icon
            size={20}
            className={isGold ? "text-[#C9A84C]" : "text-[#A78BFA]"}
          />
        </div>

        <h3 className="font-display font-bold text-base text-white mb-3 group-hover:text-white transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/4 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] block mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            Services Built for{" "}
            <span className="text-gold-gradient">Arabic Web3</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Every service is designed specifically for the MENA Web3 landscape —
            culturally aware, strategically sharp, and results-driven.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.slice(0, 5).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
          {services.slice(5, 10).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-32" />
    </section>
  );
}
