'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '40+', label: 'Countries Served' },
    { value: '250+', label: 'Global Experts' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 leading-tight">
              More Than Consultants, We&apos;re <span className="text-gradient">Growth Partners.</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              We combine strategic insight, innovative technology, and operational excellence to help our clients achieve measurable results. Our approach is collaborative, agile, and built around what matters most to your business.
            </p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg hover-lift"
                  variants={itemVariants}
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-neutral-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover-lift hover:bg-primary-dark transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Learn Our Story
            </motion.button>
          </motion.div>

          {/* Right Visual - Team Image */}
          <motion.div
            className="relative h-96 md:h-full min-h-96 lg:min-h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Team Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-premium-lg">
              <Image
                src="/team-meeting.jpg"
                alt="Professional team collaborating in modern office"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl shadow-premium-lg w-72 text-white"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">👥</div>
              </div>
              <p className="font-semibold mb-1">Collaboration. Innovation.</p>
              <p className="text-sm text-white/90">Impact that lasts.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
