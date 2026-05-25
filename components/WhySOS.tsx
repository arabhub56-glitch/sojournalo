"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  Brain,
  Clock,
  BarChart2,
  MapPin,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Native Arabic Communication",
    description:
      "We speak the language — not just linguistically, but culturally. Our team communicates with Arabic communities using the nuance, context, and tone that builds authentic relationships.",
    stat: "100%",
    statLabel: "Cultural Fluency",
  },
  {
    icon: Brain,
    title: "Deep Web3 Understanding",
    description:
      "We live in Web3. Our team understands DeFi, NFTs, DAOs, L1s, L2s, and the full ecosystem — enabling us to represent your project with complete credibility and precision.",
    stat: "Web3",
    statLabel: "Native Expertise",
  },
  {
    icon: Clock,
    title: "Long-Term Community Focus",
    description:
      "We don't chase vanity metrics. We build communities that last — loyal, educated, and deeply invested in your project's long-term success.",
    stat: "∞",
    statLabel: "Long-Term Growth",
  },
  {
    icon: BarChart2,
    title: "High Engagement Strategies",
    description:
      "Our engagement strategies are data-backed and culturally informed — designed to spark real conversations, not empty interactions.",
    stat: "Elite",
    statLabel: "Engagement Rate",
  },
  {
    icon: MapPin,
    title: "MENA-Centered Growth",
    description:
      "Every strategy is built around the Middle East and North Africa. We know the regions, the communities, the platforms, and the moments that matter most.",
    stat: "MENA",
    statLabel: "Market Focus",
  },
  {
    icon: Shield,
    title: "24/7 Community Support",
    description:
      "Your Arabic community never sleeps — and neither do we. Round-the-clock moderation, support, and engagement keeps your community active and protected at all times.",
    stat: "24/7",
    statLabel: "Always Active",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="relative group"
    >
      <div className="h-full rounded-2xl p-7 bg-[#141414] border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-500 overflow-hidden">
        {/* Top bar accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/0 to-transparent group-hover:via-[#C9A84C]/40 transition-all duration-500" />
        {/* Glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#C9A84C]/4 to-transparent rounded-2xl" />

        <div className="relative z-10">
          {/* Icon + stat row */}
          <div className="flex items-start justify-between mb-5">
            <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]">
              <Icon size={20} className="text-[#C9A84C]" />
            </div>
            <div className="text-right">
              <div className="font-display text-2xl font-bold text-gold-gradient leading-none">
                {feature.stat}
              </div>
              <div className="text-[10px] text-white/30 tracking-wider uppercase mt-0.5">
                {feature.statLabel}
              </div>
            </div>
          </div>

          <h3 className="font-display font-bold text-base text-white mb-3 leading-snug group-hover:text-[#E2C97E] transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhySOS() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="relative py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-5%] w-[400px] h-[400px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] block mb-4"
          >
            Why SO&apos;s Journal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            The Standard for{" "}
            <span className="text-gold-gradient">Arabic Web3</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed"
          >
            What sets us apart isn&apos;t just what we do — it&apos;s how deeply we
            understand the communities we serve.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-32" />
    </section>
  );
}
