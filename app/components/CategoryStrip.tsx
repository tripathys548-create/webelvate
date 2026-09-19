const categories = [
  "Retail",
  "Clinics",
  "Hotels",
  "Restaurants",
  "Services",
  "Local Business",
];

export function CategoryStrip() {
  return (
    <section className="border-b border-zinc-100 bg-[#FAF7F2] py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
          Built for real local businesses
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600"
            >
              {c}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#172B4D] px-4 py-1.5 text-sm font-medium text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-3.5 w-3.5"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.25" /></svg>
          Sambalpur · Bargarh · Odisha
        </span>
      </div>
    </section>
  );
}
