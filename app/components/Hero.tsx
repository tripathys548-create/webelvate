import { PrimaryButton, SecondaryButton } from "./buttons";
import { WhatsAppIcon } from "./whatsapp";

const checklist = [
  { label: "Business Name", icon: "business", live: false },
  { label: "Website Design", icon: "design", live: false },
  { label: "WhatsApp", icon: "whatsapp", live: false },
  { label: "Google Maps", icon: "maps", live: false },
  { label: "Live Website", icon: "live", live: true },
] as const;

function ChecklistIcon({ kind }: { kind: (typeof checklist)[number]["icon"] }) {
  const common = "h-4 w-4";
  switch (kind) {
    case "business":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={common}><rect x="4" y="7" width="16" height="13" rx="1.5" /><path d="M9 7V5a3 3 0 0 1 6 0v2" /></svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={common}><rect x="3.5" y="4.5" width="17" height="15" rx="2" /><path d="M3.5 9h17" /></svg>
      );
    case "whatsapp":
      return <WhatsAppIcon className={common} />;
    case "maps":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={common}><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.25" /></svg>
      );
    case "live":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={common}><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></svg>
      );
  }
}

export function Hero() {
  return (
    <section className="border-b border-zinc-100 bg-[#FAF7F2]">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BE123C]">
            Website studio · Sambalpur · Bargarh · Odisha
          </p>
          <h1 className="font-serif max-w-xl text-4xl font-semibold leading-tight text-[#172B4D] sm:text-5xl">
            Your business deserves a website that looks{" "}
            <em className="italic text-[#BE123C]">expensive</em>.
          </h1>
          <p className="font-serif max-w-lg text-xl italic text-zinc-500">
            See yours free before you pay.
          </p>
          <p className="max-w-lg text-base leading-7 text-zinc-600">
            WebElvate builds fast, modern websites for local businesses. Tell
            us what you do, and we&apos;ll create a real sample website for
            your business — completely free, with no obligation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Get My Free Sample</PrimaryButton>
            <SecondaryButton href="#portfolio">See Our Work</SecondaryButton>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-zinc-500">
            <span>✓ No upfront payment</span>
            <span>✓ No obligation</span>
            <span>✓ Built for your business</span>
          </div>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/5">
            <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="ml-2 text-[11px] text-zinc-500">yourbusiness.webelvate.com</span>
            </div>
            <div className="space-y-3 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
                Your business website
              </p>
              {checklist.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                    item.live
                      ? "border-[#F43F5E]/30 bg-[#FDECEF]"
                      : "border-zinc-100 bg-zinc-50"
                  }`}
                >
                  <span className={item.live ? "text-[#BE123C]" : "text-zinc-400"}>
                    <ChecklistIcon kind={item.icon} />
                  </span>
                  <span className="flex-1 text-sm font-medium text-zinc-700">
                    {item.label}
                  </span>
                  {item.live && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#BE123C]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#BE123C]" />
                      LIVE
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-900/20">
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
}
