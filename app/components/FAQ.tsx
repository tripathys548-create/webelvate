import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "Is the sample site really free?",
    answer:
      "Yes. We build a real, working sample site for your business before any payment or commitment on your part.",
  },
  {
    question: "What if I don't like the sample?",
    answer:
      "There's no obligation to continue. We refine it with you until it's right, and there's no pricing conversation until you've seen it.",
  },
  {
    question: "Do you write content in Odia?",
    answer:
      "Yes — copy can be written in Odia, English, or a mix, including Sambalpuri Odia where it fits your customers.",
  },
  {
    question: "What happens after the site is live?",
    answer:
      "We stay on for updates, fixes, and hosting questions, so you don't need to touch any code yourself.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-zinc-100 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#F43F5E]">
          FAQ
        </h2>
        <p className="font-display mt-2 max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Common questions before you message us.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {faqs.map((faq) => (
            <Reveal key={faq.question}>
              <div className="h-full rounded-2xl border border-zinc-100 bg-white p-6">
                <h3 className="text-base font-semibold text-zinc-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {faq.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
