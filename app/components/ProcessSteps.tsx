import { PrimaryButton } from "./buttons";

const steps = [
  {
    step: "01",
    title: "Tell Us About Your Business",
    description: "Send your business name, services and basic information.",
    icon: "send",
  },
  {
    step: "02",
    title: "We Build Your Free Sample",
    description: "We create an actual working website.",
    icon: "key",
  },
  {
    step: "03",
    title: "You Review It",
    description: "Tell us what you want changed.",
    icon: "eye",
  },
  {
    step: "04",
    title: "Go Live",
    description: "Once you're happy, we launch your website.",
    icon: "rocket",
  },
] as const;

function StepIcon({ kind }: { kind: (typeof steps)[number]["icon"] }) {
  const common = "h-5 w-5";
  switch (kind) {
    case "send":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={common}><path d="m3 12 18-8-8 18-2-8-8-2Z" /></svg>;
    case "key":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={common}><circle cx="8" cy="15" r="4" /><path d="m11 12 8-8m0 0h-4m4 0v4" /></svg>;
    case "eye":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={common}><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "rocket":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={common}><path d="M14.5 9.5 20 4c-4 0-9 2-13 6-1.5 1.5-3 4-3.5 6.5C6 16 8.5 14.5 10 13c4-4 6-9 6-13" /><path d="M9 15c-2 1-3 3-3.5 5.5C8 20 10 19 11 17" /></svg>;
  }
}

export function ProcessSteps() {
  return (
    <section id="how-it-works" className="bg-[#172B4D] py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FDA4AF]">
          Ch. 03 — How it works
        </p>
        <h2 className="font-serif mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Don&apos;t Pay for a Website{" "}
          <em className="italic text-[#FDA4AF]">You Haven&apos;t Seen.</em>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F43F5E] text-white">
                  <StepIcon kind={s.icon} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-white/40">
                  Step {s.step}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PrimaryButton>Build My Free Sample</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
