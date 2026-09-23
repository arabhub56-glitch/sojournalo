"use client";

import {
  MessageSquare,
  Brain,
  Clock,
  BarChart2,
  MapPin,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./ui/Reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  span: string;
};

const features: Feature[] = [
  {
    icon: MessageSquare,
    title: "Native Arabic Communication",
    description:
      "We speak the language — not just linguistically, but culturally. Our team communicates with Arabic communities using the nuance, context, and tone that builds authentic relationships.",
    stat: "100%",
    statLabel: "Cultural Fluency",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    icon: Brain,
    title: "Deep Web3 Understanding",
    description:
      "We live in Web3 — DeFi, NFTs, DAOs, L1s, and L2s — enabling us to represent your project with credibility and precision.",
    stat: "Web3",
    statLabel: "Native Expertise",
    span: "md:col-span-2",
  },
  {
    icon: Clock,
    title: "Long-Term Community Focus",
    description:
      "We don't chase vanity metrics. We build communities that last — loyal, educated, and invested in your project's success.",
    stat: "∞",
    statLabel: "Long-Term Growth",
    span: "md:col-span-2",
  },
  {
    icon: BarChart2,
    title: "High Engagement Strategies",
    description:
      "Data-backed, culturally informed engagement strategies designed to spark real conversations, not empty interactions.",
    stat: "Elite",
    statLabel: "Engagement Rate",
    span: "md:col-span-3",
  },
  {
    icon: MapPin,
    title: "MENA-Centered Growth",
    description:
      "Every strategy is built around the Middle East and North Africa — the regions, communities, platforms, and moments that matter most.",
    stat: "MENA",
    statLabel: "Market Focus",
    span: "md:col-span-3",
  },
  {
    icon: Shield,
    title: "24/7 Community Support",
    description:
      "Your Arabic community never sleeps — and neither do we. Round-the-clock moderation and support keeps your community active and protected.",
    stat: "24/7",
    statLabel: "Always Active",
    span: "md:col-span-6",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  const isLarge = feature.span.includes("row-span-2");
  const isWide = feature.span === "md:col-span-6";

  return (
    <Reveal delay={index * 0.08} className={`group ${feature.span}`}>
      <div
        className={`h-full rounded-2xl bg-[#141416] border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-500 overflow-hidden relative ${
          isWide ? "p-7 flex flex-col sm:flex-row sm:items-center gap-6" : "p-7 flex flex-col"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/0 to-transparent group-hover:via-[#C9A84C]/40 transition-all duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#C9A84C]/4 to-transparent" />

        <div className={`relative z-10 flex items-start justify-between ${isWide ? "sm:flex-shrink-0" : "mb-5"}`}>
          <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]">
            <Icon size={20} className="text-[#C9A84C]" />
          </div>
          {!isWide && (
            <div className="text-right">
              <div className="font-display text-2xl font-bold text-gold-gradient leading-none">
                {feature.stat}
              </div>
              <div className="text-[10px] text-white/40 tracking-wider uppercase mt-0.5">
                {feature.statLabel}
              </div>
            </div>
          )}
        </div>

        <div
          className={`relative z-10 flex-1 ${
            isLarge ? "flex flex-col justify-center" : ""
          }`}
        >
          <div className="flex items-center gap-4 mb-3">
            <h3
              className={`font-display font-bold text-white leading-snug group-hover:text-[#E2C97E] transition-colors duration-300 ${
                isLarge ? "text-3xl" : "text-base"
              }`}
            >
              {feature.title}
            </h3>
            {isWide && (
              <span className="font-display text-xl font-bold text-gold-gradient leading-none whitespace-nowrap">
                {feature.stat}
              </span>
            )}
          </div>
          <p
            className={`text-white/55 leading-relaxed group-hover:text-white/70 transition-colors duration-300 ${
              isLarge ? "text-lg max-w-md" : "text-sm"
            }`}
          >
            {feature.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function WhySOS() {
  return (
    <section id="why" className="relative py-28 md:py-32 bg-[#0B0B0D] overflow-hidden">
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-5%] w-[400px] h-[400px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold block mb-4">
              Why SoJournalo
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              The Standard for <span className="text-gold-gradient">Arabic Web3</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
              What sets us apart isn&apos;t just what we do — it&apos;s how deeply we
              understand the communities we serve.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[minmax(160px,auto)]">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
