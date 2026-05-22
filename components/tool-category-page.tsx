import { tools } from "@/lib/tools";
import { ToolCard } from "./tool-card";
import { SectionHeading } from "./section-heading";
import { Button } from "./ui/button";
import Link from "next/link";

interface ToolCategoryPageProps {
  category: "converter" | "image" | "pdf" | "video";
}

export function ToolCategoryPage({ category }: ToolCategoryPageProps) {
  const categoryTools = tools.filter((tool) => tool.category === category);
  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className="min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">&larr; Back to Home</Link>
        </Button>

        <SectionHeading
          title={`${categoryName} Tools`}
          subtitle={`Powerful tools for all your ${categoryName.toLowerCase()} needs`}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryTools.map((tool) => (
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
    </main>
  );
}
