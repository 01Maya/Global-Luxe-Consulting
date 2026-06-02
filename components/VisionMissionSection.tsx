'use client';

import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white via-white to-neutral-50 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-3">
            OUR PURPOSE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-neutral-900">
            Vision <span className="text-neutral-300">&</span> Mission
          </h2>

          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Vision Card */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >

            {/* Floating Shape */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative bg-white/80 backdrop-blur-xl rounded-[28px] p-8 md:p-10 border border-primary/10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.05] opacity-0 hover:opacity-100 transition-opacity duration-500" />

              {/* Vision Icon */}
              <motion.div
                className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(37,99,255,0.25)]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >

                {/* Eye Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" fill="white" />
                </svg>

              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Our Vision
                </h3>

                <p className="text-neutral-600 text-lg leading-relaxed">
                  To be the world&apos;s most trusted partner for innovative
                  solutions that create enduring value and empower businesses
                  to thrive globally.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >

            {/* Floating Shape */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-accent/10 rounded-xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />

            <div className="relative bg-white/80 backdrop-blur-xl rounded-[28px] p-8 md:p-10 border border-primary/10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.05] opacity-0 hover:opacity-100 transition-opacity duration-500" />

              {/* Mission Icon */}
              <motion.div
                className="relative z-10 w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(124,58,237,0.25)]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
              >

                {/* Check Target Icon */}
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>

              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Our Mission
                </h3>

                <p className="text-neutral-600 text-lg leading-relaxed">
                  We deliver exceptional consulting and digital solutions
                  through collaboration, expertise, and a commitment to
                  excellence that transforms businesses.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-3 bg-primary/5 rounded-full border border-primary/10">
            <p className="text-sm font-semibold text-primary">
              Driving Innovation & Sustainable Growth
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;