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
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'linear-gradient(rgba(217, 119, 6, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-[1px] bg-gradient-to-r from-amber-600 to-transparent" />
                <span className="text-amber-500 font-semibold tracking-[0.2em] uppercase text-sm">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              <div className="space-y-3">
                {slides[currentSlide].title.map((line, idx) => (
                  <motion.h1
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
                      idx === 0 || idx === 2 ? 'text-white' : 'bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'
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
                className="text-slate-400 text-lg leading-relaxed max-w-xl"
              >
                Profesionalni završni radovi vrhunskog kvaliteta. Specijalizovani za molerske i gipsarske radove sa preko decenije iskustva.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-4 pt-4"
              >
                <Button 
                  className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold px-10 py-7 text-lg rounded-full shadow-2xl shadow-amber-600/30 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50 group"
                >
                  <span className="relative z-10">Zakažite konsultaciju</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-slate-700 text-white hover:bg-white/5 hover:border-amber-500/50 px-10 py-7 text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  Galerija radova
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex items-center gap-8 pt-8 border-t border-slate-800"
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 flex items-center justify-center border border-amber-600/30">
                    <span className="text-4xl font-bold bg-gradient-to-br from-amber-400 to-orange-500 bg-clip-text text-transparent">10+</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full border-4 border-slate-950"></div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">Godina iskustva</p>
                  <p className="text-slate-500">u završnim radovima</p>
                </div>
                <div className="w-px h-16 bg-slate-800"></div>
                <div>
                  <p className="text-2xl font-bold text-white">200+</p>
                  <p className="text-slate-500">Realizovanih projekata</p>
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
                <div className="absolute top-0 right-0 w-[450px] h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 z-10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                  <img
                    src={slides[currentSlide].image2}
                    alt="Enterijer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Premium Quality
                    </div>
                  </div>
                </div>

                {/* Smaller accent image */}
                <div className="absolute bottom-0 left-0 w-[280px] h-[320px] rounded-3xl overflow-hidden border-4 border-slate-900 shadow-2xl shadow-black/40 z-20 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent z-10"></div>
                  <img
                    src={slides[currentSlide].image}
                    alt="Molerski radovi"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating stats card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 right-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl z-30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-xl">100%</p>
                      <p className="text-slate-400 text-sm">Zadovoljstvo klijenata</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-6 left-1/4 w-32 h-32 border-2 border-amber-600/20 rounded-full"></div>
                <div className="absolute -bottom-8 right-1/3 w-24 h-24 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-2xl rotate-45"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-12 left-12 flex gap-3">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-amber-600 hover:border-amber-600 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-amber-600 hover:border-amber-600 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-12 right-12 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`relative h-1 rounded-full transition-all duration-500 ${
                idx === currentSlide ? 'bg-amber-500 w-12' : 'bg-slate-700 w-8 hover:bg-slate-600'
              }`}
            >
              {idx === currentSlide && (
                <motion.div
                  layoutId="activeSlide"
                  className="absolute inset-0 bg-amber-500 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}