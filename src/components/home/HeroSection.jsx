import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, Award, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFFBF0] to-[#FFF8E7] overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Logo & Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/ca2cca1d8_logoprestigekre.png"
                alt="PrestigeKreč Logo"
                className="w-16 h-16 object-contain"
              />
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/30">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-amber-800 font-semibold text-sm">Profesionalne usluge</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-stone-900">Radimo </span>
                <span className="text-amber-600">čisto</span>
                <span className="text-stone-900">, </span>
                <br />
                <span className="text-amber-600">kvalitetno</span>
                <span className="text-stone-900">, </span>
                <br />
                <span className="text-amber-600">profesionalno</span>
                <br />
                <span className="text-stone-900">i na </span>
                <span className="text-amber-600">nivou.</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-stone-600 text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              PRESTIGEKREČ - Vaš pouzdan partner za vrhunske usluge gletovanja, krečenja i gipsarskih radova. 
              Sa preko decenije iskustva, garantujemo besprekorne rezultate.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+38163242849"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-5 rounded-xl transition-all hover:shadow-2xl hover:scale-105 text-lg"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <span>POZOVITE NAS</span>
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a
                href="tel:+38163242849"
                className="inline-flex items-center justify-center gap-2 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-5 rounded-xl transition-all text-lg"
              >
                063 242 849
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <div className="text-center p-4 bg-white/60 rounded-xl border border-amber-200/50">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-stone-900">10+</p>
                <p className="text-stone-600 text-sm">Godina</p>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl border border-amber-200/50">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-stone-900">200+</p>
                <p className="text-stone-600 text-sm">Projekata</p>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl border border-amber-200/50">
                <CheckCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-stone-900">100%</p>
                <p className="text-stone-600 text-sm">Kvalitet</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[650px] hidden lg:block"
          >
            {/* Main image */}
            <div className="absolute top-0 right-0 w-[450px] h-[500px] rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80"
                alt="Molerski radovi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                  <p className="text-stone-900 font-bold text-lg">Profesionalni moleraj</p>
                  <p className="text-stone-600 text-sm">Vrhunski kvalitet završne obrade</p>
                </div>
              </div>
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 left-0 w-[280px] h-[340px] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80"
                alt="Gipsarski radovi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white px-8 py-6 rounded-2xl shadow-2xl text-center">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-semibold">Godina iskustva</p>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}