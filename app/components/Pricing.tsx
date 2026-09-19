import { PrimaryButton, SecondaryButton } from "./buttons";

const freeIncludes = [
  "Real website sample",
  "Business-specific design",
  "Mobile-friendly layout",
  "No obligation",
];

const quoteIncludes = [
  "Number of pages",
  "Features",
  "Content",
  "Integrations",
  "Ongoing support",
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-zinc-100 bg-[#FAF7F2]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#BE123C]">
          Ch. 05 — Pricing
        </p>
        <h2 className="font-serif mt-3 text-center text-3xl font-semibold text-[#172B4D] sm:text-4xl">
          How much does <em className="italic text-zinc-500">it cost?</em>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-7 text-zinc-600">
          Simple and transparent. You start free, and only pay once
          you&apos;ve seen and approved your website.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="relative rounded-2xl border-2 border-[#F43F5E] bg-white p-8">
            <span className="absolute -top-3 right-6 rounded-full bg-[#BE123C] px-3 py-1 text-xs font-semibold text-white">
              Recommended start
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Start with a free sample
            </p>
            <p className="font-serif mt-3 text-4xl font-semibold text-[#172B4D]">₹0</p>
            <p className="mt-1 text-sm text-zinc-500">See your website before committing to anything.</p>
            <ul className="mt-6 space-y-3">
              {freeIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-zinc-700">
                  <span className="mt-0.5 text-[#BE123C]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <PrimaryButton className="mt-8 w-full">Request My Free Sample</PrimaryButton>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Need it live?
            </p>
            <p className="font-serif mt-3 text-4xl font-semibold text-[#172B4D]">Custom Quote</p>
            <p className="mt-1 text-sm text-zinc-500">Fair, simple pricing based on what your website actually needs:</p>
            <ul className="mt-6 space-y-3">
              {quoteIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-zinc-700">
                  <span className="mt-0.5 text-zinc-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <SecondaryButton href="#contact" className="mt-8 w-full">Get My Quote</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
