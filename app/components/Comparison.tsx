const before = [
  "Hard to find online",
  "Basic social presence",
  "Customers rely on calls/WhatsApp",
  "No professional digital identity",
];

const after = [
  "Google presence",
  "WhatsApp integration",
  "Mobile-first experience",
  "Clear services",
  "Stronger customer trust",
];

export function Comparison() {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-zinc-200 bg-[#FAF7F2] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">Before</p>
            <ul className="mt-5 space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-500">
                  <span className="mt-0.5 text-zinc-400">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#F43F5E] text-white sm:mx-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
          <div className="rounded-2xl border border-[#F43F5E]/25 bg-[#FDECEF] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#BE123C]">With WebElvate</p>
            <ul className="mt-5 space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#172B4D]">
                  <span className="mt-0.5 text-[#BE123C]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
