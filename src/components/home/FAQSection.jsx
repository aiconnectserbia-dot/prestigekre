import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';

const faqs = [
  {
    question: "Koliko traje kompletna adaptacija stana i da li radite sve radove ili moram da tražim dodatne majstore?",
    answer: "Vreme trajanja adaptacije zavisi od veličine stana i obima radova, ali prosečan stan od 60-80 m² završavamo za 15 do 25 radnih dana. TvojDemo radi kompletne adaptacije 'ključ u ruke', što znači da vi imate samo jedan kontakt, a mi organizujemo sve - od rušenja, gipsa, krečenja, pločica i parketa, do grejanja i vodovoda."
  },
  {
    question: "Da li krečenje i molerski radovi uključuju i zaštitu nameštaja i čišćenje nakon izvođenja radova?",
    answer: "Apsolutno. Prilikom svake molerske usluge štitimo podove, prozore i nameštaj, a nakon završetka obavezno čistimo prostor. Cilj nam je da stan ostane uredan, bez tragova boje, glet mase ili prašine."
  },
  {
    question: "Da li je moguće radove zakazati vikendom ili van standardnog radnog vremena zbog poslovnih obaveza?",
    answer: "Da, prilagođavamo se klijentima. Radimo i vikendom ili u popodnevnim satima uz prethodni dogovor, posebno u poslovnim prostorima gde je važno izbeći smetnje u radnom okruženju."
  },
  {
    question: "Kako da znam koliko će me sve koštati i da li postoji mogućnost da cena naknadno raste tokom radova?",
    answer: "Pre svakog posla dobijate detaljnu ponudu i preciznu kalkulaciju, bez skrivenih stavki. Cenu ne menjamo ako se držimo dogovorenog obima radova. Ukoliko tokom izvođenja želite dodatne radove – cena se transparentno koriguje samo za to što se dodaje, uz vašu potvrdu."
  },
];

const features = [
  "Kompletna usluga adaptacije",
  "Preciznost i poštovanje rokova",
  "Iskustvo i profesionalnost"
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#FFFBF0] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border-2 transition-all duration-300 ${
                    openIndex === idx ? 'border-amber-500 bg-amber-50' : 'border-stone-200 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4"
                  >
                    <span className={`font-semibold text-lg transition-colors ${
                      openIndex === idx ? 'text-amber-600' : 'text-slate-800'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${
                      openIndex === idx ? 'bg-amber-500 rotate-180' : 'bg-slate-100'
                    }`}>
                      <ChevronDown className={`w-5 h-5 ${openIndex === idx ? 'text-white' : 'text-slate-600'}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Info card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
                Često postavljana pitanja
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Sve što Vas zanima{' '}
              <span className="text-amber-500">pre početka radova.</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Radovi u Vašem domu ili poslovnom prostoru mogu delovati komplikovano – zato smo pripremili 
              odgovore na pitanja koja nam klijenti najčešće postavljaju. Ako ne pronađete odgovor na ono 
              što vas konkretno zanima, slobodno nas kontaktirajte – uvek rado pomažemo da donesete najbolju odluku.
            </p>

            <div className="space-y-3 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative mt-8">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
                alt="Enterijer"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-slate-800 font-semibold">Imate pitanje?</p>
                <p className="text-amber-600">Kontaktirajte nas →</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}