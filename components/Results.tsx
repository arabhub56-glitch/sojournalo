"use client";

import Reveal from "./ui/Reveal";

const metrics = [
  {
    value: "40x",
    label: "Typical Telegram growth in the first 90 days",
    detail: "Measured from campaign kickoff to a fully moderated, active community.",
  },
  {
    value: "92%",
    label: "Members still active after 6 months",
    detail: "We optimize for retention and quality, not one-time follower spikes.",
  },
  {
    value: "15+",
    label: "Web3 ecosystems launched across MENA",
    detail: "DeFi, L1/L2, NFT, and gaming projects introduced to Arabic audiences.",
  },
  {
    value: "<24h",
    label: "Average community response time",
    detail: "Round-the-clock native moderation, every day of the week.",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative py-28 md:py-32 bg-paper-deep overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-deep block mb-4">
                Track Record
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-tight">
                Growth That Shows Up{" "}
                <span className="italic text-brand-gradient">In The Numbers.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-ink/65 text-lg leading-relaxed">
                We don&apos;t optimize for vanity follower counts. Every engagement is
                measured against retention, sentiment, and how much of your community
                is genuinely active a quarter later.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/8 rounded-2xl overflow-hidden">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08} className="h-full">
              <div className="h-full bg-paper-card px-7 py-9 hover:bg-paper-deep transition-colors duration-300 group">
                <div className="font-display text-4xl md:text-5xl font-semibold text-teal-deep mb-4 leading-none">
                  {metric.value}
                </div>
                <div className="text-ink font-semibold text-sm mb-2 leading-snug">
                  {metric.label}
                </div>
                <div className="text-ink/55 text-xs leading-relaxed group-hover:text-ink/70 transition-colors">
                  {metric.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
