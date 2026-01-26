import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Početna', page: 'Home' },
  { label: 'O nama', page: 'Home' },
  { label: 'Usluge', page: 'Home' },
  { label: 'Tehnike', page: 'Home' },
  { label: 'Kontakt', page: 'Home' },
];

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1E8] overflow-x-hidden">
      {/* Top bar */}
      <div className="bg-stone-800 text-stone-200 py-3 text-sm hidden">
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-8">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            Beograd, Srbija
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-500" />
            joksimovicboro@gmail.com
          </span>
          <a href="tel:+38163242849" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Phone className="w-4 h-4 text-amber-500" />
            +381 63 242 849
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white lg:absolute lg:w-full lg:bg-transparent shadow-md lg:shadow-none">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2 lg:gap-3 group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/ca2cca1d8_logoprestigekre.png"
                alt="Prestige Kreč - Molerski i gipsarski radovi Beograd"
                className="w-10 h-10 lg:w-14 lg:h-14 object-contain transition-transform group-hover:scale-105"
              />
              <div>
                <span className="font-bold text-lg lg:text-2xl tracking-tight text-stone-900 lg:text-white">
                  PRESTIGE KREČ
                </span>
                <p className="text-[10px] lg:text-xs text-stone-600 lg:text-stone-200">
                  Gletovanje • Krečenje • Gipsarski radovi
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={createPageUrl(link.page)}
                  className="text-white hover:text-amber-400 font-medium text-base uppercase tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+38163242849"
                className="bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm border border-amber-500/30 text-amber-200 font-semibold px-8 py-3 rounded-full transition-all hover:shadow-xl text-base uppercase tracking-wide"
              >
                Kontaktirajte
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-700 font-medium py-2 hover:text-amber-500"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+38163242849"
                  className="block bg-amber-500 text-slate-900 font-semibold px-6 py-3 rounded-full text-center"
                >
                  Pozovite nas
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-stone-800 to-stone-900 text-slate-300">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6970d094440390ca64c51e76/ca2cca1d8_logoprestigekre.png"
                  alt="Prestige Kreč logo"
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <span className="font-bold text-xl text-white">PRESTIGE KREČ</span>
                  <p className="text-xs text-slate-400">Gletovanje • Krečenje • Gipsarski radovi</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Vaš pouzdan partner za vrhunske molerske i gipsarske radove. 
                Specijalizovani za gletovanje, krečenje i dekorativne tehnike.
              </p>
              </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Brzi linkovi</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Naše usluge</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Dekorativne tehnike</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Molerski radovi</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Gipsarski radovi</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Adaptacija</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Kontakt</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Beograd, Srbija</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">+381 63 242 849</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">joksimovicboro@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 PRESTIGE KREČ. Sva prava zadržana.
            </p>
            <p className="text-slate-500 text-sm">
              Dizajn i razvoj
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}