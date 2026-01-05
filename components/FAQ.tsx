"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the WhatsApp housing search work?",
    answer:
      "You simply message our AI agent on WhatsApp. It asks for your location, budget, and house type, then instantly shows available listings near you.",
  },
  {
    question: "Is this service free?",
    answer:
      "Yes. Searching for houses is completely free. Some landlords or agents may attach inspection fees, depending on their policies.",
  },
  {
    question: "Where do the listings come from?",
    answer:
      "We gather verified listings from our network of landlords, agents, and trusted housing platforms to ensure accuracy.",
  },
  {
    question: "Can I schedule inspections via WhatsApp?",
    answer:
      "Yes. After you select a house, our agent will automatically help you book an inspection with the property contact.",
  },
  {
    question: "Do I need to download any app?",
    answer:
      "No app needed. Everything happens inside WhatsApp—fast, simple, and familiar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Frequently Asked <span className="text-[#fa343a]">Questions</span>
        </h2>
        <p className="text-gray-400 text-center mt-3 max-w-xl mx-auto text-sm md:text-base">
          Everything you need to know before getting started.
        </p>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#101010] border border-[#222] overflow-hidden hover:border-[#fa343a55] transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start gap-3 p-5 text-left"
              >
                {/* Accent bar */}
                <div
                  className={`w-1 rounded-full h-6 mt-1 transition-all ${
                    openIndex === index ? "bg-[#fa343a]" : "bg-[#333]"
                  }`}
                ></div>

                <span className="text-base md:text-lg font-medium">
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 pb-5 text-gray-400 text-sm md:text-base transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
