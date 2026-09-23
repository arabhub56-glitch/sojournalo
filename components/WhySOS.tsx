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
        className={`h-full rounded-2xl bg-paper-card border border-ink/8 hover:border-teal/30 transition-all duration-500 overflow-hidden relative ${
          isWide ? "p-7 flex flex-col sm:flex-row sm:items-center gap-6" : "p-7 flex flex-col"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-teal/40 transition-all duration-500" />

        <div className={`relative z-10 flex items-start justify-between ${isWide ? "sm:flex-shrink-0" : "mb-5"}`}>
          <div className="w-11 h-11 rounded-xl bg-teal/10 group-hover:bg-teal/20 flex items-center justify-center transition-all duration-300">
            <Icon size={20} className="text-teal-deep" />
          </div>
          {!isWide && (
            <div className="text-right">
              <div className="font-display text-2xl font-semibold text-teal-deep leading-none">
                {feature.stat}
              </div>
              <div className="text-[10px] text-ink/45 tracking-wider uppercase mt-0.5">
                {feature.statLabel}
              </div>
            </div>
          )}
        </div>

        <div className={`relative z-10 flex-1 ${isLarge ? "flex flex-col justify-center" : ""}`}>
          <div className="flex items-center gap-4 mb-3">
            <h3
              className={`font-display font-semibold text-ink leading-snug group-hover:text-teal-deep transition-colors duration-300 ${
                isLarge ? "text-3xl" : "text-base"
              }`}
            >
              {feature.title}
            </h3>
            {isWide && (
              <span className="font-display text-xl font-semibold text-teal-deep leading-none whitespace-nowrap">
                {feature.stat}
              </span>
            )}
          </div>
          <p
            className={`text-ink/60 leading-relaxed group-hover:text-ink/75 transition-colors duration-300 ${
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
    <section id="why" className="relative py-28 md:py-32 bg-paper overflow-hidden">
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-teal/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-deep block mb-4">
              Why SoJournalo
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-tight mb-5">
              The Standard for <span className="italic text-brand-gradient">Arabic Web3</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-ink/65 text-lg max-w-xl mx-auto leading-relaxed">
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
