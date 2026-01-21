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
    <div className="min-h-screen bg-stone-50">
      {/* Top bar */}
      <div className="bg-amber-800 text-amber-50 py-2 text-xs hidden lg:block">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Beograd, Srbija
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              info@tvojdemo.rs
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+381631234567" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              +381 63 123 4567
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="relative">
                <svg className="w-10 h-10 text-amber-800 group-hover:text-amber-900 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="13" y="4" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="13" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="13" y="13" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 4L20 20M20 4L4 20" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-stone-900">
                  TvojDemo
                </span>
                <p className="text-xs text-stone-600">
                  Završni radovi
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={createPageUrl(link.page)}
                  className="text-stone-700 hover:text-amber-800 font-medium text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+381631234567"
                className="bg-amber-800 hover:bg-amber-900 text-white font-medium px-6 py-2.5 rounded-lg transition-all hover:shadow-lg text-sm"
              >
                Kontaktirajte nas
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-800' : 'text-white'}`}
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
                  href="tel:+381631234567"
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
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-xl">TD</span>
                </div>
                <div>
                  <span className="font-bold text-xl text-white">TvojDemo</span>
                  <p className="text-xs text-slate-400">Završni radovi</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Tim iskusnih majstora posvećenih kvalitetnoj završnoj obradi enterijera. 
                Specijalizovani za molerske radove i dekorativne tehnike.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
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
                  <span className="text-slate-400">+381 63 123 4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">info@tvojdemo.rs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 TvojDemo. Sva prava zadržana. | Demo verzija
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