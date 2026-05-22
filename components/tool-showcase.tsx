import { tools } from "@/lib/tools";
import { ToolCard } from "./tool-card";
import { SectionHeading } from "./section-heading";

export function ToolShowcase() {
  const featuredTools = tools.slice(0, 6);

  return (
    <section id="tools" className="border-t border-slate-700/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Our Tools"
          subtitle="Everything you need for file conversion and processing"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              href={tool.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
