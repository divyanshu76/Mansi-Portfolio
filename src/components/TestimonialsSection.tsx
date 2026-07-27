"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    text: "Mansi's artistry is unparalleled. She perfectly balanced my traditional vision with a modern, flawless finish that lasted through tears and dancing. Truly magical.",
    image: "https://images.unsplash.com/photo-1617261895697-a7eb21e51381?q=80&w=800&auto=format&fit=crop",
    name: "Aanya Sharma",
    role: "Sabyasachi Bride",
  },
  {
    text: "From the initial trial to the final touch-up, Mansi was a calming presence. Her attention to detail and luxury approach made me feel like an absolute queen.",
    image: "https://images.unsplash.com/photo-1595955685740-42ec8fb204f1?q=80&w=800&auto=format&fit=crop",
    name: "Rhea Kapoor",
    role: "Destination Bride",
  },
  {
    text: "I've worked with many artists, but Mansi's understanding of skin, light, and high-fashion aesthetics sets her apart. Her couture beauty work is stunning.",
    image: "https://images.unsplash.com/photo-1531749870191-4c74cbba1a88?q=80&w=800&auto=format&fit=crop",
    name: "Ishita Verma",
    role: "Editorial Model",
  },
  {
    text: "The premium experience from start to finish. The bespoke makeup design felt incredibly personalized and lasted all night without feeling heavy.",
    image: "https://images.unsplash.com/photo-1583526978415-38165b53eef6?q=80&w=800&auto=format&fit=crop",
    name: "Meera Singh",
    role: "Cocktail Reception",
  },
  {
    text: "Finding someone who understands my skin tone and enhances my features naturally was so important. Mansi delivered beyond my wildest dreams.",
    image: "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?q=80&w=800&auto=format&fit=crop",
    name: "Kavya Patel",
    role: "Engagement Bride",
  },
  {
    text: "Professional, punctual, and profoundly talented. Her global artistry techniques gave me that signature glow everyone was talking about.",
    image: "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=800&auto=format&fit=crop",
    name: "Neha Desai",
    role: "Reception Bride",
  },
  {
    text: "Her bridal masterclass was incredible, but experiencing her artistry firsthand was entirely different. A true perfectionist.",
    image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200246b14?q=80&w=800&auto=format&fit=crop",
    name: "Simran Ahluwalia",
    role: "Mehendi Bride",
  },
  {
    text: "I wanted a bold, editorial look for my reception, and Mansi executed it flawlessly. The eye makeup was an absolute work of art.",
    image: "https://images.unsplash.com/photo-1621784563330-e06b3a0e63de?q=80&w=800&auto=format&fit=crop",
    name: "Priyanka Joshi",
    role: "Reception Bride",
  },
  {
    text: "The luxury bridal experience is exactly what it sounds like. Seamless, stress-free, and absolutely beautiful results.",
    image: "https://images.unsplash.com/photo-1599842609872-0712f598e5f2?q=80&w=800&auto=format&fit=crop",
    name: "Anjali Reddy",
    role: "Haldi Bride",
  },
]

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials
  duration?: number
}) => {
  return (
    <div className={cn("overflow-hidden", props.className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-[var(--color-bg-primary)]"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 md:p-10 rounded-3xl border border-[var(--color-champagne)]/20 shadow-lg shadow-[var(--color-champagne)]/5 max-w-xs w-full bg-[var(--color-bg-primary)]"
                  key={i}
                >
                  <div className="text-[var(--color-text-primary)] font-serif text-lg leading-relaxed">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[var(--color-border)]/50">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border border-[var(--color-champagne)]/30"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-wide text-[var(--color-text-primary)]">
                        {name}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-[var(--color-champagne)] font-medium mt-0.5">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-24 relative overflow-hidden" id="testimonials">
      {/* Decorative background reflections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(229,178,153,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-[var(--color-champagne)]/30 py-1.5 px-6 rounded-full text-[var(--color-champagne)] text-sm tracking-widest uppercase font-medium bg-[var(--color-champagne)]/5">
              Testimonials
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light font-serif text-[var(--color-text-primary)] tracking-tighter mt-2 text-center">
            Client Love
          </h2>
          <p className="text-center mt-4 text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed">
            Hear from our brides and editorial clients about their luxury beauty transformations.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={30}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={27}
          />
        </div>
      </div>
    </section>
  )
}
