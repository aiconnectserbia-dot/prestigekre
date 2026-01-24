import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Radili su kompletno krečenje i gletovanje lokala - sve je bilo besprekorno! Došli su tačno u dogovoreno vreme, završili pre roka, i iza sebe ostavili čisto kao da nisu ni bili. Sve preporuke!",
    author: "Milan Petrović",
    service: "Krečenje i gletovanje",
    rating: 5,
  },
  {
    text: "Ekipa je renovirala moj salon i rezultat je prevazišao moja očekivanja. Profesionalni, detaljni, sve su radili kao da rade za sebe. Svaka čast majstorima i ekipi!",
    author: "Ana Jovanović",
    service: "Adaptacija salona",
    rating: 5,
  },
  {
    text: "Uradili su Travertino tehniku u mojoj dnevnoj sobi. Izgleda fenomenalno, pravo umetničko delo! Preporučujem svima koji žele nešto posebno za svoj dom.",
    author: "Marija Nikolić",
    service: "Dekorativne tehnike",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 border border-amber-500/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-amber-500/10 rounded-full" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
              </div>
              <span className="text-amber-200 font-semibold tracking-wide uppercase text-sm">
                Utisci i preporuke
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Šta zadovoljni klijenti{' '}
              <span className="text-amber-200">kažu o nama.</span>
            </h2>

            <div className="flex gap-4 pt-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Right - Testimonial card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 relative shadow-2xl"
              >
                {/* Quote icon */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-slate-900" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 justify-end">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-stone-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-800 font-bold text-xl">
                      {testimonials[current].author[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-stone-900 font-semibold text-lg">
                      {testimonials[current].author}
                    </h4>
                    <p className="text-amber-800 text-sm">
                      Usluga: {testimonials[current].service}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-amber-500/30 rounded-br-2xl" />
              </motion.div>
            </AnimatePresence>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-white w-6' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}