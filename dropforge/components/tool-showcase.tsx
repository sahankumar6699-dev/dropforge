import { featuredTools } from "@/lib/tools";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";

export function ToolShowcase() {
  return (
    <section id="tools" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Tool showcase"
        title="One forge for every creator drop"
        description="The frontend is built around focused utility cards, clean routing, and conversion-ready interaction patterns."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredTools.map((tool, index) => (
          <ToolCard key={tool.name} tool={tool} index={index} />
        ))}
      </div>
    </section>
  );
}
