import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-lg rounded-lg p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
          Signal lost
        </p>
        <h1 className="mt-4 text-4xl font-black text-white">404</h1>
        <p className="mt-4 text-muted-foreground">
          This DropForge route is not available yet.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
