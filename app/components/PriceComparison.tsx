const agencyCons = [
  "₹20,000+ starting price",
  "Large upfront payment",
  "Long, unclear process",
  "Technical jargon",
  "Maintenance headaches",
];

const webelvatePros = [
  "Affordable, simple quote",
  "Free sample before you pay",
  "Fast turnaround",
  "WhatsApp-first communication",
  "Ongoing support included",
];

export function PriceComparison() {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="font-serif text-center text-3xl font-semibold text-[#172B4D] sm:text-4xl">
          A Better Website Without{" "}
          <em className="italic text-[#BE123C]">the Agency Price Tag.</em>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-[#FAF7F2] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Traditional agency
            </p>
            <p className="font-serif mt-3 text-3xl font-semibold text-zinc-500">₹20,000+</p>
            <ul className="mt-6 space-y-3">
              {agencyCons.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-500">
                  <span className="mt-0.5 text-zinc-400">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#F43F5E]/25 bg-[#FDECEF] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#BE123C]">
              WebElvate
            </p>
            <p className="font-serif mt-3 text-3xl font-semibold text-[#172B4D]">Start at ₹0</p>
            <ul className="mt-6 space-y-3">
              {webelvatePros.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#172B4D]">
                  <span className="mt-0.5 text-[#BE123C]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          No inflated packages — ask us for a simple quote.
        </p>
      </div>
    </section>
  );
}
