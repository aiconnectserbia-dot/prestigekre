import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Paintbrush, Grid3X3, Layers } from 'lucide-react';

const services = [
  {
    title: 'Dekorativne tehnike',
    description: 'Travertino, Marmorino, Velvet, Otocento, Špatulat, Sahara i druge vrhunske tehnike',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
    icon: Paintbrush,
  },
  {
    title: 'Molerski radovi',
    description: 'Profesionalno krečenje, gletovanje, farbanje i kompletna priprema površina',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&q=80',
    icon: Layers,
  },
  {
    title: 'Gipsarski radovi',
    description: 'Pregradni zidovi, spušteni plafoni, dekor od gipsa i sve vrste gipsarskih radova',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80',
    icon: Grid3X3,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#FFFBF0] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
              </div>
              <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                Naše usluge
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
              Sve što Vam je potrebno za{' '}
              <span className="text-amber-500">savršen enterijer.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-amber-600 font-semibold hover:gap-4 transition-all self-start lg:self-auto">
            Pogledajte sve usluge <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-amber-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    Saznaj više <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}