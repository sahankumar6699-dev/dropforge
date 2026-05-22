import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { DataFlowScene } from "@/components/data-flow-scene";
import { MotionDiv, MotionSection } from "@/components/motion";
import { MouseGlow } from "@/components/mouse-glow";
import { Button } from "@/components/ui/button";

const floatingCards = [
  { label: "8 featured tools", icon: Sparkles, className: "left-4 top-28 md:left-10" },
  { label: "Fast frontend flows", icon: Zap, className: "right-4 top-44 md:right-16" },
  { label: "Vercel ready", icon: ShieldCheck, className: "bottom-12 left-8 md:left-28" }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <MouseGlow />
      <DataFlowScene />
      <div className="aurora absolute left-1/2 top-10 h-[34rem] w-[70rem] -translate-x-1/2 animate-pulse opacity-75" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      {floatingCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <MotionDiv
            key={card.label}
            className={`glass absolute hidden rounded-lg px-4 py-3 text-sm font-medium text-white lg:flex ${card.className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ duration: 4, delay: index * 0.4, repeat: Infinity }}
          >
            <Icon className="mr-2 h-4 w-4 text-cyan-200" />
            {card.label}
          </MotionDiv>
        );
      })}

      <MotionSection
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_28px_rgba(0,188,255,0.2)]">
          <Sparkles className="mr-2 h-4 w-4" />
          Cyberpunk conversion workspace
        </div>
        <h1 className="neon-text text-5xl font-black tracking-normal text-white sm:text-7xl lg:text-8xl">
          DropForge
        </h1>
        <p className="mt-5 text-2xl font-semibold text-cyan-100 sm:text-3xl">
          Drop. Convert. Create.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          A futuristic SaaS frontend for creators who need video, PDF, image, OCR,
          and conversion tools in one luminous command center.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/converter">
              Explore tools
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="glass">
            <Link href="/video">
              <Play className="h-5 w-5" />
              Video suite
            </Link>
          </Button>
        </div>
      </MotionSection>
    </section>
  );
}
