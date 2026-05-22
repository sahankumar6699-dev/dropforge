import { Bot, Gauge, Layers3, LockKeyhole, WandSparkles, Workflow } from "lucide-react";
import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    title: "App Router architecture",
    description: "Route-level metadata, reusable category pages, and server-first composition.",
    icon: Workflow
  },
  {
    title: "Glassmorphism system",
    description: "Shared neon cards, focused controls, and dark-only visual tokens.",
    icon: Layers3
  },
  {
    title: "Motion polish",
    description: "Framer Motion reveals, hover lifts, floating panels, and smooth hero energy.",
    icon: WandSparkles
  },
  {
    title: "SEO foundations",
    description: "Structured metadata and descriptive pages for each tool category.",
    icon: Bot
  },
  {
    title: "Fast deployment",
    description: "Vercel-ready Next config with package import optimization.",
    icon: Gauge
  },
  {
    title: "Frontend only",
    description: "Prepared UI flows without backend assumptions or hidden API coupling.",
    icon: LockKeyhole
  }
];

export function FeatureSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Production surface"
        title="Built to scale beyond the first launch"
        description="DropForge keeps reusable design primitives separate from content and route logic, so real tools can be added cleanly later."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="glass rounded-lg p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </MotionDiv>
          );
        })}
      </div>
    </section>
  );
}
