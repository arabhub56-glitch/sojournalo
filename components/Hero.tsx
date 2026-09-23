"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number; y: number; r: number;
      vx: number; vy: number; alpha: number; color: string;
    }[] = [];

    const colors = ["rgba(201,168,76,", "rgba(124,58,237,", "rgba(226,201,126,"];

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}

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
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#0B0B0D] pt-28 pb-16">
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#7C3AED]/5 blur-[100px]" />
      </div>

      {/* Animated grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Particles />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#E2C97E] text-xs font-semibold tracking-[0.15em] uppercase">
              Arabic Web3 Marketing Agency
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white">Building Strong</span>
          <br />
          <span className="text-white">Arabic Communities</span>
          <br />
          <span className="text-gold-gradient">For Web3 Projects.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          SO&apos;s Journal helps Web3 brands expand across the{" "}
          <span className="text-white font-medium">MENA region</span> through localized
          marketing, community growth, strategic content, and{" "}
          <span className="text-white font-medium">culturally-native communication.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,168,76,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-black font-bold text-base shadow-[0_0_25px_rgba(201,168,76,0.25)] transition-all duration-300 w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            Book a Call
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-xl glass text-white/85 hover:text-white font-semibold text-base transition-all duration-300 w-full sm:w-auto"
          >
            View Services
          </motion.a>
        </motion.div>

        {/* Trust stat strip */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex items-center justify-center gap-6 sm:gap-12 flex-wrap"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-12">
              <div className="text-center">
                <div className="font-display text-xl sm:text-2xl font-bold text-gold-gradient leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-white/45 text-xs tracking-wide whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-white/10" aria-hidden="true" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
