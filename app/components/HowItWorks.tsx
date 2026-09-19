import { Reveal } from "./Reveal";

const steps = [
  {
    step: "1",
    title: "Message us on WhatsApp",
    description: "Tell us about your business — what you do and who your customers are.",
  },
  {
    step: "2",
    title: "We build a free sample",
    description:
      "We put together a real, working sample site for your business — no payment, no commitment.",
  },
  {
    step: "3",
    title: "You review it",
    description: "Like what you see? We refine it with you until it's right.",
  },
  {
    step: "4",
    title: "We launch & support it",
    description: "We publish your site and stay on for updates and support afterward.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-zinc-100 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#F43F5E]">
          How it works
        </h2>
        <p className="font-display mt-2 max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          From a WhatsApp message to a live website.
        </p>
        <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 top-[18px] hidden h-px w-full bg-zinc-200 lg:block"
            aria-hidden="true"
          />
          {steps.map((item) => (
            <Reveal key={item.step}>
              <div className="relative flex flex-col gap-3">
                <span className="relative z-[1] flex h-9 w-9 items-center justify-center rounded-full bg-[#F43F5E] text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="text-base font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
