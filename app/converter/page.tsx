import { ToolCategoryPage } from "@/components/tool-category-page";
import { toolCategories } from "@/lib/tools";

export default function ConverterPage() {
  return <ToolCategoryPage category={toolCategories.converter} />;
}
