'use client';

import { motion } from 'framer-motion';

const PresenceSection = () => {
  const stats = [
    { value: '40+', label: 'Countries' },
    { value: '100+', label: 'Cities' },
    { value: '250+', label: 'Global Experts' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section
      id="presence"
      className="py-20 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Label */}
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              OUR GLOBAL PRESENCE
            </motion.p>

            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              A Worldwide Network, A{' '}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                Local Advantage.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-neutral-600 leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              With a strong presence across the globe, we combine international
              expertise with local market understanding to deliver impactful
              solutions that empower businesses worldwide.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/80 backdrop-blur-xl p-5 md:p-6 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-accent/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Blur */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </h3>

                    <p className="text-sm text-neutral-600 mt-2">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-white font-semibold shadow-lg shadow-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
              >
                <span>View Our Presence</span>

                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7 7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-gradient-to-br from-primary/[0.03] via-white to-accent/[0.05] shadow-[0_10px_60px_rgba(37,99,255,0.08)] p-6 md:p-10">

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl opacity-50" />

              {/* Decorative Blur */}
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse" />
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-pulse" />

              {/* Heading */}
              <div className="relative z-10 text-center mb-10">
                <motion.p
                  className="font-bold text-2xl md:text-4xl text-neutral-900"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Global{' '}
                  <span className="text-neutral-400">
                    {'Connectivity'.split('').map((letter, idx) => (
                      <motion.span
                        key={idx}
                        className="inline-block"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.04,
                        }}
                        viewport={{ once: true }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </motion.p>

                <motion.p
                  className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto pt-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Connecting businesses, markets, and innovation worldwide with
                  seamless collaboration and global expertise.
                </motion.p>
              </div>

              {/* REAL WORLD MAP */}
              <div className="relative z-10 w-full mt-6">

                <div className="relative w-full overflow-hidden rounded-[28px]">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-violet-100/40 blur-3xl" />

                  {/* MAP IMAGE */}
                  <img
                    src="/image.png"
                    alt="World Map"
                    className="w-full h-auto opacity-[0.18] select-none pointer-events-none"
                  />

                  {/* CONNECTIONS */}
                  <svg
                    viewBox="0 0 1000 500"
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#7C3AED" />
                      </linearGradient>
                    </defs>

                    {/* Lines */}
                    <motion.path
                      d="M220 180 Q520 40 760 180"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2 }}
                    />

                    <motion.path
                      d="M300 320 Q520 120 820 380"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.4 }}
                    />

                    <motion.path
                      d="M520 180 Q650 200 760 180"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />

                    {/* Dots */}
                    {[
                      { x: 220, y: 180 },
                      { x: 300, y: 320 },
                      { x: 520, y: 180 },
                      { x: 760, y: 180 },
                      { x: 820, y: 380 },
                    ].map((dot, idx) => (
                      <g key={idx}>
                        <circle
                          cx={dot.x}
                          cy={dot.y}
                          r="7"
                          fill="#2563EB"
                        />

                        <circle
                          cx={dot.x}
                          cy={dot.y}
                          r="22"
                          fill="#2563EB"
                          opacity="0.15"
                        >
                          <animate
                            attributeName="r"
                            values="10;26;10"
                            dur="3s"
                            repeatCount="indefinite"
                          />

                          <animate
                            attributeName="opacity"
                            values="0.5;0;0.5"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-xl border border-primary/10 rounded-2xl p-4 shadow-xl hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

                  <p className="text-sm font-medium text-neutral-700">
                    Global operations active in real-time
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;