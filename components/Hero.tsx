"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ConstellationField, OrbitDecor } from "./ui/Motifs";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stats = [
  { value: "600M+", label: "Arabic speakers reachable" },
  { value: "MENA", label: "Fastest-growing Web3 region" },
  { value: "24/7", label: "Native community coverage" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-paper pt-28 pb-16">
      {/* Ambient watercolor-style washes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-indigo/10 blur-[130px]" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal/10 blur-[130px]" />
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo/6 blur-[110px]" />
      </div>

      {/* Constellation motif, echoing the brand mark */}
      <ConstellationField
        className="absolute top-16 left-0 w-full h-[220px] z-0"
        color="#15212F"
        accent="#259C93"
        opacity={0.3}
      />
      <OrbitDecor
        className="hidden lg:block absolute -right-10 top-24 w-64 h-64 z-0"
        color="#15212F"
        accent="#259C93"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-teal-deep text-xs font-semibold tracking-[0.15em] uppercase">
              Web3 Awareness for the Arab World
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-6 text-ink"
        >
          <span>Building Strong</span>
          <br />
          <span>Arabic Communities</span>
          <br />
          <span className="italic text-brand-gradient">For Web3 Projects.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-ink/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          SoJournalo helps Web3 brands expand across the{" "}
          <span className="text-ink font-medium">MENA region</span> through localized
          marketing, community growth, strategic content, and{" "}
          <span className="text-ink font-medium">culturally-native communication.</span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group px-8 py-4 rounded-xl bg-ink text-paper font-semibold text-base shadow-[0_10px_30px_rgba(21,33,47,0.2)] hover:bg-teal-deep transition-colors duration-300 w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            Book a Call
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-xl glass text-ink/85 hover:text-ink font-semibold text-base transition-all duration-300 w-full sm:w-auto"
          >
            View Services
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 flex items-center justify-center gap-6 sm:gap-12 flex-wrap"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-12">
              <div className="text-center">
                <div className="font-display text-xl sm:text-2xl font-semibold text-teal-deep leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-ink/50 text-xs tracking-wide whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-ink/12" aria-hidden="true" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
    </section>
  );
}
