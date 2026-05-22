import { ToolCategoryPage } from "@/components/tool-category-page";
import { toolCategories } from "@/lib/tools";

export const metadata = {
  title: "Converter Tools",
  description: "Convert media, images, and documents with a clean futuristic workflow."
};

export default function ConverterToolsPage() {
  return <ToolCategoryPage category={toolCategories.converter} />;
}
