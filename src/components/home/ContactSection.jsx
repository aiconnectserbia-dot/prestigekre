import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Adresa', value: 'Beograd, Srbija' },
  { icon: Phone, label: 'Telefon', value: '+381 63 123 4567' },
  { icon: Mail, label: 'Email', value: 'info@tvojdemo.rs' },
  { icon: Clock, label: 'Radno vreme', value: 'Pon - Sub: 08:00 - 18:00' },
];

const articles = [
  {
    title: 'Koliko traje adaptacija stana i kako da se najbolje pripremite?',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80',
    date: '11 Avg',
  },
  {
    title: 'Kako odabrati pravu dekorativnu tehniku za vaš prostor?',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80',
    date: '05 Avg',
  },
];

export default function ContactSection() {
  return (
    <>
      {/* Blog/News Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 to-amber-700 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
              </div>
              <span className="text-amber-200 font-semibold tracking-wide uppercase text-sm">
                Stručni vodiči
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Novosti i saveti iz sveta{' '}
              <span className="text-amber-200">adaptacija</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {articles.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white/95 rounded-3xl overflow-hidden hover:bg-white transition-all duration-300 shadow-2xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-amber-700 text-sm font-medium">{article.date}</span>
                    <h3 className="text-xl font-semibold text-stone-900 mt-2 group-hover:text-amber-800 transition-colors">
                      {article.title}
                    </h3>
                    <button className="flex items-center gap-2 text-stone-600 mt-4 group-hover:text-amber-700 transition-colors">
                      Pročitaj više <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#F5F1E8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/50 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                  </div>
                  <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                    Kontaktirajte nas
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Započnite svoj projekat{' '}
                  <span className="text-amber-500">još danas.</span>
                </h2>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                Imate pitanje ili želite besplatnu procenu? Javite nam se i rado ćemo vam pomoći 
                da pretvorite vašu viziju u stvarnost.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{info.label}</p>
                      <p className="text-slate-800 font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-stone-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Pošaljite upit</h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-2">Ime i prezime</label>
                      <Input 
                        placeholder="Vaše ime" 
                        className="h-12 border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-2">Telefon</label>
                      <Input 
                        placeholder="+381 6X XXX XXXX" 
                        className="h-12 border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="vasa@email.com" 
                      className="h-12 border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Poruka</label>
                    <Textarea 
                      placeholder="Opišite vaš projekat..." 
                      rows={4}
                      className="border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <Button className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Pošalji upit
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}