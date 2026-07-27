"use client";

import { motion } from "framer-motion";
import { ArrowUp, Instagram, Mail, MessageCircle, MapPin, Phone } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full pt-[var(--spacing-scene)] pb-12 overflow-hidden border-t border-[var(--color-border)]"
      style={{ background: "var(--color-bg-primary)" }}
    >
      {/* Background soft reflections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(229,178,153,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* UPPER: Large Editorial Callout (Scene 13) */}
        <div className="flex flex-col items-center text-center mb-24">
          <blockquote className="heading-scene font-light max-w-4xl leading-tight mb-8">
            Every face tells a story.
            <br />
            Let's create <span className="italic font-[family-name:var(--font-display)] text-[var(--color-champagne)]">yours</span>.
          </blockquote>
          
          <a
            href="#booking"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-champagne)] text-[var(--color-charcoal)] rounded-full label-luxury overflow-hidden transition-all duration-500 hover:shadow-glow"
          >
            <span className="relative z-10">Reserve Your Date</span>
            <span className="absolute inset-0 bg-[var(--color-nude)] scale-x-0 origin-left transition-transform duration-500 ease-[var(--ease-luxury)] group-hover:scale-x-100" />
          </a>
        </div>

        <div className="divider-luxury w-full mb-16 opacity-10" />

        {/* MIDDLE: Links / Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 items-start">
          
          {/* Brand Info (Col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <span className="font-[family-name:var(--font-serif)] text-3xl font-light text-[var(--color-ivory)]">
              Mansi
            </span>
            <p className="body-luxury text-sm max-w-xs">
              Crafting premium couture beauty and luxury bridal transformations globally.
            </p>
          </div>

          {/* Navigation Links (Col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="label-luxury text-[0.6rem] text-[var(--color-champagne)]">Explore</span>
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Home</a>
              <a href="#about" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">About</a>
              <a href="#services" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Services</a>
              <a href="#portfolio" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Portfolio</a>
            </div>
          </div>

          {/* Contact Links (Col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="label-luxury text-[0.6rem] text-[var(--color-champagne)]">Direct Contact</span>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+919999999999" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> +91 99999 99999
              </a>
              <a href="mailto:info@mansibeauty.com" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> info@mansibeauty.com
              </a>
            </div>
          </div>

          {/* Social Connect (Col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="label-luxury text-[0.6rem] text-[var(--color-champagne)]">Social channels</span>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-champagne)] hover:border-[var(--color-champagne)] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-champagne)] hover:border-[var(--color-champagne)] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM: Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-white/[0.04]">
          <span className="text-[0.65rem] text-[var(--color-text-muted)] tracking-wider">
            © {new Date().getFullYear()} Mansi Beauty. All Rights Reserved. Crafted with absolute premium quality.
          </span>

          <button
            onClick={scrollToTop}
            className="group w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-champagne)] hover:border-[var(--color-champagne)] transition-all duration-300 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
