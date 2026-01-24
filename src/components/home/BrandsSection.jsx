import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Droplet, Sparkles, Award, CheckCircle, Star } from 'lucide-react';

const brands = [
  { name: 'Dulux', icon: Paintbrush, gradient: 'from-blue-600 to-blue-400' },
  { name: 'Maxima', icon: Droplet, gradient: 'from-red-600 to-red-400' },
  { name: 'Zorka', icon: Sparkles, gradient: 'from-green-600 to-green-400' },
  { name: 'Chromos', icon: Award, gradient: 'from-orange-600 to-orange-400' },
  { name: 'JUB', icon: CheckCircle, gradient: 'from-purple-600 to-purple-400' },
  { name: 'Caparol', icon: Star, gradient: 'from-amber-600 to-amber-400' },
];

export default function BrandsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
      </div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-amber-500" />
            </div>
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">
              Naši partneri
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Radimo sa najboljim{' '}
            <span className="text-amber-400">svetskim brendovima</span>
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Koristimo isključivo proverene i kvalitetne materijale renomiranih proizvođača
          </p>
        </motion.div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-stone-700/50 to-stone-800/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-600/30 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative flex flex-col items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <brand.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-center">
                    <span className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                      {brand.name}
                    </span>
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-300 mt-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-amber-400" />
            <span className="text-amber-100 font-medium">Svi materijali su visokokvalitetni i sertifikovani</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}