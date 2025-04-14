"use client";

import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const faqItems = [
    {
      question: "Who is qualified to apply?",
      answer: "We seek builders who can write software and have strong product sense. Crypto native experience and GTM knowledge are valuable additions.",
    },
    {
      question: "Why is a prototype highly recommended?",
      answer: "Given the funding amount, we rely on founders to build the MVP themselves. Technical capability is crucial.",
    },
    {
      question: "How long does the program last?",
      answer:
        "There's no fixed duration. We target significant milestones within 3 months and provide support through next stages (accelerators/funding rounds). We also host quarterly demo days.",
    },
    {
      question: "Is it remote or in-person?",
      answer: "This is a fully remote program.",
    },
    {
      question: "Looking for something even earlier-stage?",
      answer:
        "If you're still refining your product thesis and exploring early product-market fit, our Entrepreneur in Residence (EIR) Program might be a better fit. This 6-month, in-person program in Hong Kong and Shenzhen provides funding, mentorship, and resources to help founders experiment, build, and validate ideas.",
    },
    {
      question: "How long does the application review take?",
      answer: "We review applications within two weeks after submission.",
    },
  ];

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5 }}>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
