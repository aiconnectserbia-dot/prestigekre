import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '200+', label: 'Zadovoljnih klijenata' },
  { icon: Award, value: '10+', label: 'Godina iskustva' },
  { icon: Clock, value: '100%', label: 'Poštovanje rokova' },
];

export default function AboutSection() {
  return (
    <section className="py-12 lg:py-24 bg-[#EED9C4] relative overflow-hidden w-full">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80"
                alt="Molerski radovi"
                className="w-full max-w-[280px] sm:max-w-sm lg:w-80 h-80 sm:h-96 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-48 h-56 sm:w-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80"
                  alt="Enterijer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-amber-500 text-slate-900 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg">
                <p className="text-2xl sm:text-3xl font-bold">200+</p>
                <p className="text-xs sm:text-sm font-medium">Projekata</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6 bg-white p-6 lg:p-10 rounded-3xl shadow-xl border border-stone-200"
          >
            <div className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/ca2cca1d8_logoprestigekre.png"
                alt="PrestigeKreč Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-amber-800 font-semibold tracking-wide uppercase text-xs">
                Dobrodošli u PRESTIGE KREČ
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 leading-tight">
              Majstori za molerske radove i{' '}
              <span className="text-amber-800">dekorativne tehnike.</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              PRESTIGE KREČ je tim iskusnih majstora posvećenih kvalitetnoj i preciznoj završnoj obradi enterijera. 
              Naša specijalnost su gletovanje, krečenje, gipsarski radovi i vrhunske dekorativne tehnike kao što su Travertino, 
              Marmorino, Velvet, Otocento, Špatulat i druge. Bilo da želite jednostavno osveženje ili 
              sofisticiranu dekoraciju zidova, garantujemo besprekorne rezultate.
            </p>

            <p className="text-stone-600 leading-relaxed">
              Koristimo isključivo proverene materijale renomiranih brendova i pristupamo svakom projektu 
              sa istom pažnjom – kao da radimo u svom domu. Bez obzira na veličinu projekta – svakom poslu 
              pristupamo pedantno, profesionalno i u dogovorenom roku.
            </p>

            <div className="bg-amber-50 rounded-xl p-6 mt-8 border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-semibold text-lg mb-1">Prepoznat kvalitet</h4>
                  <p className="text-stone-600">
                    Kada je u pitanju završna obrada prostora, kvalitet se ne može sakriti – 
                    on se vidi, oseti i traje godinama.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 lg:gap-6 pt-4 lg:pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 mx-auto rounded-xl bg-amber-100 flex items-center justify-center mb-2 lg:mb-3">
                    <stat.icon className="w-5 h-5 lg:w-7 lg:h-7 text-amber-800" />
                  </div>
                  <p className="text-xl lg:text-2xl font-bold text-stone-900">{stat.value}</p>
                  <p className="text-xs lg:text-sm text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}