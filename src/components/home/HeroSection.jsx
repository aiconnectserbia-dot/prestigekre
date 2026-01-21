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
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen bg-stone-100 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(120, 53, 15, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-amber-100"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-[2px] bg-amber-800" />
                <span className="text-amber-800 font-semibold tracking-wide uppercase text-xs">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              <div className="space-y-3 mb-6">
                {slides[currentSlide].title.map((line, idx) => (
                  <motion.h1
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    className={`text-4xl md:text-5xl font-bold leading-tight ${
                      idx === 0 || idx === 2 ? 'text-stone-900' : 'text-amber-800'
                    }`}
                  >
                    {line}
                  </motion.h1>
                ))}
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-stone-600 text-lg leading-relaxed mb-8"
              >
                Profesionalni završni radovi vrhunskog kvaliteta. Specijalizovani za molerske i gipsarske radove sa preko decenije iskustva.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-4"
              >
                <Button 
                  className="bg-amber-800 hover:bg-amber-900 text-white font-semibold px-8 py-6 text-base rounded-lg transition-all hover:shadow-lg"
                >
                  Zakažite konsultaciju
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-6 text-base rounded-lg transition-all"
                >
                  Galerija
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex items-center gap-8 pt-8 mt-8 border-t border-stone-200"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-800">10+</p>
                  <p className="text-stone-600 text-sm">Godina iskustva</p>
                </div>
                <div className="w-px h-12 bg-stone-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-800">200+</p>
                  <p className="text-stone-600 text-sm">Projekata</p>
                </div>
                <div className="w-px h-12 bg-stone-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-800">100%</p>
                  <p className="text-stone-600 text-sm">Zadovoljstvo</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right images */}
          <div className="relative hidden lg:block h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative h-full"
              >
                {/* Main large image */}
                <div className="absolute top-0 right-0 w-[450px] h-[500px] rounded-2xl overflow-hidden shadow-xl z-10 group border-8 border-stone-50">
                  <img
                    src={slides[currentSlide].image2}
                    alt="Enterijer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-amber-800 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                      Vrhunski kvalitet
                    </div>
                  </div>
                </div>

                {/* Smaller accent image */}
                <div className="absolute bottom-0 left-0 w-[280px] h-[320px] rounded-2xl overflow-hidden border-8 border-stone-50 shadow-xl z-20 group">
                  <img
                    src={slides[currentSlide].image}
                    alt="Molerski radovi"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Decorative accent */}
                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-amber-800/5 rounded-full -z-10"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-8 left-8 flex gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-lg bg-stone-50 shadow-lg flex items-center justify-center text-stone-700 hover:bg-amber-800 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-lg bg-stone-50 shadow-lg flex items-center justify-center text-stone-700 hover:bg-amber-800 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-amber-800 w-8' : 'bg-stone-50 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}