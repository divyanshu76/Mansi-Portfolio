"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants
} from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.12,
    },
  },
};

const lineVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
  },
};

function FloatingBadge({
  value,
  label,
  delay,
  className,
}: {
  value: string;
  label: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute px-4 py-3 sm:px-6 sm:py-4 bg-[#FAF6F1]/90 backdrop-blur-md border border-[#2A211C]/10 rounded-2xl shadow-[0_8px_32px_rgba(42,33,28,0.06)] flex items-center gap-3 z-30 ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.8, delay: 1.2 + delay, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.8, delay: 1.2 + delay, ease: [0.16, 1, 0.3, 1] },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2 + delay,
        }
      }}
    >
      <span className="text-xl sm:text-3xl font-[family-name:var(--font-serif)] text-[var(--color-champagne)] font-semibold">
        {value}
      </span>
      <span className="text-[0.6rem] sm:text-xs uppercase tracking-widest text-[#2A211C] font-semibold leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Ref-scoped scroll listener for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax: Image moves slower than scroll
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Content fades out on scroll down
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <motion.section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] bg-[var(--color-bg-primary)] overflow-hidden flex items-center py-16 lg:py-0"
      style={{ opacity: contentOpacity, y: contentY }}
    >
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1E9DF]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(229,178,153,0.05)_0%,transparent_70%)] filter blur-[50px] sm:blur-[100px] pointer-events-none" />
      
      <div className="container-luxury relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 pt-12 md:pt-16">
        
        {/* LEFT COLUMN: TYPOGRAPHY */}
        <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left">
          <motion.div
            className="flex items-center gap-3 mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-8 h-[1px] bg-[var(--color-champagne)]" />
            <span className="text-[0.65rem] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#6B5D52]">
              Luxury Beauty Artistry
            </span>
          </motion.div>

          <motion.h1 
            className="text-[clamp(2.5rem,6vw,5.5rem)] sm:text-[clamp(3.5rem,7vw,7rem)] leading-[0.95] font-[family-name:var(--font-serif)] tracking-tight mb-6 sm:mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <span className="block overflow-hidden pb-1">
              <motion.span className="block text-[#2A211C] font-light" variants={lineVariants}>Beauty is</motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span className="block italic font-[family-name:var(--font-display)] text-[#2A211C] font-light" variants={lineVariants}>an art.</motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span className="block text-[#2A211C] font-light" variants={lineVariants}>You are</motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span className="block text-[#2A211C] font-light" variants={lineVariants}>the canvas.</motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-[#6B5D52] max-w-md leading-relaxed mb-8 sm:mb-10 font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            Experience premium bridal makeup and editorial styling. Elevating your natural elegance to craft timeless, captivating looks.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#booking"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2A211C] text-[#FAF6F1] rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[#E5B299] hover:text-[#2A211C] hover:shadow-lg active:scale-95"
            >
              Book Now
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#2A211C]/20 text-[#2A211C] rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:border-[#2A211C] hover:bg-white/80 active:scale-95"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: PORTRAIT */}
        <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-7 relative flex justify-center lg:justify-end items-center py-6 sm:py-12 lg:py-0">
          <motion.div 
            className="relative w-[75%] sm:w-[65%] lg:w-[85%] aspect-[3/4] max-w-[280px] sm:max-w-[360px] md:max-w-[420px] z-10"
            style={{ y: imageParallaxY }}
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Image Frame */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-[#2A211C]/5">
              <Image 
                src="/hero-model.png" 
                alt="Premium Bridal Makeup Artistry" 
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 70vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A211C]/20 via-transparent to-transparent mix-blend-multiply" />
            </div>

            {/* Badges - Configured safely so they don't get cut off on small viewports */}
            <FloatingBadge
              value="8+"
              label="Years of Artistry"
              delay={0}
              className="-top-4 -left-4 sm:top-8 sm:-left-12"
            />
            <FloatingBadge
              value="500+"
              label="Happy Brides"
              delay={0.2}
              className="-bottom-4 -right-4 sm:bottom-8 sm:-right-8"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
