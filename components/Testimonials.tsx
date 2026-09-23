"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Khalid Al-Rashidi",
    role: "Co-Founder",
    company: "DeFi Protocol",
    avatar: "KR",
    avatarColor: "from-[#C9A84C] to-[#A07830]",
    text: "SoJournalo transformed how we engage with the Arabic-speaking world. Within three months, our Telegram went from 200 members to over 8,000 — with genuine, active participation. Their team speaks the language and lives the culture. There's no substitute for that.",
    stars: 5,
  },
  {
    name: "Fatima Al-Mansoori",
    role: "Head of Community",
    company: "Layer-1 Blockchain",
    avatar: "FA",
    avatarColor: "from-[#7C3AED] to-[#5B21B6]",
    text: "We tried three other agencies before SoJournalo. None of them understood that the MENA audience isn't just a translation problem — it's a cultural intelligence problem. SoJournalo solved it completely. Our Arabic community is now our most engaged globally.",
    stars: 5,
  },
  {
    name: "Omar Benali",
    role: "Ecosystem Lead",
    company: "Web3 Gaming Studio",
    avatar: "OB",
    avatarColor: "from-[#C9A84C] to-[#7C3AED]",
    text: "The quality of content SoJournalo produces in Arabic is genuinely world-class. It doesn't feel translated — it feels written by someone who grew up in the community. Our AMAs in Arabic became major events that the wider ecosystem started paying attention to.",
    stars: 5,
  },
  {
    name: "Yasmin Karimi",
    role: "CEO",
    company: "NFT Marketplace",
    avatar: "YK",
    avatarColor: "from-[#A78BFA] to-[#7C3AED]",
    text: "SoJournalo doesn't just manage our community — they protect it. The moderation standards are exceptional, the response quality is premium, and the growth has been consistent and organic. This is what true MENA expansion looks like.",
    stars: 5,
  },
  {
    name: "Ahmed Al-Saqqaf",
    role: "Founder",
    company: "DeFi Yield Protocol",
    avatar: "AA",
    avatarColor: "from-[#C9A84C] to-[#E2C97E]",
    text: "I was skeptical about investing heavily in Arabic community building — until SoJournalo showed me the numbers. The MENA audience they cultivated for us has some of the highest holder retention metrics in our entire ecosystem. The ROI speaks for itself.",
    stars: 5,
  },
  {
    name: "Nour El-Tayeb",
    role: "Head of Marketing",
    company: "Cross-Chain Bridge",
    avatar: "NT",
    avatarColor: "from-[#7C3AED] to-[#C9A84C]",
    text: "Partnering with SoJournalo was one of our best decisions. They don't just post content — they craft narratives that resonate deeply with Arabic Web3 audiences. Our brand recognition across MENA grew dramatically, and the community trust they built is priceless.",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-28 md:py-32 bg-[#0B0B0D] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#7C3AED]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] block mb-4"
          >
            What Clients Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            Trusted by{" "}
            <span className="text-gold-gradient">Web3 Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Founders, community leads, and ecosystem teams who've experienced
            the SoJournalo difference firsthand.
          </motion.p>
        </div>

        {/* Featured testimonial — large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative rounded-3xl p-10 md:p-14 bg-[#141416] border border-white/5 overflow-hidden">
            {/* Decorative quote icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote size={100} className="text-[#C9A84C]" />
            </div>
            {/* Ambient glow */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-[#C9A84C]/5 rounded-full blur-[80px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/75 text-xl md:text-2xl leading-relaxed font-light mb-8 max-w-4xl">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].avatarColor} flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(201,168,76,0.2)]`}
                  >
                    <span className="text-white font-bold text-sm">
                      {testimonials[current].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-base">
                      {testimonials[current].name}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonials[current].role} · {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                  aria-current={i === current}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-1.5 bg-[#C9A84C]"
                      : "w-1.5 h-1.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/20 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.button
              key={t.name}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={current === i}
              className={`text-left rounded-2xl p-6 border cursor-pointer transition-all duration-300 ${
                current === i
                  ? "bg-[#1A1A1D] border-[#C9A84C]/30"
                  : "bg-[#141416] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.role}</div>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed line-clamp-3">{t.text}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
