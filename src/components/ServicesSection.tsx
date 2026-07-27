"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Bespoke Bridal Couture",
    subtitle: "Bridal Artistry",
    desc: "A signature luxury bridal look crafted for you. Using soft highlights, radiant base tones, and sophisticated design elements that capture your essence on your special day.",
    colorTheme: "from-[#291b15] to-[#140e0c]",
    image: "/services-bridal-1.png",
  },
  {
    num: "02",
    title: "Editorial & High Fashion",
    subtitle: "Fashion Artistry",
    desc: "Bold concepts and pristine execution tailored for high-definition photography, brand campaigns, and runway elegance. Structured to withstand camera flash and lighting setups.",
    colorTheme: "from-[#1d1f2b] to-[#0e1017]",
    image: "/services-editorial-1.png",
  },
  {
    num: "03",
    title: "Airbrush & HD Definition",
    subtitle: "Precision Finish",
    desc: "Flawless, weightless, and exceptionally long-lasting HD definition makeup. Crafted with premium airbrush techniques to achieve an air-brushed, natural skin effect.",
    colorTheme: "from-[#222722] to-[#111411]",
    image: "/services-event-1.png",
  },
];

function ServiceBlock({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Alternating positions
  const isEven = index % 2 === 0;

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center justify-between gap-12 lg:gap-24 min-h-[70vh] relative`}
    >
      {/* Visual / Image Block */}
      <motion.div 
        className="w-full lg:w-[50%] aspect-[4/3] relative rounded-[2rem] overflow-hidden shadow-elevated group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y: imageY }}
        >
          {/* Real placeholder image instead of gradient */}
          <Image 
            src={service.image} 
            alt={service.title}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-[var(--ease-luxury)] group-hover:scale-[1.05]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        
        {/* Soft shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-40 pointer-events-none" />

        {/* Large Glass Service Number */}
        <span className="absolute top-6 left-6 text-7xl font-[family-name:var(--font-display)] text-[var(--color-champagne)] opacity-30 font-light select-none transition-transform duration-700 group-hover:-translate-y-2">
          {service.num}
        </span>
      </motion.div>

      {/* Text / Copy Block */}
      <motion.div
        className="w-full lg:w-[42%] flex flex-col items-start"
        style={{ y: textY }}
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="label-luxury mb-4">{service.subtitle}</span>
        
        <h3 className="heading-scene mb-6 text-3xl sm:text-4xl font-light">
          {service.title}
        </h3>
        
        <p className="body-luxury mb-8">
          {service.desc}
        </p>

        {/* Exclusive CTA Button */}
        <a
          href="#booking"
          className="group relative inline-flex items-center gap-3 py-3 px-6 rounded-full border border-[var(--color-border)] label-luxury text-xs text-[var(--color-text-secondary)] transition-all duration-500 hover:border-[var(--color-champagne)] hover:text-[var(--color-champagne)]"
        >
          <span>Book Consultation</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-[var(--spacing-scene)] overflow-hidden"
    >
      <div className="container-luxury relative z-10">
        
        {/* Header Block */}
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="divider-luxury" />
            <span className="label-luxury">Artistry Catalogue</span>
            <div className="divider-luxury" />
          </div>
          <h2 className="heading-scene font-light">
            Luxury Services
          </h2>
        </div>

        {/* Services List (Alternating blocks) */}
        <div className="flex flex-col gap-[var(--spacing-scene)]">
          {services.map((service, index) => (
            <ServiceBlock key={service.num} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
