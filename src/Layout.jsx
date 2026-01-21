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
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 text-slate-400 py-3 text-sm hidden lg:block">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <MapPin className="w-4 h-4 text-amber-600" />
              Beograd, Srbija
            </span>
            <span className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Mail className="w-4 h-4 text-amber-600" />
              info@tvojdemo.rs
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+381631234567" className="flex items-center gap-2 font-medium hover:text-amber-400 transition-colors">
              <Phone className="w-4 h-4 text-amber-600" />
              +381 63 123 4567
            </a>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-all text-slate-400 hover:text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-all text-slate-400 hover:text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-100' : 'bg-white/5 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-2xl">T</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-900 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'} transition-colors`}>
                  TvojDemo
                </span>
                <p className={`text-xs font-medium tracking-wider uppercase ${isScrolled ? 'text-slate-500' : 'text-slate-300'} transition-colors`}>
                  Premium Finishing
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={createPageUrl(link.page)}
                  className={`relative px-5 py-2 font-medium transition-all duration-300 group ${
                    isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-500 group-hover:w-3/4 transition-all duration-300`}></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+381631234567"
                className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Pozovite nas
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
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