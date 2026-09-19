const stats = [
  { value: "3", label: "Live local websites", sub: "Retail, healthcare & industrial" },
  { value: "6+", label: "Business categories", sub: "From clinics to restaurants" },
  { value: "2", label: "Home districts", sub: "Sambalpur & Bargarh" },
  { value: "₹0", label: "To see your sample", sub: "Free means free" },
];

const categories = [
  "Retail Stores",
  "Clinics & Doctors",
  "Hotels & Stays",
  "Restaurants & Cafes",
  "Local Services",
  "Industrial & Trade",
];

export function Stats() {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <h2 className="font-serif text-center text-3xl font-semibold text-[#172B4D] sm:text-4xl">
          Built for Businesses <em className="italic text-[#BE123C]">Like Yours.</em>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-7 text-zinc-600">
          No stock reviews, no borrowed logos. Just real local projects, real
          categories and a free-sample promise you can verify yourself.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-zinc-200 bg-[#FAF7F2] p-6 text-center">
              <p className="font-serif text-3xl font-semibold text-[#172B4D]">{s.value}</p>
              <p className="mt-2 text-sm font-semibold text-zinc-700">{s.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
