"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-slate-700/50 bg-slate-950/50 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          DropForge
        </Link>

        <div className="hidden space-x-8 sm:flex">
          <Link href="/converter" className="text-slate-300 hover:text-cyan-400">
            Converter
          </Link>
          <Link href="/image" className="text-slate-300 hover:text-cyan-400">
            Image
          </Link>
          <Link href="/pdf" className="text-slate-300 hover:text-cyan-400">
            PDF
          </Link>
          <Link href="/video" className="text-slate-300 hover:text-cyan-400">
            Video
          </Link>
        </div>

        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-slate-300" />
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-2 sm:hidden">
          <Link href="/converter" className="block text-slate-300 hover:text-cyan-400">
            Converter
          </Link>
          <Link href="/image" className="block text-slate-300 hover:text-cyan-400">
            Image
          </Link>
          <Link href="/pdf" className="block text-slate-300 hover:text-cyan-400">
            PDF
          </Link>
          <Link href="/video" className="block text-slate-300 hover:text-cyan-400">
            Video
          </Link>
        </div>
      )}
    </nav>
  );
}
