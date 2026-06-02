'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth Navigation Function
  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', id: 'about' },
        { label: 'Presence', id: 'presence' },
        { label: 'Client', id: 'testimonials' },
        { label: 'Blog', id: 'hero' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Strategy & Consulting', id: 'services' },
        { label: 'Digital Transformation', id: 'services' },
        { label: 'Technology Solutions', id: 'services' },
        { label: 'Operations Excellence', id: 'services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', id: 'hero' },
        { label: 'Whitepapers', id: 'hero' },
        { label: 'Insights', id: 'hero' },
        { label: 'Resources', id: 'hero' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-blue-700 to-accent text-white relative overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">

        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Logo */}
          <motion.div
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => handleNavigation('hero')}
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-lg text-primary shadow-lg">
                G
              </div>

              <div>
                <span className="font-bold text-lg block">
                  GLOBALUXE
                </span>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Consulting
                </p>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              A worldwide consulting and solutions company driving innovation,
              transformation, and sustainable growth across industries.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
            >
              <h3 className="font-semibold mb-5 text-white text-lg">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <button
                      onClick={() => handleNavigation(link.id)}
                      className="text-white/70 hover:text-white transition-all duration-300 text-sm hover:translate-x-1"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >

          {/* Copyright */}
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} GLOBALUXE Consulting. All rights reserved.
          </p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

{/* LinkedIn */}
<motion.a
  href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg group"
  variants={itemVariants}
  whileHover={{ y: -3 }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z" />
  </svg>
</motion.a>

            {/* Twitter / X */}
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <img
                src="https://cdn.simpleicons.org/x/ffffff"
                alt="Twitter"
                className="w-5 h-5"
              />
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <img
                src="https://cdn.simpleicons.org/facebook/ffffff"
                alt="Facebook"
                className="w-5 h-5"
              />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <img
                src="https://cdn.simpleicons.org/instagram/ffffff"
                alt="Instagram"
                className="w-5 h-5"
              />
            </motion.a>

          </motion.div>

          {/* Bottom Links */}
          <div className="flex gap-4 text-white/60 text-sm flex-wrap justify-center">
            <button
              onClick={() => handleNavigation('hero')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>

            <span>•</span>

            <button
              onClick={() => handleNavigation('hero')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>

            <span>•</span>

            <button
              onClick={() => handleNavigation('hero')}
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll To Top */}
      <motion.button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-xl hover:bg-neutral-100 transition-all duration-300 font-bold z-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;