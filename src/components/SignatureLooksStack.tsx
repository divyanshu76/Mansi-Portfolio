"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface SignatureLooksStackProps {
  images?: string[];
  cardWidth?: number;
  cardHeight?: number;
  cardRadius?: number;
  swipeThreshold?: number;
  tiltAngle?: number;
  xOffset?: number;
  scaleOffset?: number;
  className?: string;
}

const DEFAULT_IMAGES = [
  "/portfolio-bridal-1.png",
  "/portfolio-editorial-1.png",
  "/portfolio-runway-1.png",
  "/portfolio-bridal-2.png",
  "/portfolio-editorial-2.png",
];

export function SignatureLooksStack({
  images = DEFAULT_IMAGES,
  cardWidth = 300,
  cardHeight = 400,
  cardRadius = 24,
  swipeThreshold = 100,
  tiltAngle = 10,
  xOffset = 15,
  scaleOffset = 0.05,
  className = "",
}: SignatureLooksStackProps) {
  // We keep track of the images in a state array.
  // The LAST item in the array is rendered on TOP.
  const [cards, setCards] = useState([...images]);

  const moveToEnd = (fromIndex: number) => {
    setCards((prev) => {
      const newArray = [...prev];
      const [item] = newArray.splice(fromIndex, 1);
      // Put the dragged (top) item at the beginning of the array so it renders at the bottom
      newArray.unshift(item);
      return newArray;
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: cardWidth + xOffset * 2, // Account for offset spread
        height: cardHeight,
      }}
    >
      <AnimatePresence mode="popLayout">
        {cards.map((image, index) => {
          // Calculate how far from the top this card is (0 is top, 1 is just below, etc.)
          // Since the last item in the DOM is rendered on top, top card is cards.length - 1
          const isTop = index === cards.length - 1;
          const cardIndexFromTop = cards.length - 1 - index;

          return (
            <Card
              key={image}
              image={image}
              isTop={isTop}
              indexFromTop={cardIndexFromTop}
              onSwipe={() => moveToEnd(index)}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
              cardRadius={cardRadius}
              swipeThreshold={swipeThreshold}
              tiltAngle={tiltAngle}
              xOffset={xOffset}
              scaleOffset={scaleOffset}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

function Card({
  image,
  isTop,
  indexFromTop,
  onSwipe,
  cardWidth,
  cardHeight,
  cardRadius,
  swipeThreshold,
  tiltAngle,
  xOffset,
  scaleOffset,
}: {
  image: string;
  isTop: boolean;
  indexFromTop: number;
  onSwipe: () => void;
  cardWidth: number;
  cardHeight: number;
  cardRadius: number;
  swipeThreshold: number;
  tiltAngle: number;
  xOffset: number;
  scaleOffset: number;
}) {
  const x = useMotionValue(0);

  // Rotate based on drag x
  const rotate = useTransform(x, [-200, 200], [-tiltAngle, tiltAngle]);
  // Opacity fade when swiping far away
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (e: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > 500) {
      onSwipe();
    }
  };

  // Stack styling constraints (only show top 3-4 cards visibly)
  const isVisible = indexFromTop < 4;
  const currentScale = 1 - indexFromTop * scaleOffset;
  const currentXOffset = indexFromTop * xOffset;

  return (
    <motion.div
      className="absolute origin-bottom shadow-elevated"
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: cardRadius,
        backgroundColor: "rgba(245, 230, 220, 0.8)", // Fallback color matching light theme
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        zIndex: 100 - indexFromTop, // Ensure higher zIndex for items near the top
      }}
      animate={{
        scale: isVisible ? currentScale : 0.8,
        x: isTop ? 0 : currentXOffset,
        opacity: isVisible ? 1 : 0,
        zIndex: 100 - indexFromTop,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileDrag={{
        scale: 1.05,
        cursor: "grabbing",
        boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      layout
    >
      <div className="relative w-full h-full rounded-[inherit] overflow-hidden border border-[var(--color-border)]">
        {image ? (
          <Image
            src={image}
            alt="Signature Look"
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 100vw, 400px"
            priority={isTop}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--color-champagne)]">
            No Image
          </div>
        )}
      </div>
    </motion.div>
  );
}
