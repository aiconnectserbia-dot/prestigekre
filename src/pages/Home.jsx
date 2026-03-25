import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import BrandsSection from '@/components/home/BrandsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import ServicesSection from '@/components/home/ServicesSection';
import GallerySection from '@/components/home/GallerySection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';

export default function Home() {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prestige Kreč",
    "description": "Profesionalni molerski i gipsarski radovi u Beogradu. Specijalizovani za gletovanje, krečenje i dekorativne tehnike - Sahara, Travertino, Otocento, Marmorino, Velvet, Špatulat.",
    "image": "https://res.cloudinary.com/dnik9se1m/image/upload/v1774472430/logo_prestige_krec_jsqvmy.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beograd",
      "addressCountry": "RS"
    },
    "telephone": "+381632428849",
    "email": "joksimovicboro@gmail.com",
    "priceRange": "$$",
    "openingHours": "Mo-Sa 08:00-20:00",
    "url": window.location.href,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "44.787197",
        "longitude": "20.457273"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Molerske i gipsarske usluge",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gletovanje zidova",
            "description": "Profesionalno gletovanje i priprema zidova za krečenje"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Krečenje prostora",
            "description": "Kvalitetno krečenje stambenih i poslovnih prostora"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dekorativne tehnike",
            "description": "Sahara, Travertino, Otocento, Marmorino, Velvet, Špatulat tehnike"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gipsarski radovi",
            "description": "Kompleksni gipsarski radovi i adaptacija prostora"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "200"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <html lang="sr" />
        <title>Prestige Kreč - Gletovanje, Krečenje i Dekorativne Tehnike | Beograd</title>
        <meta name="description" content="Profesionalni molerski i gipsarski radovi u Beogradu. Specijalizovani za gletovanje, krečenje i vrhunske dekorativne tehnike - Sahara, Travertino, Otocento, Marmorino. ☎ 063 242 849" />
        <meta name="keywords" content="gletovanje beograd, krečenje beograd, molerski radovi, gipsarski radovi, dekorativne tehnike, sahara tehnika, travertino, otocento, marmorino, velvet, špatulat, molerski radovi cena, farbanje prostora, adaptacija beograd" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Prestige Kreč - Gletovanje, Krečenje i Dekorativne Tehnike Beograd" />
        <meta property="og:description" content="Profesionalni molerski i gipsarski radovi. 10+ godina iskustva, 200+ projekata. Specijalizovani za gletovanje, krečenje i dekorativne tehnike." />
        <meta property="og:image" content="https://res.cloudinary.com/dnik9se1m/image/upload/v1774472430/logo_prestige_krec_jsqvmy.png" />
        <meta property="og:locale" content="sr_RS" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="RS-00" />
        <meta name="geo.placename" content="Beograd" />
        <meta name="geo.position" content="44.787197;20.457273" />
        <meta name="ICBM" content="44.787197, 20.457273" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Prestige Kreč" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>

      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ServicesSection />
      <BeforeAfterSection />
      <GallerySection />
    </div>
  );
}