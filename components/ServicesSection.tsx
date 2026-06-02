'use client';

import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: '🏛️',
      title: 'Strategy & Consulting',
      description: 'We help you define strategy, optimize performance, and unlock new growth opportunities.',
    },
    {
      icon: '🔄',
      title: 'Digital Transformation',
      description: 'We modernize your business with digital solutions that drive innovation and agility.',
    },
    {
      icon: '💻',
      title: 'Technology Solutions',
      description: 'End-to-end IT solutions that empower your business to scale with confidence.',
    },
    {
      icon: '📈',
      title: 'Operations Excellence',
      description: 'We streamline operations and build processes that deliver sustainable results.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Solutions That Drive <span className="text-gradient">Real Impact</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From strategy to execution, we provide comprehensive solutions tailored to your unique business challenges.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm hover-lift transition-all duration-300 cursor-pointer border border-white/60 hover:border-primary/40 hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/10 rounded-xl flex items-center justify-center text-3xl mb-4 relative z-10"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3 relative z-10">{service.title}</h3>

              {/* Description */}
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed relative z-10">{service.description}</p>

              {/* Arrow Icon */}
              <motion.div
                className="flex items-center text-primary font-semibold text-sm relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Learn More <span className="ml-1">→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-600 mb-4">Ready to transform your business?</p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover-lift hover:bg-primary-dark transition-colors">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
