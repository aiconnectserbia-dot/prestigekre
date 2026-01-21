import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, GraduationCap, Palette, ShieldCheck } from 'lucide-react';

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-amber-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-slate-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
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
              <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                Zbog čega izabrati nas?
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Kada iskustvo pravi{' '}
              <span className="text-amber-500">razliku.</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Naš tim čine provereni, školovani majstori sa višedecenijskim iskustvom u zemlji i inostranstvu, 
              kao i mlađi kadar obučen za rad sa najsavremenijim materijalima, alatima i tehnikama izvođenja radova. 
              Naša najveća preporuka su zadovoljni klijenti koji nam se vraćaju i preporučuju nas drugima.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-slate-700 font-medium text-lg">Majstori sa iskustvom</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-slate-700 font-medium text-lg">Najkvalitetniji materijali</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-slate-700 font-medium text-lg">Garancija na izvršene radove</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="pt-6">
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-medium">Procenat zahteva koje ispunjavamo</span>
                <span className="text-amber-600 font-bold">95%</span>
              </div>
              <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80"
                alt="Moler na poslu"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-800">100%</p>
                    <p className="text-slate-500">Zadovoljstvo</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Svi naši klijenti su zadovoljni kvalitetom izvršenih radova
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-amber-500/30 rounded-full" />
              <div className="absolute top-20 -right-8 w-16 h-16 bg-amber-500/20 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}