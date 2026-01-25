import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import TechniquesSection from '@/components/home/TechniquesSection';
import BrandsSection from '@/components/home/BrandsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import ServicesSection from '@/components/home/ServicesSection';
import GallerySection from '@/components/home/GallerySection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <TechniquesSection />
      <BrandsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ServicesSection />
      <GallerySection />
    </div>
  );
}