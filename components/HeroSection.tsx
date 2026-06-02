'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
<section
  id="hero"
  className="relative min-h-screen flex items-center pt-20 px-4 md:px-8 overflow-hidden"
>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute -bottom-32 left-10 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.03,
            y: -mousePosition.y * 0.03,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-sm font-semibold text-primary uppercase tracking-wide mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              GLOBAL VISION. LOCAL IMPACT.
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Building <span className="text-gradient">Tomorrow&apos;s</span> Solutions, <span className="text-primary">Today.</span>
            </motion.h1>

            <motion.p
              className="text-lg text-neutral-600 text-balance mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              GLOBALUXE is a worldwide consulting and solutions company partnering with organizations to drive growth, innovation, and sustainable success.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#services" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover-lift hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 cursor-pointer">
                Explore Our Services
                <span>→</span>
              </a>
              <a href="#about" className="border-2 border-foreground text-foreground px-8 py-3 rounded-lg font-semibold hover-scale transition-all hover:bg-foreground/5 cursor-pointer inline-flex items-center justify-center">
                About Us
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold border-2 border-background"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-600">
                Trusted by <span className="font-semibold text-foreground">250+ global clients</span> worldwide.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div
            className="relative h-96 md:h-full min-h-96 lg:min-h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Hero Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-premium-lg">
              <Image
                src="/cityscape-hero.jpg"
                alt="Modern skyline with blue tint"
                fill
                className="object-cover"
                priority
              />

              {/* Blue curved overlay */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 600"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 100 Q 150 50, 300 100 T 600 100 L 600 0 L 0 0 Z"
                  fill="url(#blueGradient)"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
