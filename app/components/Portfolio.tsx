import Image from "next/image";
import { GearIcon, PhoneShopIcon, ToothIcon } from "./icons";
import { Reveal } from "./Reveal";

const portfolio = [
  {
    name: "My Choice Mobile Shop",
    url: "https://mychoicemobileshop.webelvate.com",
    description: "Mobile phone & accessories retailer",
    icon: PhoneShopIcon,
    live: false,
  },
  {
    name: "First Smile Dental",
    url: "https://firstsmiledental.webelvate.com",
    description: "Dental clinic",
    icon: ToothIcon,
    live: false,
  },
  {
    name: "Bharati Machinery",
    url: "https://bharatimachinary.com",
    description: "Industrial machinery supplier",
    icon: GearIcon,
    live: true,
    image: "/portfolio/bharati-machinery.png",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#F43F5E]">
          Our work
        </h2>
        <p className="font-display mt-2 max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Real websites we&apos;ve built for local businesses.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {portfolio.map((site) => {
            const cardClassName = `group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 transition-colors ${
              site.live ? "hover:border-[#F43F5E]" : ""
            }`;
            const cardBody = (
              <>
                <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-zinc-100 bg-zinc-50">
                  {site.image ? (
                    <Image
                      src={site.image}
                      alt={`Screenshot of the ${site.name} website`}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <site.icon className="h-10 w-10 text-zinc-300" />
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {site.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {site.description}
                    </p>
                  </div>
                  <span
                    className={`mt-6 text-sm font-semibold ${
                      site.live
                        ? "text-[#F43F5E] group-hover:underline"
                        : "text-zinc-400"
                    }`}
                  >
                    {site.live ? "Visit site →" : "Site link unavailable"}
                  </span>
                </div>
              </>
            );

            return (
              <Reveal key={site.name}>
                {site.live ? (
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    {cardBody}
                  </a>
                ) : (
                  <div className={cardClassName} aria-disabled="true">
                    {cardBody}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
