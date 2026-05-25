"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Target,
  Users,
  Megaphone,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    number: "01",
    icon: Search,
    title: "Research & Analysis",
    description:
      "We deep-dive into your project, tokenomics, competitive landscape, and target MENA audience. We map existing community health, sentiment, and gaps — building a data-driven foundation for everything that follows.",
    tags: ["Audience Mapping", "Competitor Analysis", "Ecosystem Scan"],
  },
  {
    number: "02",
    icon: Target,
    title: "Market Positioning",
    description:
      "We define your project's narrative for the Arabic-speaking market — crafting messaging that resonates culturally, positions your brand with authority, and differentiates you from the noise.",
    tags: ["Brand Narrative", "Tone of Voice", "Cultural Adaptation"],
  },
  {
    number: "03",
    icon: Users,
    title: "Community Strategy",
    description:
      "We architect your community structure — from Telegram group hierarchy to Twitter/X content rhythm. Every channel is strategically aligned to nurture growth, trust, and long-term retention.",
    tags: ["Channel Architecture", "Moderation Framework", "Growth Roadmap"],
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Content & Campaign Execution",
    description:
      "We launch. Premium Arabic content goes live across channels, campaigns activate communities, and AMAs build credibility. Every piece of content is engineered to engage, educate, and convert.",
    tags: ["Content Calendar", "Campaign Launch", "AMA Events"],
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Growth Optimization",
    description:
      "We analyze, iterate, and scale. Using community analytics and engagement data, we continuously refine strategies to accelerate growth, improve retention, and maximize long-term impact across MENA.",
    tags: ["Analytics Review", "Strategy Iteration", "Scale & Expand"],
  },
];

function StepItem({
  step,
  index,
  total,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      {/* Desktop: alternating layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center min-h-[180px]">
        {/* Content — left for even, right for odd */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={isEven ? "text-right col-start-1" : "text-left col-start-2"}
        >
          <div className={`${isEven ? "ml-auto" : "mr-auto"} max-w-md`}>
            <span className="font-display text-5xl font-bold text-[#C9A84C]/10 block mb-2">
              {step.number}
            </span>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              {step.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {step.description}
            </p>
            <div
              className={`flex flex-wrap gap-2 ${
                isEven ? "justify-end" : "justify-start"
              }`}
            >
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center node — positioned absolutely over the center line */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#C9A84C]/30 flex items-center justify-center shadow-[0_0_30px_rgba(201,168,76,0.15)]">
            <Icon size={22} className="text-[#C9A84C]" />
          </div>
        </motion.div>
      </div>

      {/* Mobile layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:hidden flex gap-5"
      >
        <div className="flex flex-col items-center">
          <div className="w-11 h-11 rounded-xl bg-[#141414] border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(201,168,76,0.1)]">
            <Icon size={18} className="text-[#C9A84C]" />
          </div>
          {index < total - 1 && (
            <div className="w-px flex-1 mt-3 bg-gradient-to-b from-[#C9A84C]/20 to-transparent min-h-[40px]" />
          )}
        </div>
        <div className="pb-8">
          <span className="font-display text-3xl font-bold text-[#C9A84C]/15 block -mt-1 mb-1">
            {step.number}
          </span>
          <h3 className="font-display text-xl font-bold text-white mb-3">
            {step.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            {step.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-32 bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[600px] bg-[#7C3AED]/4 blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[400px] bg-[#C9A84C]/3 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] block mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            A Process Built to{" "}
            <span className="text-gold-gradient">Win in MENA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Five strategic phases that take your project from unknown to iconic
            in the Arabic Web3 space.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-32" />
    </section>
  );
}
