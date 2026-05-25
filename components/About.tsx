"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  "No culturally-native communication strategy",
  "Weak Arabic community retention",
  "Generic content that fails to resonate",
  "Trust and education gaps in MENA markets",
  "Absence of localized branding and messaging",
];

const solutions = [
  "Strategic Arabic content tailored to Web3 audiences",
  "Native community management by MENA experts",
  "Long-term ecosystem growth frameworks",
  "Localized branding with cultural intelligence",
  "Educational engagement that builds lasting trust",
];

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <FadeInSection>
          <div className="flex justify-center mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
              The Problem We Solve
            </span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-6 text-white max-w-4xl mx-auto">
            Most Web3 Projects{" "}
            <span className="text-gold-gradient">Fail the Arab World.</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <p className="text-white/50 text-lg text-center max-w-2xl mx-auto mb-20 leading-relaxed">
            Despite{" "}
            <span className="text-[#C9A84C] font-semibold">600M+ Arabic speakers</span>{" "}
            representing one of the fastest-growing digital communities on the planet,
            most Web3 projects treat the MENA region as an afterthought.
          </p>
        </FadeInSection>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-2 gap-8" ref={ref}>
          {/* Problem card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl p-8 bg-[#141414] border border-white/5 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle size={18} className="text-red-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">The Reality</h3>
              </div>
              <div className="space-y-4">
                {problems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                    <span className="text-white/55 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative rounded-2xl p-8 bg-[#141414] border border-[#C9A84C]/10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A84C]/5 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">SO&apos;s Approach</h3>
              </div>
              <div className="space-y-4">
                {solutions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0 shadow-[0_0_6px_rgba(201,168,76,0.6)]" />
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat bar */}
        <FadeInSection delay={0.3}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { value: "600M+", label: "Arabic Speakers Globally" },
              { value: "MENA", label: "Fastest-Growing Web3 Market" },
              { value: "24/7", label: "Native Community Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#141414] px-8 py-8 text-center group hover:bg-[#1A1A1A] transition-colors"
              >
                <div className="font-display text-3xl font-bold text-gold-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>

      <div className="section-divider mt-32" />
    </section>
  );
}
