import Link from "next/link";
import { ArrowLeft, UploadCloud } from "lucide-react";
import { Footer } from "@/components/footer";
import { MotionDiv } from "@/components/motion";
import { NavBar } from "@/components/nav-bar";
import { ToolCard } from "@/components/tool-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ToolCategory } from "@/lib/tools";

type ToolCategoryPageProps = {
  category: ToolCategory;
};

export function ToolCategoryPage({ category }: ToolCategoryPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-fade pointer-events-none fixed inset-0 opacity-50" />
      <NavBar />
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div
          className={cn(
            "absolute left-1/2 top-16 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r blur-3xl",
            category.gradient
          )}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
          </Button>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_25rem] lg:items-end">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                {category.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-normal text-white sm:text-6xl">
                {category.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {category.description}
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="glass rounded-lg p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-cyan-300/15 text-cyan-200">
                <UploadCloud className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-white">Drop zone preview</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Backend processing is intentionally absent. This production frontend is
                ready for upload handlers, queues, and conversion APIs later.
              </p>
            </MotionDiv>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.tools.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
