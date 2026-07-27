import { InfiniteRibbon } from "./InfiniteRibbon"

export function BrandMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-primary)] py-8 md:py-16 flex flex-col justify-center border-b border-[var(--color-champagne)]/10">
      {/* Container to handle the rotation safely without breaking layout */}
      <div className="relative h-[100px] md:h-[140px] w-full flex items-center justify-center">
        
        {/* Secondary Ribbon (Behind) */}
        <InfiniteRibbon 
          className="absolute z-0 bg-[var(--color-text-primary)] text-[var(--color-champagne)] py-3 md:py-4 text-base md:text-2xl font-serif uppercase tracking-[0.2em]" 
          duration={150} 
          reverse={true} 
          rotation={-2}
        >
          Destination Weddings • Red Carpet Glamour • Bespoke Bridal Looks • Editorial Beauty • Celebrity Artistry • Flawless Base • 
        </InfiniteRibbon>

        {/* Primary Ribbon (Front) */}
        <InfiniteRibbon 
          className="absolute z-10 bg-[var(--color-champagne)] text-[var(--color-bg-primary)] py-3 md:py-4 text-base md:text-2xl font-serif uppercase tracking-[0.2em] shadow-2xl shadow-[var(--color-champagne)]/20" 
          duration={130} 
          rotation={3}
        >
          Luxury Bridal Makeup • Global Artistry • Couture Styling • Signature Enhancements • High-Fashion Aesthetics • 
        </InfiniteRibbon>

      </div>
    </section>
  )
}
