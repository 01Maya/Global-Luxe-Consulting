'use client';

import { motion } from 'framer-motion';

const WorldMap = () => {
  const locations = [
    // New York
    { x: 230, y: 180 },

    // Toronto
    { x: 260, y: 150 },

    // Mumbai
    { x: 720, y: 240 },

    // Tokyo
    { x: 840, y: 200 },

    // Sydney
    { x: 860, y: 390 },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 md:p-6">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-violet-100/40 blur-3xl opacity-70" />

      {/* Top Glow */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl" />

      {/* MAP CONTAINER */}
      <div className="relative z-10">

        {/* Dotted World Map */}
        <img
          src="/image.png"
          alt="Dotted World Map"
          className="w-full h-auto opacity-30 select-none pointer-events-none"
        />

        {/* Animated Overlay */}
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

          {/* NYC → Toronto */}
          <motion.path
            d="M230 180 Q245 130 260 150"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* Toronto → Mumbai */}
          <motion.path
            d="M260 150 Q520 40 720 240"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Mumbai → Tokyo */}
          <motion.path
            d="M720 240 Q790 170 840 200"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.3 }}
          />

          {/* Tokyo → Sydney */}
          <motion.path
            d="M840 200 Q900 280 860 390"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.6 }}
          />

          {/* Glow Dots */}
          {locations.map((dot, idx) => (
            <g key={idx}>
              {/* Main Dot */}
              <circle
                cx={dot.x}
                cy={dot.y}
                r="7"
                fill="#2563EB"
              />

              {/* Pulse Ring */}
              <circle
                cx={dot.x}
                cy={dot.y}
                r="24"
                fill="#2563EB"
                opacity="0.15"
              >
                <animate
                  attributeName="r"
                  values="10;28;10"
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

      {/* Floating Status Card */}
      <motion.div
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/80 backdrop-blur-xl border border-primary/10 rounded-2xl px-5 py-4 shadow-xl z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

          <p className="text-sm font-medium text-neutral-700 whitespace-nowrap">
            Global operations active in real-time
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WorldMap;