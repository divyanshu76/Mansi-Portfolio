"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Aanya Sen",
    wedding: "Udaipur Palace Ceremony",
    date: "November 2025",
    quote: "Mansi didn't just do my makeup; she captured my soul. Under the Udaipur sun, the base was flawless, glowing, and felt exactly like my second skin.",
    details: "Focusing on luminous glass skin, a warm rose-gold blush palette, and custom contoured highlights to catch the dramatic palace architecture lighting.",
    gradient: "from-[#2f221c] to-[#120a07]",
    image: "/bride-story-1.png",
  },
  {
    id: 2,
    name: "Rhea Kapoor",
    wedding: "The Taj Mahal Palace",
    date: "December 2025",
    quote: "I wanted a cinematic, classic Indian bridal glow but with a modern, high-fashion finish. Mansi executed it to absolute perfection.",
    details: "Deep champagne smokey eyes, flawless skin texture definition, and custom matte lip finishes that retained rich definition all night.",
    gradient: "from-[#232029] to-[#0c0a0f]",
    image: "/bride-story-2.png",
  },
];

export function BrideStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  return (
    <section
      id="stories"
      className="relative w-full py-[var(--spacing-scene)] overflow-hidden bg-[var(--color-bg-primary)]"
    >
      {/* Warm Wedding Lighting Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/10 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(183,110,121,0.03)_0%,transparent_70%)] filter blur-[60px]" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="divider-luxury" />
            <span className="label-luxury">The Experience</span>
            <div className="divider-luxury" />
          </div>
          <h2 className="heading-scene font-light">
            Bride Stories
          </h2>
        </div>

        {/* Large Story Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-5xl mx-auto">
          
          {/* LEFT: Cinematic Large Portrait Frame (Col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-elevated">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={stories[activeIndex].image}
                    alt={`Bride Story ${activeIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-40" />
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-6 left-6 flex gap-3">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-12 h-1 rounded-full transition-all duration-500 cursor-pointer ${
                    activeIndex === i ? "bg-[var(--color-champagne)]" : "bg-[var(--color-border)] hover:bg-[var(--color-text-secondary)]"
                  }`}
                  aria-label={`Go to story ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Document/Review Details (Col-span-7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="label-luxury text-[0.6rem]">{activeStory.wedding}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-champagne)]/40" />
                  <span className="label-luxury text-[0.6rem] text-[var(--color-text-secondary)]">{activeStory.date}</span>
                </div>

                <Quote className="w-10 h-10 text-[#E5B299] opacity-20 mb-6" />

                <blockquote className="heading-section text-2xl font-light leading-relaxed mb-8 text-[#FEFCF3]">
                  {activeStory.quote}
                </blockquote>

                <div className="divider-luxury w-16 mb-8" />

                <p className="body-luxury text-sm mb-6 max-w-xl text-[#A09080]">
                  {activeStory.details}
                </p>

                <cite className="not-italic">
                  <span className="text-lg font-[family-name:var(--font-serif)] font-medium text-[#E5B299] block">
                    {activeStory.name}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#A09080]">
                    Verified Mansi Bride
                  </span>
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
