"use client";

import Reveal from "./Reveal";

export default function SectionKicker({
  label,
  heading,
  subhead,
  align = "center",
  accent = "gold",
}: {
  label: string;
  heading: React.ReactNode;
  subhead?: React.ReactNode;
  align?: "center" | "left";
  accent?: "gold" | "violet";
}) {
  const isCenter = align === "center";
  const accentClass = accent === "gold" ? "text-gold" : "text-violet-soft";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <Reveal>
        <span
          className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-4 ${accentClass}`}
        >
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {heading}
        </h2>
      </Reveal>
      {subhead && (
        <Reveal delay={0.2}>
          <p
            className={`text-white/65 text-lg leading-relaxed max-w-xl ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {subhead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
