"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Cinematic background glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large violet center bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#7C3AED]/12 blur-[150px]" />
        {/* Gold left */}
        <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
        {/* Gold right */}
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
        {/* Top accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#C9A84C]/30 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10" ref={ref}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold border border-[#C9A84C]/20">
            <Sparkles size={14} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.15em] uppercase">
              The Opportunity Is Now
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight mb-8"
        >
          <span className="text-white block">The Middle East</span>
          <span className="text-gold-gradient block">Is Not a</span>
          <span className="text-white block">Secondary Market.</span>
        </motion.h2>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-8"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/55 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12 font-light"
        >
          It&apos;s one of the most powerful{" "}
          <span className="text-white/90 font-medium">emerging communities</span> in Web3.
          The projects that move now will define the region&apos;s ecosystem for years to come.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:contact@sosjournal.com"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(201,168,76,0.45), 0 0 120px rgba(201,168,76,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C9A84C] via-[#E2C97E] to-[#C9A84C] text-black font-bold text-lg shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Building With SO&apos;s Journal
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </span>
            {/* Shimmer */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.a>
        </motion.div>

        {/* Trust signals */}
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
              <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
              <span className="text-white/35 text-sm">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
