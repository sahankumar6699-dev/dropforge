import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";

const faqs = [
  {
    question: "Is my data safe?",
    answer:
      "All files are processed locally on your device. We don't store or transmit your data to external servers."
  },
  {
    question: "What file formats are supported?",
    answer:
      "DropForge supports a wide variety of formats including MP4, WebM, PDF, PNG, JPG, and many more. Check our tool pages for specific format details."
  },
  {
    question: "Is there a file size limit?",
    answer:
      "File sizes depend on your browser and device capabilities. We recommend files under 500MB for optimal performance."
  },
  {
    question: "Can I use DropForge offline?",
    answer:
      "DropForge is web-based and requires an internet connection. However, processing happens locally once the page loads."
  }
];

export function FAQSection() {
  return (
    <section className="border-t border-slate-700/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about DropForge"
        />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-white hover:text-cyan-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
