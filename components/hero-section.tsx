"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DataFlowScene } from "./data-flow-scene";
import { MouseGlow } from "./mouse-glow";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <MouseGlow />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="neon-text bg-gradient-to-r from-purple-400 via-pink-600 to-cyan-400 bg-clip-text text-4xl font-black text-transparent sm:text-6xl lg:text-7xl">
            Drop. Convert. Create.
          </h1>
          <p className="mt-6 text-lg text-slate-300 sm:text-xl">
            Your ultimate toolkit for fast, private file conversion. All processing happens
            right in your browser.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="#tools">Explore Tools</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <DataFlowScene />
        </motion.div>
      </div>
    </section>
  );
}
