"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, MessageCircle, MapPin } from "lucide-react";

export function BookingSection() {
  const [formState, setFormState] = useState({ name: "", email: "", date: "", details: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="booking"
      className="relative w-full py-[var(--spacing-scene)] overflow-hidden"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      {/* Background glowing effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(229,178,153,0.03)_0%,transparent_70%)] filter blur-[50px]" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="divider-luxury" />
            <span className="label-luxury">Exclusive Access</span>
            <div className="divider-luxury" />
          </div>
          <h2 className="heading-scene font-light mb-4">
            Book Your Artistry Experience
          </h2>
          <p className="body-luxury max-w-lg">
            Secure your date for an bespoke couture bridal or high-fashion editorial package. Limited availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* LEFT: Contact Channels & Location info (Col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="glass p-8 rounded-3xl flex flex-col gap-6">
              <h3 className="heading-section text-xl font-light text-[var(--color-charcoal)]">
                Direct Channels
              </h3>
              
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-champagne)]/30 hover:bg-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-champagne)]/10 flex items-center justify-center text-[var(--color-champagne)]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[0.6rem] label-luxury text-[var(--color-text-secondary)] block">WhatsApp</span>
                  <span className="text-sm font-medium text-[var(--color-ivory)]">Chat Instantly</span>
                </div>
              </a>

              <a 
                href="tel:+919999999999" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-champagne)]/30 hover:bg-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-champagne)]/10 flex items-center justify-center text-[var(--color-champagne)]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[0.6rem] label-luxury text-[var(--color-text-secondary)] block">Direct Call</span>
                  <span className="text-sm font-medium text-[var(--color-ivory)]">+91 99999 99999</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-[var(--color-border)]">
                <div className="w-10 h-10 rounded-full bg-[var(--color-champagne)]/10 flex items-center justify-center text-[var(--color-champagne)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[0.6rem] label-luxury text-[var(--color-text-secondary)] block">Studio Location</span>
                  <span className="text-sm font-medium text-[var(--color-ivory)]">New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Bespoke Booking Form (Col-span-7) */}
          <div className="lg:col-span-7">
            <div className="glass p-8 sm:p-10 rounded-3xl relative overflow-hidden min-h-[400px]">
              
              {mounted && (
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[0.6rem] label-luxury text-[var(--color-text-secondary)]">Your Name</label>
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Aanya Sen"
                          className="w-full bg-white/[0.03] border border-[var(--color-border)] rounded-xl py-3.5 px-4 text-sm text-[var(--color-ivory)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-champagne)]/60 focus:ring-1 focus:ring-[var(--color-champagne)]/30 transition-all duration-300"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[0.6rem] label-luxury text-[var(--color-text-secondary)]">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="e.g. aanya@example.com"
                          className="w-full bg-white/[0.03] border border-[var(--color-border)] rounded-xl py-3.5 px-4 text-sm text-[var(--color-ivory)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-champagne)]/60 focus:ring-1 focus:ring-[var(--color-champagne)]/30 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Date input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.6rem] label-luxury text-[var(--color-text-secondary)]">Preferred Date</label>
                      <input 
                        type="date" 
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="w-full bg-white/[0.03] border border-[var(--color-border)] rounded-xl py-3.5 px-4 text-sm text-[var(--color-ivory)] focus:outline-none focus:border-[var(--color-champagne)]/60 focus:ring-1 focus:ring-[var(--color-champagne)]/30 transition-all duration-300"
                      />
                    </div>

                    {/* Details input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.6rem] label-luxury text-[var(--color-text-secondary)]">Event Details</label>
                      <textarea 
                        rows={4}
                        value={formState.details}
                        onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                        placeholder="Share your aesthetic vision, wedding themes, or photoshoot style..."
                        className="w-full bg-white/[0.03] border border-[var(--color-border)] rounded-xl py-3.5 px-4 text-sm text-[var(--color-ivory)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-champagne)]/60 focus:ring-1 focus:ring-[var(--color-champagne)]/30 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center gap-3 w-full py-4 bg-[var(--color-champagne)] text-[var(--color-charcoal)] rounded-xl label-luxury overflow-hidden transition-all duration-500 hover:shadow-glow cursor-pointer mt-4"
                    >
                      <span className="relative z-10">Request Artistry Session</span>
                      <Send className="w-3.5 h-3.5 relative z-10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span className="absolute inset-0 bg-[var(--color-nude)] scale-x-0 origin-left transition-transform duration-500 ease-[var(--ease-luxury)] group-hover:scale-x-100" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="flex flex-col items-center text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="w-16 h-16 rounded-full bg-[var(--color-champagne)]/10 border border-[var(--color-champagne)]/30 flex items-center justify-center text-[var(--color-champagne)] mb-6">
                      <Send className="w-6 h-6 animate-pulse" />
                    </div>
                    <h4 className="heading-section text-xl mb-4 font-light text-[var(--color-charcoal)]">
                      Your Request is Received
                    </h4>
                    <p className="body-luxury text-sm max-w-sm">
                      Thank you, {formState.name}. We will review our availability and get back to you within 24 hours to schedule your luxury consultation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
