"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionKicker from "./ui/SectionKicker";

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

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 md:py-32 bg-paper overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-indigo/6 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionKicker
          label="The Problem We Solve"
          heading={
            <>
              Most Web3 Projects{" "}
              <span className="italic text-brand-gradient">Fail the Arab World.</span>
            </>
          }
          subhead={
            <>
              Despite{" "}
              <span className="text-teal-deep font-semibold">600M+ Arabic speakers</span>{" "}
              representing one of the fastest-growing digital communities on the planet,
              most Web3 projects treat the MENA region as an afterthought.
            </>
          }
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl p-8 bg-paper-card border border-ink/8 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle size={18} className="text-red-500" />
                </div>
                <h3 className="font-display font-semibold text-xl text-ink">The Reality</h3>
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
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-ink/65 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative rounded-2xl p-8 bg-paper-card border border-teal/20 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal/6 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-teal/15 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-teal-deep" />
                </div>
                <h3 className="font-display font-semibold text-xl text-ink">SoJournalo&apos;s Approach</h3>
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
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    <span className="text-ink/80 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/8 rounded-2xl overflow-hidden">
            {[
              { value: "600M+", label: "Arabic Speakers Globally" },
              { value: "MENA", label: "Fastest-Growing Web3 Market" },
              { value: "24/7", label: "Native Community Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-paper-card px-8 py-8 text-center hover:bg-paper-deep transition-colors"
              >
                <div className="font-display text-3xl font-semibold text-teal-deep mb-1">
                  {stat.value}
                </div>
                <div className="text-ink/55 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
