'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - CTA */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">LET&apos;S CONNECT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 leading-tight">
              Let&apos;s Build the <span className="text-gradient">Future Together</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Have a project in mind or want to learn more about how we can help? Let&apos;s connect and explore what&apos;s possible together.
            </p>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-neutral-600">hello@globaluxe.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-neutral-600">One World Trade Center, New York, NY 10007 USA</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {['linkedin', 'twitter', 'facebook', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover-glow hover-scale transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-lg">
                    {social === 'linkedin' && '💼'}
                    {social === 'twitter' && '𝕏'}
                    {social === 'facebook' && 'f'}
                    {social === 'instagram' && '📷'}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="p-8 md:p-10 rounded-2xl glass shadow-premium-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:border-primary focus:outline-none transition-all text-foreground placeholder-neutral-500"
                    placeholder="Your name"
                    required
                    minLength={2}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:border-primary focus:outline-none transition-all text-foreground placeholder-neutral-500"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>

              {/* Company & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:border-primary focus:outline-none transition-all text-foreground placeholder-neutral-500"
                    placeholder="Your company"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:border-primary focus:outline-none transition-all text-foreground placeholder-neutral-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-foreground mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:border-primary focus:outline-none transition-all text-foreground placeholder-neutral-500 resize-none h-32"
                  placeholder="Tell us about your project..."
                  required
                  minLength={10}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover-lift hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
