"use client";

import { Check, ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";

const tiers = [
  {
    name: "Starter",
    tagline: "For early-stage projects validating MENA fit",
    features: [
      "Native moderation on 1 platform",
      "Weekly Arabic content calendar",
      "Community health monitoring",
      "Monthly performance report",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "For projects scaling their Arabic community",
    features: [
      "Full Telegram + Twitter/X management",
      "Daily native content & campaigns",
      "Dedicated community manager",
      "AMA & educational event hosting",
      "Bi-weekly strategy calls",
    ],
    cta: "Book a Call",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For ecosystems expanding across the region",
    features: [
      "Multi-channel management at scale",
      "Custom campaign development",
      "Brand positioning & localization",
      "Dedicated account team",
      "Priority 24/7 support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-32 bg-paper overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-teal/6 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-deep block mb-4">
              Engagement Models
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-tight mb-5">
              Plans That Scale <span className="italic text-brand-gradient">With You</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-ink/65 text-lg max-w-xl mx-auto leading-relaxed">
              Every engagement is scoped to your stage and goals. These are starting
              points — book a call for a plan built around your project.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1} className="h-full">
              <div
                className={`relative h-full rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-paper-card border-2 border-teal/40 shadow-[0_20px_50px_rgba(37,156,147,0.14)] lg:-translate-y-4"
                    : "bg-paper-card border border-ink/8 hover:border-ink/15"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal-deep text-paper text-xs font-bold tracking-wide uppercase">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                  {tier.name}
                </h3>
                <p className="text-ink/55 text-sm leading-relaxed mb-6">
                  {tier.tagline}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="text-teal-deep flex-shrink-0 mt-0.5"
                      />
                      <span className="text-ink/75 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-ink text-paper hover:bg-teal-deep"
                      : "glass text-ink/85 hover:text-ink"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
