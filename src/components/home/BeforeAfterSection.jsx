import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - container.left) / container.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget.getBoundingClientRect();
    const position = ((e.touches[0].clientX - container.left) / container.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-12 lg:py-24 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">
              Transformacija prostora
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            Pre & Posle
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Pogledajte neverovatnu transformaciju prostora kroz našu stručnost i posvećenost
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none bg-stone-900"
            onMouseMove={handleMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Background - Left side) */}
            <div className="relative aspect-[16/10] lg:aspect-[16/9]">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/3e2a6a1af_15.jpg"
                alt="Posle renovacije"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'left 35%' }}
              />
              
              {/* After Label */}
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                POSLE
              </div>
            </div>

            {/* Before Image (Overlay - Right side) */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/4b47f9730_10.jpg"
                alt="Pre renovacije"
                className="w-full h-full object-cover object-left"
              />
              
              {/* Before Label */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                PRE
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize">
                <div className="flex gap-1">
                  <div className="w-1 h-6 bg-stone-800 rounded-full"></div>
                  <div className="w-1 h-6 bg-stone-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-6 text-stone-400 text-sm"
          >
            <p>Prevucite klizač levo i desno da vidite transformaciju</p>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 lg:mt-16"
        >
          <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
            <p className="text-stone-300">Zadovoljstvo klijenata</p>
          </div>
          <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">10+</div>
            <p className="text-stone-300">Godina iskustva</p>
          </div>
          <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">200+</div>
            <p className="text-stone-300">Završenih projekata</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="tel:+38163242849"
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:scale-105 text-lg"
          >
            Zatražite besplatan pregled
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}