"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ConstellationField, OrbitDecor } from "./ui/Motifs";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-32 bg-navy overflow-hidden">
      {/* Cinematic background washes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-teal/10 blur-[150px]" />
        <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-indigo/20 blur-[120px]" />
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-indigo/20 blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-teal/40 to-transparent" />
      </div>

      <ConstellationField
        className="absolute bottom-0 left-0 w-full h-[200px] z-0"
        color="#F6F1E7"
        accent="#5FCFC3"
        opacity={0.22}
      />
      <OrbitDecor
        className="hidden lg:block absolute -left-16 -top-10 w-72 h-72 z-0"
        color="#F6F1E7"
        accent="#5FCFC3"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark">
            <Sparkles size={14} className="text-teal-light" />
            <span className="text-teal-light text-xs font-semibold tracking-[0.15em] uppercase">
              The Opportunity Is Now
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] tracking-tight mb-8"
        >
          <span className="text-paper block">The Middle East</span>
          <span className="italic text-teal-gradient block">Is Not a</span>
          <span className="text-paper block">Secondary Market.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-teal-light to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-paper/65 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12 font-light"
        >
          It&apos;s one of the most powerful{" "}
          <span className="text-paper/95 font-medium">emerging communities</span> in Web3.
          The projects that move now will define the region&apos;s ecosystem for years to come.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-10 py-5 rounded-2xl bg-teal-deep text-paper font-bold text-lg shadow-[0_0_40px_rgba(37,156,147,0.3)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Building With SoJournalo
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-8 flex-wrap"
        >
          {[
            "No long-term lock-in",
            "MENA-native team",
            "Results-focused approach",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-teal-light" />
              <span className="text-paper/60 text-sm">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
