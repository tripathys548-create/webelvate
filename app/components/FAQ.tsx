"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the sample website really free?",
    answer: "Yes. We design a real sample website for your business at no cost. You only pay if you approve it and decide to go live.",
  },
  {
    question: "How long does it take?",
    answer: "We move quickly once you share your business details, and keep you updated until your sample is ready.",
  },
  {
    question: "Can I request changes?",
    answer: "Yes. Once you see your sample, tell us what you'd like changed and we'll refine it before you decide anything.",
  },
  {
    question: "Will my website work on mobile?",
    answer: "Yes. Every website we build is mobile-friendly by default, since most of your customers will visit from a phone.",
  },
  {
    question: "Can you connect WhatsApp?",
    answer: "Yes. We add click-to-chat WhatsApp buttons so customers can reach you directly from your website.",
  },
  {
    question: "Can you help with Google Maps?",
    answer: "Yes. We help set up and connect your Google Business Profile so customers can find you on Maps and Search.",
  },
  {
    question: "Can the website be in Odia?",
    answer: "Yes — copy can be written in Odia, English, or a mix, including Sambalpuri Odia where it fits your customers.",
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes. We handle hosting as part of ongoing support, so you don't need to manage any of the technical side.",
  },
  {
    question: "Can you maintain the website after launch?",
    answer: "Yes. We stay on for updates, fixes, and hosting questions after your site goes live.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. If you already have a website, we can rebuild or refresh it — the same free-sample process applies.",
  },
  {
    question: "Do you work outside Sambalpur and Bargarh?",
    answer: "We're focused on Sambalpur and Bargarh right now, but message us on WhatsApp and we can discuss your business either way.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-zinc-100 bg-white">
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#BE123C]">
          Ch. 11 — FAQ
        </p>
        <h2 className="font-serif mt-3 text-center text-3xl font-semibold text-[#172B4D] sm:text-4xl">
          Questions? <em className="italic text-zinc-500">Answered.</em>
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-zinc-200 bg-[#FAF7F2]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-[#172B4D]"
                >
                  {faq.question}
                  <span
                    className={`flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white text-zinc-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-6 text-zinc-600">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
