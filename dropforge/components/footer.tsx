import Link from "next/link";
import { Boxes } from "lucide-react";
import { navItems } from "@/lib/tools";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/15">
            <Boxes className="h-5 w-5 text-cyan-200" />
          </span>
          <span>
            <span className="block font-bold text-white">DropForge</span>
            <span className="text-sm text-muted-foreground">Drop. Convert. Create.</span>
          </span>
        </Link>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">Frontend only. Built for Vercel.</p>
      </div>
    </footer>
  );
}
