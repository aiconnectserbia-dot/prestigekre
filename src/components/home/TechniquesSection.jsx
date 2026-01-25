import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const techniques = [
  {
    name: 'Traventino',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/490985c46_Seramiksan_NEWTRAVERTIN.jpeg',
    description: 'Elegantna tekstura koja imitira prirodni kamen',
  },
  {
    name: 'Otocento',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/c9aaacccd_otocento.jpeg',
    description: 'Baršunast završetak sa metalnim sjajem',
  },
  {
    name: 'Marmorino',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/4b9e37912_ChauxMarmorino-faadeextrieur.jpg',
    description: 'Klasična tehnika imitacije mermera',
  },
  {
    name: 'Velvet',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/1e89a7f0f_velvet.jpg',
    description: 'Mekani, svilenkasti završetak površine',
  },
  {
    name: 'Špatulat',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80',
    description: 'Moderna tehnika sa glatkim prelivima',
  },
  {
    name: 'Sahara',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=500&q=80',
    description: 'Efektna tehnika peščane teksture',
  },
];

export default function TechniquesSection() {
  return (
    <section className="py-12 lg:py-24 bg-[#F5F1E8] relative overflow-hidden w-full">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
            </div>
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
              Vrhunski moleraj
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800">
            Dekorativne tehnike
          </h2>
        </motion.div>

        {/* Techniques grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
          {techniques.map((technique, idx) => (
            <motion.div
              key={technique.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-[280px] md:w-auto snap-center"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={technique.image}
                  alt={technique.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-amber-500/90 text-slate-900 text-xs font-semibold rounded-full mb-3">
                  Tehnika
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{technique.name}</h3>
                <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {technique.description}
                </p>
                <button className="flex items-center gap-2 text-amber-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  Saznaj više <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}