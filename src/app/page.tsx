import { SmoothScroll } from "@/components/SmoothScroll";
import { LuxuryCursor } from "@/components/LuxuryCursor";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BrandMarquee } from "@/components/BrandMarquee";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TransformationSection } from "@/components/TransformationSection";
import { SignatureLooksSection } from "@/components/SignatureLooksSection";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { BrideStories } from "@/components/BrideStories";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <LuxuryCursor />
      <Navigation />
      <main>
        <HeroSection />
        <BrandMarquee />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TransformationSection />
        <SignatureLooksSection />
        <PortfolioGallery />
        <BrideStories />
        <TestimonialsSection />
        <BookingSection />
        <Footer />
      </main>
      <BackToTop />
    </SmoothScroll>
  );
}
