import { LanguageIcon, MapPinIcon, SupportIcon, WebsiteIcon } from "./icons";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Website design & build",
    description:
      "A clean, mobile-friendly website for your shop, clinic, hotel, or business — built to load fast on an average phone connection.",
    icon: WebsiteIcon,
  },
  {
    title: "WhatsApp & Google Maps setup",
    description:
      "Click-to-chat WhatsApp buttons and a properly configured Google Business Profile, so customers can find and reach you easily.",
    icon: MapPinIcon,
  },
  {
    title: "Content in Odia or English",
    description:
      "Copy written in whichever language your customers actually use — including Sambalpuri Odia where it fits your audience.",
    icon: LanguageIcon,
  },
  {
    title: "Ongoing support",
    description:
      "Once your site is live, we handle updates, fixes, and hosting questions — you don't need to touch any code.",
    icon: SupportIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#F43F5E]">
          What we do
        </h2>
        <p className="font-display mt-2 max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Everything your business needs to be found online.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="h-full rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-shadow hover:shadow-md hover:shadow-zinc-900/5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#F43F5E] ring-1 ring-zinc-100">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
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
