import { ToolCategoryPage } from "@/components/tool-category-page";
import { toolCategories } from "@/lib/tools";

export const metadata = {
  title: "Video Tools",
  description: "Download, extract, and convert creator video assets with DropForge."
};

export default function VideoToolsPage() {
  return <ToolCategoryPage category={toolCategories.video} />;
}
