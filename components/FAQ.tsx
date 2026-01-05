"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I book rides or order food?",
    answer:
      "Just message our Motion bot on WhatsApp. It asks what you need — a ride, food, groceries, or parcels — then helps you complete your order instantly.",
  },
  {
    question: "Do I need to download an app?",
    answer:
      "No app needed! Everything happens inside WhatsApp — fast, simple, and familiar.",
  },
  {
    question: "Are there any fees?",
    answer:
      "Rides, deliveries, and orders are charged as usual by the service provider. Using Motion on WhatsApp is completely free.",
  },
  {
    question: "Which services are available?",
    answer:
      "Motion currently supports booking rides (Uber, Bolt, inDrive), ordering food, sending parcels, and shopping for groceries — all through WhatsApp.",
  },
  {
    question: "Is Motion available everywhere?",
    answer:
      "Motion works wherever WhatsApp is available. Services depend on local providers, so you can check availability in your area directly through the chat.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Frequently Asked <span className="text-[#0F9D58]">Questions</span>
        </h2>
        <p className="text-gray-600 text-center mt-3 max-w-xl mx-auto text-sm md:text-base">
          Everything you need to know before getting started with Motion.
        </p>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#F9FAFB] border border-gray-200 overflow-hidden hover:border-[#0F9D58] transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start gap-3 p-5 text-left"
              >
                {/* Accent bar */}
                <div
                  className={`w-1 rounded-full h-6 mt-1 transition-all ${
                    openIndex === index ? "bg-[#0F9D58]" : "bg-gray-300"
                  }`}
                ></div>

                <span className="text-base md:text-lg font-medium">
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 pb-5 text-gray-600 text-sm md:text-base transition-all duration-300 ${
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
