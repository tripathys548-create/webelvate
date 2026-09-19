import Image from "next/image";
import { Reveal } from "./Reveal";

const portfolio = [
  {
    name: "CareerCraft",
    url: "https://careercraftt.webelvate.com",
    category: "Career Tools · AI Platform",
    description: "An AI-powered LinkedIn and resume optimization tool with live scoring and job-match features.",
    image: "/portfolio/careercraft.png",
  },
  {
    name: "RegWorld",
    url: "https://regworldcommsind.webelvate.com",
    category: "Community · Regulatory Intelligence",
    description: "A community and knowledge hub for regulatory reporting professionals, with live updates and discussion.",
    image: "/portfolio/regworld.png",
  },
  {
    name: "Bharati Machinery",
    url: "https://bharatimachinary.com",
    category: "Industrial · Machinery Supplier",
    description: "A rugged, catalogue-style website showcasing machinery ranges with direct call and quote actions.",
    image: "/portfolio/bharati-machinery.png",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-zinc-100 bg-[#FAF7F2]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BE123C]">
          Ch. 04 — Our work
        </p>
        <h2 className="font-serif mt-3 max-w-xl text-3xl font-semibold text-[#172B4D] sm:text-4xl">
          Real Websites. <em className="italic text-zinc-500">Real Businesses.</em>
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
          Every project starts the same way — a free sample the business owner
          reviewed before paying anything.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {portfolio.map((site) => (
            <Reveal key={site.name}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-[#F43F5E]"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-zinc-100">
                  <Image
                    src={site.image}
                    alt={`Screenshot of the ${site.name} website`}
                    width={640}
                    height={400}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#BE123C]">
                      {site.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#172B4D]">
                      {site.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      {site.description}
                    </p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-[#BE123C] group-hover:underline">
                    View Website →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
