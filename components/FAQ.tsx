"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./ui/Reveal";

const faqs = [
  {
    question: "Why does Arabic-specific marketing matter for Web3 projects?",
    answer:
      "Generic, translated content consistently underperforms in MENA. Arabic Web3 audiences respond to messaging that reflects local dialect, tone, and platform habits — not a literal translation of English copy. Native strategy is what turns passive followers into holders who stick around.",
  },
  {
    question: "How fast can you start growing our community?",
    answer:
      "Onboarding typically takes 3–5 days: research, positioning, and channel setup. Content and moderation go live within the first week, with visible engagement shifts inside the first 30 days.",
  },
  {
    question: "Do you only work with Telegram and Twitter/X?",
    answer:
      "Those are our core channels since that's where MENA Web3 communities live, but we also support Discord moderation, YouTube/TikTok localization, and AMA hosting across whichever platforms your audience actually uses.",
  },
  {
    question: "How do you measure success beyond follower counts?",
    answer:
      "We track retention, sentiment, response times, and active participation rate — not just growth. Every engagement includes a reporting cadence so you can see what's actually working, not just what's trending up.",
  },
  {
    question: "Can you handle content in both English and Arabic?",
    answer:
      "Yes. Most of our clients run a dual-language strategy — global English content paired with a distinct, culturally-adapted Arabic voice, not a direct translation of the same posts.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "We start with a discovery call to understand your project and goals, followed by an audience and competitor scan, a proposed channel strategy, and a kickoff call to align before content and moderation go live.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="border-b border-white/8">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-[#E2C97E] transition-colors">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <Plus size={16} className="text-[#C9A84C]" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/65 text-sm leading-relaxed pb-6 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-32 bg-[#0B0B0D] overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[#7C3AED]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold block mb-4">
              Common Questions
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl bg-[#141416] border border-white/5 px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
