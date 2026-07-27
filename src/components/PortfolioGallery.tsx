"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Bridal", "Editorial", "Fashion"];

const portfolioItems = [
  {
    id: 1,
    title: "Couture Bridal Glow",
    category: "Bridal",
    size: "large", // vertical card
    gradient: "from-[#291b15] to-[#120e0c]",
    image: "/portfolio-bridal-1.png",
  },
  {
    id: 2,
    title: "Vogue India Concept",
    category: "Editorial",
    size: "medium", // horizontal card
    gradient: "from-[#1d1f2b] to-[#0e1017]",
    image: "/portfolio-editorial-1.png",
  },
  {
    id: 3,
    title: "Golden Hour Artistry",
    category: "Fashion",
    size: "small", // compact card
    gradient: "from-[#222722] to-[#111411]",
    image: "/portfolio-runway-1.png",
  },
  {
    id: 4,
    title: "Minimalist Grace",
    category: "Bridal",
    size: "small",
    gradient: "from-[#1a1412] to-[#0c0a09]",
    image: "/portfolio-bridal-2.png",
  },
  {
    id: 5,
    title: "Harper's Bazaar Session",
    category: "Editorial",
    size: "large",
    gradient: "from-[#201d29] to-[#0e0c12]",
    image: "/portfolio-editorial-2.png",
  },
  {
    id: 6,
    title: "Sleek Couture Finish",
    category: "Fashion",
    size: "medium",
    gradient: "from-[#182324] to-[#0c1212]",
    image: "/portfolio-runway-2.png",
  },
];

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <section
      id="portfolio"
      className="relative w-full py-[var(--spacing-scene)] overflow-hidden"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="label-luxury font-[500]">Lookbook</span>
              <div className="divider-luxury" />
            </div>
            <h2 className="heading-scene font-light">
              Editorial Portfolio
            </h2>
          </div>

          {/* Luxury Filter Menu */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`label-luxury text-[0.65rem] px-5 py-2.5 rounded-full border transition-all duration-500 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[var(--color-champagne)] text-[var(--color-charcoal)] border-[var(--color-champagne)] hover:shadow-glow"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Magazine Layout Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Custom span sizes to break the typical boring grid look
              let sizeClass = "col-span-1 aspect-[3/4]"; // Large/vertical default
              if (item.size === "medium") {
                sizeClass = "md:col-span-2 aspect-[16/9]"; // Horizontal card
              }

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative rounded-[2rem] overflow-hidden shadow-elevated group cursor-pointer ${sizeClass}`}
                >
                  {/* Real placeholder image instead of gradient */}
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1s] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Glass Details Card (Hover Sweep) */}
                  <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[var(--ease-luxury)]">
                    <span className="label-luxury text-[0.6rem] mb-2 block">
                      {item.category}
                    </span>
                    <h4 className="heading-section text-base font-light text-[var(--color-ivory)]">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
