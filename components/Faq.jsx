"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/faq-data";

export default function Faq() {
  return (
    <section
      id="faqs"
      className="w-full max-w-[1000px] mx-auto px-4 py-24 relative z-10"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <span
          className="inline-flex items-center gap-2 text-sm border border-white/10 rounded-full px-4 py-1.5 bg-white/3 mb-6"
          style={{ color: "#9ca3af" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#feda6a]" />
          Need to know
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ color: "#ffffff" }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion */}
      <div className="rounded-2xl border border-white/10 bg-white/2 overflow-hidden">
        <Accordion type="single" collapsible defaultValue="item-1">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className={`px-6 md:px-8 border-white/6 ${
                i === faqs.length - 1 ? "border-b-0" : ""
              }`}
            >
              <AccordionTrigger
                className="py-5 md:py-6 text-base md:text-lg hover:no-underline font-medium cursor-pointer"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p
                  style={{ color: "#9ca3af" }}
                  className="text-sm md:text-base leading-relaxed pb-2"
                >
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
