"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

const timelineMilestones = [
  { year: "2018", title: "Elite Bridal Launch", desc: "Setting a new standard for luxury bridal transformations." },
  { year: "2020", title: "Vogue India Feature", desc: "Recognized as a premier talent in contemporary beauty." },
  { year: "2023", title: "Global Artistry Award", desc: "Honored for innovation and cinematic editorial makeup." },
];

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax depth
  const portraitX = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), { stiffness: 60, damping: 25 });
  const portraitY = useSpring(useTransform(mouseY, [-1, 1], [-6, 6]), { stiffness: 60, damping: 25 });
  const badgeX = useSpring(useTransform(mouseX, [-1, 1], [15, -15]), { stiffness: 50, damping: 20 });
  const badgeY = useSpring(useTransform(mouseY, [-1, 1], [12, -12]), { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slow parallax elements on scroll
  const quoteY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const timelineY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen w-full py-[var(--spacing-scene)] overflow-hidden"
      style={{ background: "var(--color-bg-secondary)" }}
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(229,178,153,0.03)_0%,transparent_70%)] filter blur-[50px]" />
      </div>

      <div className="container-luxury relative z-10 flex flex-col justify-center">
        
        {/* UPPER PART: Quote Block (Scene 02: Beauty is an Art) */}
        <motion.div 
          className="mb-32 max-w-4xl"
          style={{ y: quoteY }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="label-luxury">Philosophy</span>
            <div className="divider-luxury" />
          </div>
          <h2 className="heading-scene mb-8">
            “Beauty isn't <span className="italic font-[family-name:var(--font-display)] text-[var(--color-charcoal)]">created</span>.
            <br />
            It is <span className="font-light">revealed</span>.”
          </h2>
          <p className="body-luxury max-w-2xl">
            Every face is a personal narrative of character, grace, and unique light. True luxury is not masking who you are, but illuminating your finest details with absolute precision.
          </p>
        </motion.div>

        {/* LOWER PART: Split Editorial Layout (Scene 03: Meet Mansi) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Portrait & Floating Badge (Lg: col-span-5) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-elevated"
              style={{ y: imageY }}
            >
              {/* Luxury Portrait Placeholder */}
              <div className="absolute inset-0">
                <Image 
                  src="/about-artist.png"
                  alt="Mansi Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent opacity-50" />
            </motion.div>

            {/* Floating Glass Achievement Card */}
            <motion.div
              className="glass absolute -bottom-6 -right-6 lg:-right-8 p-6 rounded-2xl max-w-[220px]"
              style={{ x: badgeX, y: badgeY }}
            >
              <div className="text-sm font-[family-name:var(--font-serif)] text-[var(--color-charcoal)] mb-2 font-medium">
                VOGUE BRIDAL ARTIST
              </div>
              <p className="text-[0.7rem] text-[var(--color-text-secondary)] leading-relaxed">
                Featured as one of the top luxury bridal experts for bespoke couture looks.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Timeline (Lg: col-span-7) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center h-full pt-8 lg:pt-0"
            style={{ y: timelineY }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="label-luxury">The Journey</span>
              <div className="divider-luxury" />
            </div>

            <div className="relative pl-8 border-l border-[rgba(229,178,153,0.15)] flex flex-col gap-12">
              {timelineMilestones.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Timeline Node */}
                  <span className="absolute -left-[37px] top-1.5 w-4.5 h-4.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-champagne)] flex items-center justify-center transition-all duration-500 group-hover:scale-125">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-champagne)]" />
                  </span>

                  <span className="text-xs font-[family-name:var(--font-serif)] text-[var(--color-text-secondary)] font-medium block mb-1">
                    {item.year}
                  </span>
                  <h4 className="heading-section text-lg mb-2 font-light">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
