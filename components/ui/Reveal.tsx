"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Direction = "up" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  left: { x: -40 },
  right: { x: 40 },
  none: {},
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.7,
  margin = "-80px",
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
  margin?: string;
  className?: string;
  as?: "div" | "span";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: margin as `${number}px` });
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  if (reduceMotion) {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
