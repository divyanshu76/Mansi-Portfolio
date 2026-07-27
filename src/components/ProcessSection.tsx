"use client"

import React from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"

interface CardProps {
  number: string
  title: string
  description: string
  className?: string
  rotate?: string
  colors?: {
    bg: string
    text: string
    border: string
  }
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
)

const Card = ({
  number,
  title,
  description,
  className,
  rotate,
  colors: customColors,
}: CardProps) => {
  const defaultColors = {
    bg: "bg-[var(--color-bg-primary)]",
    text: "text-[var(--color-text-primary)]",
    border: "border-[var(--color-champagne)]/40",
  }

  const bgColor = customColors?.bg || defaultColors.bg
  const textColor = customColors?.text || defaultColors.text
  const borderColor = customColors?.border || defaultColors.border

  return (
    <div
      className={`relative w-full md:w-[280px] transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-[#FFFFFF] p-2 rounded-[25px] shadow-[0px_10px_30px_0px_rgba(42,33,28,0.06)] border border-[#2A211C]/5">
        <Pin className={`w-8 h-8 text-[var(--color-champagne)] z-20 mb-6 mx-auto`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-[15px] p-6 h-full flex flex-col relative overflow-hidden shadow-inner shadow-white/50`}
        >
          <span
            className={`${textColor} text-5xl font-light font-serif mb-5 opacity-80`}
          >
            {number}
          </span>
          <h3 className="text-xl md:text-2xl font-serif text-[#2A211C] leading-tight mb-3">
            {title}
          </h3>
          <p className="text-[#6B5D52] text-sm leading-relaxed tracking-wide font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export interface Step {
  title: string
  description: string
  colors?: {
    bg: string
    text: string
    border: string
  }
}

export interface StepPosition {
  className?: string
  rotate?: string
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[15%]", rotate: "rotate-6" },
  {
    className: "md:absolute md:top-[120px] md:right-[15%]",
    rotate: "-rotate-6",
  },
  { className: "md:absolute md:top-[450px] md:left-[15%]", rotate: "rotate-6" },
  {
    className: "md:absolute md:top-[570px] md:right-[10%]",
    rotate: "-rotate-6",
  },
  { className: "md:absolute md:top-[850px] md:left-[15%]", rotate: "rotate-6" },
]

export function ProcessSection() {
  const features: Step[] = [
    {
      title: "Consultation",
      description:
        "We begin with a deep dive into your vision, personal style, and the aesthetic of your event to ensure perfect alignment.",
      colors: {
        bg: "bg-[var(--color-champagne)]/10",
        text: "text-[#2A211C]",
        border: "border-[var(--color-champagne)]/40",
      },
    },
    {
      title: "Signature Trial",
      description:
        "An exclusive session where we bring your vision to life, testing techniques and shades to finalize your signature look.",
      colors: {
        bg: "bg-[#FFFFFF]",
        text: "text-[#2A211C]",
        border: "border-[#2A211C]/10",
      },
    },
    {
      title: "Bridal Prep",
      description:
        "Detailed scheduling and a curated skincare regimen in the weeks leading up to your event for a naturally radiant glow.",
      colors: {
        bg: "bg-rose-50/50",
        text: "text-[#2A211C]",
        border: "border-rose-200/50",
      },
    },
    {
      title: "Luxury Artistry",
      description:
        "On the day of your event, experience our premium, calm, and meticulous application process designed for longevity.",
      colors: {
        bg: "bg-[var(--color-bg-primary)]",
        text: "text-[#2A211C]",
        border: "border-[var(--color-champagne)]/30",
      },
    },
    {
      title: "The Final Reveal",
      description:
        "The breathtaking moment you see your flawless transformation, complete with touch-up kit provisions for absolute perfection.",
      colors: {
        bg: "bg-[var(--color-champagne)]/20",
        text: "text-[#2A211C]",
        border: "border-[var(--color-champagne)]/50",
      },
    },
  ]

  const data = features
  const positions = DEFAULT_CARD_POSITIONS
  const height = 1130

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="process"
        className={`bg-[var(--color-bg-primary)] max-md:pt-16 max-md:pb-25 md:py-24 px-8 relative overflow-hidden`}
      >
        {/* Subtle grid background to match the original design's style, but elegant */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#2A211C 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        />

        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-champagne)] rounded-full mix-blend-multiply opacity-[0.04] filter blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 mb-20">
          <div className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[var(--color-champagne)]" />
              <span className="text-[var(--color-text-secondary)] uppercase tracking-[0.2em] text-xs font-semibold">
                Our Approach
              </span>
              <div className="w-8 h-px bg-[var(--color-champagne)]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light font-serif text-[var(--color-text-primary)] tracking-tighter mt-2">
              The Luxury Process
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[1000px] mx-auto flex flex-col space-y-8 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc
                    if (index === 0)
                      return "M 290 150 C 500 150, 550 270, 710 270" // 1 -> 2
                    if (index === 1)
                      return acc + " C 850 270, 500 350, 290 450" // 2 -> 3
                    if (index === 2)
                      return acc + " C 290 600, 550 720, 750 720" // 3 -> 4
                    if (index === 3)
                      return acc + " C 950 720, 500 800, 290 850" // 4 -> 5
                    return acc
                  }, "")
                  return (
                    <m.path
                      d={pathD}
                      stroke="var(--color-champagne)"
                      className="opacity-40"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140, // Multiple of 14 (8+6) for seamless loop
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length]

              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colors={step.colors}
                  rotate={position.rotate}
                  className={position.className}
                />
              )
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
