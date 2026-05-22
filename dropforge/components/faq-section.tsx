import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";

const faqs = [
  {
    question: "Does DropForge include backend processing?",
    answer:
      "No. This project is frontend only. The UI is ready for future API routes or external services, but no downloader, converter, or storage backend is included."
  },
  {
    question: "Is it ready for mobile users?",
    answer:
      "Yes. Pages use responsive grids, touch-friendly buttons, constrained text, and layouts that collapse cleanly on small screens."
  },
  {
    question: "Can real tools be connected later?",
    answer:
      "Yes. The catalog in lib/tools.ts drives the cards and category pages, so backend-backed tools can be added without reshaping the whole interface."
  },
  {
    question: "Is it configured for Vercel?",
    answer:
      "Yes. It uses standard Next.js App Router conventions, production scripts, and a Vercel-friendly project structure."
  }
];

export function FAQSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Clear answers before launch"
        description="DropForge is designed as a polished frontend foundation that can grow into a real processing platform."
      />
      <div className="glass mx-auto mt-12 max-w-3xl rounded-lg px-6">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
