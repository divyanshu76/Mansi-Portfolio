"use client";

import { motion } from "framer-motion";
import MagneticCarousel from "./MagneticCarousel";

export function SignatureLooksSection() {
  return (
    <section className="relative w-full py-[var(--spacing-section)] bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="container-luxury flex flex-col items-center justify-center text-center">
        
        {/* Eyebrow Label */}
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-8 h-px bg-[var(--color-champagne)]" />
          <span className="label-luxury text-[var(--color-text-secondary)]">
            SIGNATURE LOOKS
          </span>
          <div className="w-8 h-px bg-[var(--color-champagne)]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="heading-section mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          The Canvas Collection
        </motion.h2>

        {/* Interactive Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[500px] mb-8"
        >
          <MagneticCarousel />
        </motion.div>

        {/* Instruction Line */}
        <motion.p
          className="body-luxury text-[var(--color-text-secondary)] text-sm italic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Hover to magnify, click to expand &rarr;
        </motion.p>
        
      </div>
    </section>
  );
}
