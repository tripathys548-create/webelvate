const problems = [
  {
    number: "01",
    title: "No Professional Website",
    description: "Customers don't know enough about your business before calling.",
  },
  {
    number: "02",
    title: "Hard to Find on Google",
    description: "Your business needs a proper online presence and Google Business Profile.",
  },
  {
    number: "03",
    title: "Missed Customers",
    description: "If contacting you takes effort, customers choose the next option.",
  },
];

export function Problem() {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BE123C]">
          Ch. 01 — The problem
        </p>
        <h2 className="font-serif mt-3 max-w-2xl text-3xl font-semibold text-[#172B4D] sm:text-4xl">
          Still depending only on WhatsApp{" "}
          <em className="italic text-zinc-500">and word of mouth?</em>
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
          Your customers are already searching online. If they can&apos;t find
          or trust you there, they move on to a business that shows up.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {problems.map((p) => (
            <div key={p.number} className="rounded-2xl border border-zinc-100 bg-[#FAF7F2] p-7">
              <span className="font-serif text-3xl text-zinc-300">{p.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-[#172B4D]">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{p.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-base font-semibold text-[#172B4D]">
          WebElvate fixes all three <span aria-hidden="true">→</span>
        </p>
      </div>
    </section>
  );
}
