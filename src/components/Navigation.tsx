"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#booking" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLDivElement>(null);
  
  // Track state in a ref to avoid React re-renders on every scroll tick
  const scrollState = useRef({ isScrolled: false, isVisible: true });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    let isScrolled = false;
    let isVisible = true;

    if (latest > 50) {
      isScrolled = true;
    }
    
    // Only apply DOM updates when state actually changes
    if (scrollState.current.isScrolled !== isScrolled) {
      scrollState.current = { isScrolled, isVisible: true };
      
      if (navRef.current) {
        if (isScrolled) {
          navRef.current.style.backgroundColor = "rgba(250, 246, 241, 0.5)";
          navRef.current.style.backdropFilter = "blur(24px)";
          navRef.current.style.borderBottomColor = "rgba(42, 33, 28, 0.1)";
          navRef.current.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.03)";
        } else {
          navRef.current.style.backgroundColor = "transparent";
          navRef.current.style.backdropFilter = "blur(0px)";
          navRef.current.style.borderBottomColor = "transparent";
          navRef.current.style.boxShadow = "none";
        }
      }
    }
  });

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-500 ease-[var(--ease-luxury)]"
        style={{ backgroundColor: "transparent", borderBottomColor: "transparent" }}
      >
        <div className="container-luxury flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="relative z-10" onClick={() => setMobileOpen(false)}>
            <span
              className="font-[family-name:var(--font-serif)] text-2xl font-light tracking-wide"
              style={{ color: "var(--color-text-primary)" }}
            >
              Mansi.
            </span>
            <span
              className="block text-[0.55rem] uppercase tracking-[0.4em] font-light mt-[-2px]"
              style={{ color: "var(--color-champagne)" }}
            >
              Beauty Artist
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="label-luxury text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-champagne)] transition-all duration-500 ease-[var(--ease-luxury)] group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="hidden md:block label-luxury px-6 py-2.5 border border-[var(--color-border)] rounded-full transition-all duration-500 hover:bg-[var(--color-champagne)] hover:text-[var(--color-charcoal)] hover:border-[var(--color-champagne)]"
          >
            Book Now
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-end gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-px bg-[var(--color-text-primary)] origin-center"
              animate={mobileOpen ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }}
            />
            <motion.span
              className="block h-px bg-[var(--color-text-primary)]"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: 24 }}
            />
            <motion.span
              className="block h-px bg-[var(--color-text-primary)] origin-center"
              animate={mobileOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 20 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-[family-name:var(--font-serif)] text-3xl font-light text-[var(--color-text-primary)] hover:text-[var(--color-champagne)] transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
