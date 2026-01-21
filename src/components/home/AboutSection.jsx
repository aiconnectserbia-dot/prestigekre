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
    <section className="py-24 bg-stone-100 relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80"
                alt="Molerski radovi"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80"
                  alt="Enterijer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -top-6 -right-6 bg-amber-500 text-slate-900 px-6 py-4 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm font-medium">Uspešnih projekata</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white p-10 rounded-3xl shadow-xl border border-stone-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-amber-800" />
              <span className="text-amber-800 font-semibold tracking-wide uppercase text-xs">
                Dobrodošli u TvojDemo
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Majstori za molerske radove i{' '}
              <span className="text-amber-800">dekorativne tehnike.</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              TvojDemo je tim iskusnih majstora posvećenih kvalitetnoj i preciznoj završnoj obradi enterijera. 
              Naša specijalnost su molerski radovi i vrhunske dekorativne tehnike kao što su Travertino, 
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
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                    <stat.icon className="w-7 h-7 text-amber-800" />
                  </div>
                  <p className="text-2xl font-bold text-stone-900">{stat.value}</p>
                  <p className="text-sm text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}