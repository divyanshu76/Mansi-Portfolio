"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if shown in this session
    const hasShown = sessionStorage.getItem("mansi_preloader_shown");
    
    if (hasShown) {
      setIsLoading(false);
      setShouldRender(true);
      return;
    }

    setShouldRender(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("mansi_preloader_shown", "true");
    }, 3200); // slightly longer to appreciate the premium animation sequence

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF6F1] select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated Ornament Crest */}
          <motion.div
            className="mb-8 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 48 48" 
              fill="none" 
              className="text-[var(--color-champagne)]"
            >
              {/* Luxury Monogram Ornament / Diamond star */}
              <motion.path 
                d="M24 4L27.5 17.5L41 21L27.5 24.5L24 38L20.5 24.5L7 21L20.5 17.5L24 4Z" 
                stroke="currentColor" 
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.circle 
                cx="24" 
                cy="21" 
                r="3" 
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              />
            </svg>
          </motion.div>

          {/* Wordmark Reveal */}
          <div className="flex flex-col items-center relative overflow-hidden px-8 pb-4 text-center">
            <motion.h1 
              className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl font-light text-[#2A211C] tracking-[0.3em] uppercase relative z-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              Mansi
            </motion.h1>
            
            <motion.p
              className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.4em] text-[#6B5D52] mt-3 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              Luxury Artistry
            </motion.p>
          </div>

          {/* Minimal Elegant Progress Bar */}
          <div className="absolute bottom-24 w-40 h-[1px] bg-[#2A211C]/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-[var(--color-champagne)] origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>

          {/* Silent Indicator */}
          <div className="absolute bottom-12">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#6B5D52]/50 font-medium">
              EST. 2018
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
