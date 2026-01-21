import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    subtitle: 'Ulepšajte i osvežite Vaš prostor',
    title: ['Krečenje i moleraj', 'Dekorativne tehnike', 'Špatulat, Sahara,', 'Traventino i druge'],
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
  },
  {
    subtitle: 'Dodajte novu dimenziju Vašem stanu',
    title: ['Pregradni zidovi', 'i spušteni plafoni.', 'Dekor od gipsa', 'Gletovanje'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      {/* Border decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-amber-500" />
                <span className="text-amber-400 font-medium tracking-wide uppercase text-sm">
                  {slides[currentSlide].subtitle}
                </span>
              </div>

              <div className="space-y-2">
                {slides[currentSlide].title.map((line, idx) => (
                  <motion.h1
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                      idx === 0 || idx === 2 ? 'text-white' : 'text-amber-400'
                    }`}
                  >
                    {line}
                  </motion.h1>
                ))}
              </div>

              <div className="flex gap-4 pt-6">
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  Kontakt
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
                >
                  Naše usluge
                </Button>
              </div>

              {/* Experience badge */}
              <div className="flex items-center gap-4 pt-8">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-amber-400">10+</span>
                </div>
                <div>
                  <p className="text-white font-semibold">godina</p>
                  <p className="text-slate-400">Radnog iskustva</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right images */}
          <div className="relative hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-72 h-80 rounded-2xl overflow-hidden border-4 border-amber-500/30 shadow-2xl z-20">
                  <img
                    src={slides[currentSlide].image}
                    alt="Molerski radovi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-20 left-48 w-80 h-96 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl z-10">
                  <img
                    src={slides[currentSlide].image2}
                    alt="Enterijer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative shape */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-amber-500/30 rounded-full" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-amber-500/50 flex items-center justify-center text-amber-400 hover:bg-amber-500/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-amber-500/50 flex items-center justify-center text-amber-400 hover:bg-amber-500/20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 right-10 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-amber-500 w-8' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}