import { ToolCategoryPage } from "@/components/tool-category-page";
import { toolCategories } from "@/lib/tools";

export const metadata = {
  title: "Image Tools",
  description: "Compress images, convert formats, and package images into PDFs."
};

export default function ImageToolsPage() {
  return <ToolCategoryPage category={toolCategories.image} />;
}
