"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days within the US. Express shipping (2-3 business days) is available at checkout. International orders typically arrive within 10-15 business days depending on the destination.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a hassle-free 30-day return policy. If you're not completely satisfied with your purchase, simply initiate a return through your account dashboard. Items must be unused and in their original packaging. Refunds are processed within 5-7 business days.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use Stripe for payment processing, which is PCI-DSS Level 1 certified — the highest level of security in the payment industry. Your card details are encrypted and never stored on our servers.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with a tracking number and link. You can also track your order status anytime by logging into your account and visiting the 'My Orders' section.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship to over 50 countries worldwide. International shipping rates and delivery times vary by location. You can see the exact shipping cost at checkout before completing your purchase.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <HelpCircle className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-muted">
            Find quick answers to common questions about orders, shipping, and
            more.
          </p>
        </div>

        <div className="divide-y divide-border rounded-xl border border-border">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-surface"
                >
                  <span className="pr-4 text-sm font-semibold text-gray-900 sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
