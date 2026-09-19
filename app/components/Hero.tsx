import Image from "next/image";
import { WhatsAppButton } from "./whatsapp";

export function Hero() {
  return (
    <section className="border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-display max-w-2xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            A website for your business — see it built for free, before you pay
            anything.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600">
            WebElvate designs and builds simple, fast, mobile-friendly websites
            for local shops, clinics, hotels, and businesses. Message us on
            WhatsApp and we&apos;ll put together a real sample site for your
            business — no cost, no obligation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton>Get your free sample site</WhatsAppButton>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              See example sites
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/5">
            <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="ml-2 text-[11px] text-zinc-500">careercraftt.webelvate.com</span>
            </div>
            <Image
              src="/portfolio/careercraft.png"
              alt="Real screenshot of the CareerCraft website, built by WebElvate"
              width={1280}
              height={900}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-44 rounded-xl border border-zinc-200 bg-[#172B4D] p-4 text-white shadow-lg shadow-zinc-900/20">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#FDA4AF]">
              Real client site
            </p>
            <p className="mt-1 text-sm font-semibold">
              Built for CareerCraft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
