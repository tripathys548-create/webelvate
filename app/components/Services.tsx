import { ChatIcon, LanguageIcon, MapPinIcon, SearchIcon, SupportIcon, WebsiteIcon } from "./icons";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Website Design & Development",
    description: "Fast, responsive websites designed around your business.",
    icon: WebsiteIcon,
  },
  {
    title: "WhatsApp Integration",
    description: "One-click WhatsApp communication so customers can contact you instantly.",
    icon: ChatIcon,
  },
  {
    title: "Google Maps & Business Setup",
    description: "Help customers discover your business on Google.",
    icon: MapPinIcon,
  },
  {
    title: "Local SEO",
    description: "Structure your website so local customers can find you.",
    icon: SearchIcon,
  },
  {
    title: "Odia & English Content",
    description: "Content written for the language your customers actually use.",
    icon: LanguageIcon,
  },
  {
    title: "Ongoing Support",
    description: "Updates, fixes and hosting support after launch.",
    icon: SupportIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-zinc-100 bg-[#FAF7F2]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BE123C]">
          Ch. 02 — What we do
        </p>
        <h2 className="font-serif mt-3 max-w-xl text-3xl font-semibold text-[#172B4D] sm:text-4xl">
          Everything your business needs to be found online.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md hover:shadow-zinc-900/5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDECEF] text-[#BE123C]">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-[#172B4D]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
