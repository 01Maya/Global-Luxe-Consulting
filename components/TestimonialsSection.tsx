'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'GLOBALUXE brought clarity to our strategy and delivered results beyond our expectations. A trusted partner in every sense.',
      author: 'Sarah Johnson',
      role: 'CEO, Innovation Global',
      rating: 5,
      image: '/sarah-johnson.jpg',
    },
    {
      quote: 'Their expertise in digital transformation helped us scale faster and smarter. Highly professional and results-driven team!',
      author: 'Michael Chen',
      role: 'CTO, Nexus',
      rating: 5,
      image: '/michael-chen.jpg',
    },
    {
      quote: 'That&apos;s what makes GLOBALUXE stand out. Their commitment to excellence and deep industry knowledge is exceptional.',
      author: 'Priya Sharma',
      role: 'COO, Growth Ventures',
      rating: 5,
      image: '/priya-sharma.jpg',
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">CLIENT TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Trusted by <span className="text-gradient">Leaders Worldwide</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className={`p-8 rounded-2xl transition-all duration-500 ${
                  idx === currentIdx
                    ? 'glass scale-100 opacity-100'
                    : 'bg-neutral-50 scale-95 opacity-50'
                }`}
                animate={{
                  scale: idx === currentIdx ? 1 : 0.95,
                  opacity: idx === currentIdx ? 1 : 0.5,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-700 mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author with Image */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <motion.div
            className="flex justify-center gap-3 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIdx
                    ? 'bg-primary w-8'
                    : 'bg-neutral-300 w-2 hover:bg-neutral-400'
                }`}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-neutral-600 text-sm mt-2">Projects Completed</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
            <p className="text-3xl font-bold text-primary">98%</p>
            <p className="text-neutral-600 text-sm mt-2">Client Satisfaction</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-neutral-600 text-sm mt-2">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
