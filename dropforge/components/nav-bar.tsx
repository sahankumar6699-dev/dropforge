import Link from "next/link";
import { ArrowUpRight, Boxes } from "lucide-react";
import { navItems } from "@/lib/tools";
import { Button } from "@/components/ui/button";

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/55 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="DropForge home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/15 shadow-[0_0_28px_rgba(147,90,255,0.45)]">
            <Boxes className="h-5 w-5 text-cyan-200" />
          </span>
          <span className="text-lg font-black tracking-normal text-white">DropForge</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button asChild key={item.href} variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
        <Button asChild variant="glass" size="sm">
          <Link href="/converter">
            Launch suite
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
