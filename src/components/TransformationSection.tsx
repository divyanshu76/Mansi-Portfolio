"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function TransformationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse x for glow tracking
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springGlowX = useSpring(glowX, { stiffness: 100, damping: 20 });
  const springGlowY = useSpring(glowY, { stiffness: 100, damping: 20 });

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
    // Track glow position relative to container
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      glowX.set(e.clientX - rect.left);
      glowY.set(e.clientY - rect.top);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section
      id="transformation"
      className="relative w-full py-[var(--spacing-scene)] overflow-hidden"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="divider-luxury" />
            <span className="label-luxury">The Signature Interaction</span>
            <div className="divider-luxury" />
          </div>
          <h2 className="heading-scene font-light mb-4">
            Bespoke Transformation
          </h2>
          <p className="body-luxury max-w-lg">
            Drag the luxury slider to reveal the delicate, high-end glow transitions. No filters. Real artistry.
          </p>
        </div>

        {/* Interactive Comparison Widget */}
        <div 
          className="relative max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden shadow-elevated cursor-col-resize select-none border border-[var(--color-border)]"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Base Layer: Before */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#1f1a18] to-[#12100e]">
            {/* Visual indicators / styling mock skin tone */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
            <div className="absolute bottom-6 left-6 glass px-5 py-2.5 rounded-full text-xs label-luxury select-none">
              Raw Canvas
            </div>
          </div>

          {/* Reveal Layer: After */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#291b15] to-[#140e0c] overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            {/* Ambient luxury glow representing makeup highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,178,153,0.18)_0%,transparent_50%)]" />
            
            <div className="absolute bottom-6 right-6 glass px-5 py-2.5 rounded-full text-xs label-luxury text-[var(--color-champagne)] border-[var(--color-champagne)]/20 select-none">
              Bespoke Glow
            </div>
          </div>

          {/* Slider Line Divider */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[var(--color-champagne)] to-transparent pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Interactive Handle Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border-[var(--color-champagne)]/30 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-champagne)]" />
            </div>
          </div>

          {/* Cursor Glow spotlight following mouse */}
          {isHovered && (
            <motion.div
              className="absolute pointer-events-none w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(229,178,153,0.04)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2"
              style={{ left: springGlowX, top: springGlowY }}
            />
          )}

        </div>

      </div>
    </section>
  );
}
