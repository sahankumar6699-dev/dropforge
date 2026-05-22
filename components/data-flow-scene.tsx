"use client";

import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15
    }
  })
};

const arrowVariants = {
  hidden: { pathLength: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.5
    }
  })
};

export function DataFlowScene() {
  return (
    <div className="relative h-40 w-full">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 160"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Animated Arrows */}
        <motion.path
          custom={0}
          variants={arrowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          d="M 180 80 L 220 80"
          stroke="url(#gradientArrow1)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <motion.path
          custom={1}
          variants={arrowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          d="M 420 80 L 460 80"
          stroke="url(#gradientArrow2)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <motion.path
          custom={2}
          variants={arrowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          d="M 660 80 L 700 80"
          stroke="url(#gradientArrow3)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arrow heads */}
        <polygon
          points="225,80 215,75 215,85"
          fill="url(#gradientArrow1)"
        />
        <polygon
          points="465,80 455,75 455,85"
          fill="url(#gradientArrow2)"
        />
        <polygon
          points="705,80 695,75 695,85"
          fill="url(#gradientArrow3)"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradientArrow1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#9d63ff", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#00bcff", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="gradientArrow2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#00bcff", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#ee4eff", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="gradientArrow3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#ee4eff", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#9d63ff", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Boxes */}
      <motion.div
        custom={0}
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 w-32 -translate-y-1/2 transform rounded-lg border border-purple-400/50 bg-gradient-to-br from-purple-900/20 to-transparent p-4 text-center"
      >
        <p className="text-xs font-semibold text-purple-200">INPUT</p>
        <p className="mt-2 text-lg font-bold text-white">Files</p>
      </motion.div>

      <motion.div
        custom={1}
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-cyan-400/50 bg-gradient-to-br from-cyan-900/20 to-transparent p-4 text-center"
      >
        <p className="text-xs font-semibold text-cyan-200">PROCESS</p>
        <p className="mt-2 text-lg font-bold text-white">Convert</p>
      </motion.div>

      <motion.div
        custom={2}
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute right-0 top-1/2 w-32 -translate-y-1/2 transform rounded-lg border border-pink-400/50 bg-gradient-to-br from-pink-900/20 to-transparent p-4 text-center"
      >
        <p className="text-xs font-semibold text-pink-200">OUTPUT</p>
        <p className="mt-2 text-lg font-bold text-white">Result</p>
      </motion.div>
    </div>
  );
}
