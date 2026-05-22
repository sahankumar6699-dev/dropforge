import { ToolCategoryPage } from "@/components/tool-category-page";
import { toolCategories } from "@/lib/tools";

export const metadata = {
  title: "PDF Tools",
  description: "Merge PDFs, convert documents, and scan text with DropForge."
};

export default function PDFToolsPage() {
  return <ToolCategoryPage category={toolCategories.pdf} />;
}
