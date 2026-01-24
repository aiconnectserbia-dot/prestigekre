import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F1E8] overflow-hidden w-full">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-amber-600">
                <span className="text-amber-700 font-semibold text-sm uppercase tracking-wide">
                  Ulepšajte i osvežite vaš prostor
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-stone-900">Krečenje i moleraj</span>
              <br />
              <span className="text-stone-900">Dekorativne tehnike</span>
              <br />
              <span className="text-stone-900" style={{ WebkitTextStroke: '2px currentColor', color: 'transparent' }}>
                Špatulat, Sahara,
              </span>
              <br />
              <span className="text-stone-900">Travertino i druge</span>
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+38163242849"
                className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl text-base"
              >
                <Phone className="w-5 h-5" />
                Kontakt
              </a>
              <a
                href="#tehnike"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-semibold rounded-full transition-all text-base"
              >
                Dekorativne Tehnike
              </a>
            </motion.div>
          </motion.div>

          {/* Right images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            {/* Decorative shape background */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 600 600" className="w-full h-full">
                <path
                  d="M450,300 Q600,150 550,50 Q500,-50 350,20 Q200,-50 100,100 Q0,250 100,400 Q200,550 350,500 Q500,450 450,300Z"
                  fill="#E8A25F"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* Main circular image */}
            <div className="absolute top-12 right-20 w-72 h-72 rounded-full overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/66359383c_SaleFashionBrandWebsiteHomepageBanner.jpg"
                alt="Molerski radovi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary circular image */}
            <div className="absolute bottom-16 right-32 w-64 h-64 rounded-full overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80"
                alt="Enterijer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative curved line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
              <path
                d="M100,500 Q200,400 300,450 Q400,500 500,400"
                stroke="#E8A25F"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}