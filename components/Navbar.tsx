'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'About Us', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Our Presence', href: 'presence' },
    { label: 'Testimonials', href: 'testimonials' },
    { label: 'Contact', href: 'contact' },
  ];

  // Desktop Navigation
  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/80 shadow-lg border-b border-neutral-200/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => handleNavigation('hero')}
        >
          <div className="w-10 h-10 relative">
            <Image
              src="/logo.png"
              alt="GLOBALUXE Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="font-bold text-lg leading-none text-neutral-900">
              GLOBALUXE
            </h1>

            <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
              Consulting
            </p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavigation(item.href)}
              className="relative text-sm font-medium text-neutral-700 hover:text-primary transition-colors group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              {item.label}

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.button
          onClick={() => handleNavigation('contact')}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Let&apos;s Talk
          <span>→</span>
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-neutral-900 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />

            <span
              className={`h-0.5 w-full bg-neutral-900 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`h-0.5 w-full bg-neutral-900 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden backdrop-blur-2xl bg-white/95 border-t border-neutral-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="px-6 py-6 flex flex-col gap-2">

              {/* Mobile Nav Items */}
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    const section = document.getElementById(item.href);

                    setIsMobileMenuOpen(false);

                    setTimeout(() => {
                      if (section) {
                        section.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }, 300);
                  }}
                  className="text-left px-4 py-3 rounded-xl text-neutral-700 hover:bg-primary/5 hover:text-primary transition-all duration-300 font-medium w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.button
                onClick={() => {
                  const section = document.getElementById('contact');

                  setIsMobileMenuOpen(false);

                  setTimeout(() => {
                    if (section) {
                      section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }, 300);
                }}
                className="mt-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-xl font-semibold shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Let&apos;s Talk
              </motion.button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;