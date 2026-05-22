"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export function ToolCard({ icon, title, description, href }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass group relative overflow-hidden rounded-lg p-6 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-cyan-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

      <div className="relative z-10">
        <div className="mb-4 inline-block rounded-lg bg-slate-800 p-3">{icon}</div>

        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{description}</p>

        <Button asChild className="mt-4 w-full" variant="outline">
          <Link href={href}>Explore</Link>
        </Button>
      </div>
    </motion.div>
  );
}
