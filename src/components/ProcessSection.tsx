"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const processSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin with a deep dive into your vision, personal style, and the aesthetic of your event to ensure perfect alignment.",
  },
  {
    num: "02",
    title: "Skin Analysis",
    desc: "A comprehensive assessment of your skin type and condition, allowing us to select the optimal prep and products for a flawless base.",
  },
  {
    num: "03",
    title: "Makeup Trial",
    desc: "An exclusive session where we bring your vision to life, testing techniques and shades to finalize your signature look.",
  },
  {
    num: "04",
    title: "Wedding Prep",
    desc: "Detailed scheduling and a curated skincare regimen in the weeks leading up to your event for a naturally radiant glow.",
  },
  {
    num: "05",
    title: "Luxury Artistry",
    desc: "On the day of your event, experience our premium, calm, and meticulous application process designed for longevity and HD cameras.",
  },
  {
    num: "06",
    title: "Final Reveal",
    desc: "The breathtaking moment you see your flawless transformation, complete with touch-up kit provisions for absolute perfection all night.",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative w-full py-[var(--spacing-section)] bg-[var(--color-bg-primary)] overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-champagne)] rounded-full mix-blend-multiply opacity-[0.04] filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-rose-gold)] rounded-full mix-blend-multiply opacity-[0.03] filter blur-[100px] pointer-events-none" />

      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div 
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-8 h-px bg-[var(--color-champagne)]" />
            <span className="label-luxury text-[var(--color-text-secondary)]">
              OUR APPROACH
            </span>
            <div className="w-8 h-px bg-[var(--color-champagne)]" />
          </motion.div>
          
          <motion.h2 
            className="heading-scene font-light text-[#2A211C]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The Luxury Process
          </motion.h2>
        </div>

        {/* Process Cards Grid */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Animated Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[70px] left-8 right-8 h-px bg-[var(--color-border)] z-0">
            <motion.div 
              className="h-full bg-[var(--color-champagne)] origin-left"
              style={{ scaleX: pathProgress }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => {
              return (
                <motion.div
                  key={step.num}
                  className="group relative bg-[#FFFFFF] border border-[#2A211C]/5 rounded-3xl p-8 sm:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(42,33,28,0.04)] hover:border-[var(--color-champagne)]/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Step Number Badge - Positioned safely above text to prevent overlap */}
                  <div className="w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] border border-[#2A211C]/5 flex items-center justify-center mb-6 shadow-sm transition-colors duration-500 group-hover:border-[var(--color-champagne)]/50 group-hover:bg-[#2A211C]">
                    <span className="text-sm font-[family-name:var(--font-serif)] text-[var(--color-text-primary)] group-hover:text-white transition-colors duration-500">
                      {step.num}
                    </span>
                  </div>
                  
                  {/* Card Content */}
                  <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-serif)] text-[#2A211C] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-[#6B5D52] font-light">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
