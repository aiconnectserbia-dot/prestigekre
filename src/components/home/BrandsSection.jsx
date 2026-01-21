import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Dulux', color: 'bg-blue-600' },
  { name: 'Maxima', color: 'bg-red-600' },
  { name: 'Zorka', color: 'bg-green-600' },
  { name: 'Chromos', color: 'bg-orange-600' },
  { name: 'JUB', color: 'bg-purple-600' },
  { name: 'Caparol', color: 'bg-amber-600' },
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-amber-900 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Koristimo proizvode{' '}
            <span className="text-amber-400">renomiranih brendova</span>
          </h2>
        </motion.div>

        {/* Brands marquee */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-12 items-center justify-center flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-700/50 hover:bg-slate-700 rounded-xl px-8 py-6 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${brand.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{brand.name[0]}</span>
                    </div>
                    <span className="text-slate-300 font-semibold text-lg group-hover:text-white transition-colors">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}