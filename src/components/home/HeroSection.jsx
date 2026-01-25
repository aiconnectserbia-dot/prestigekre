import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Award, CheckCircle2, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/75 to-stone-900/60"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-200 font-semibold text-sm uppercase tracking-wide">
                  Profesionalni moleraj i dekoracija
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-tight text-white">
                Pretvorite svoj prostor u
                <span className="block text-amber-400 mt-2 sm:mt-2">
                  umetničko delo
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-stone-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              Specijalizovani za gletovanje, krečenje i vrhunske dekorativne tehnike. 
              Garantujemo besprekoran kvalitet i preciznost u svakom projektu.
            </motion.p>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">10+ godina</p>
                  <p className="text-stone-400 text-xs sm:text-sm">iskustva</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">200+ projekata</p>
                  <p className="text-stone-400 text-xs sm:text-sm">uspešno završenih</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <a
                href="tel:+38163242849"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm border border-amber-500/30 text-amber-200 font-bold px-6 py-3 sm:px-10 sm:py-5 rounded-full transition-all hover:shadow-2xl hover:scale-105 text-base sm:text-lg"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                Pozovite nas
              </a>
              <a
                href="#tehnike"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-5 bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm border border-amber-500/30 text-amber-200 font-semibold rounded-full transition-all text-base sm:text-lg"
              >
                Pogledajte tehnike
              </a>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main showcase image */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80"
                  alt="Molerski radovi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
                
                {/* Floating card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-stone-900 font-bold text-xl mb-1">Vrhunski kvalitet</p>
                      <p className="text-stone-600">Profesionalna obrada zidova</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Small floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-400 to-amber-600 text-stone-900 px-8 py-6 rounded-2xl shadow-2xl"
              >
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm font-semibold">Zadovoljstvo</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}