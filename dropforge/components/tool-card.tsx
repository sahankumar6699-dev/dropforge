import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionArticle } from "@/components/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Tool } from "@/lib/tools";

type ToolCardProps = {
  tool: Tool;
  index?: number;
};

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Link href={tool.href} className="group block h-full">
        <Card className="relative h-full overflow-hidden rounded-lg transition duration-300 hover:border-primary/45 hover:bg-white/[0.08]">
          <div
            className={cn(
              "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-30 blur-2xl transition group-hover:opacity-60",
              tool.accent
            )}
          />
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br shadow-[0_0_32px_rgba(99,102,241,0.35)]",
                  tool.accent
                )}
              >
                <Icon className="h-6 w-6 text-white" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-cyan-200" />
            </div>
            <CardTitle className="pt-2 text-white">{tool.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">{tool.description}</p>
          </CardContent>
        </Card>
      </Link>
    </MotionArticle>
  );
}
