const WHATSAPP_NUMBER = "918093326661";
const WHATSAPP_MESSAGE =
  "Hi WebElvate, I'd like a free sample website for my business.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.86.505 3.638 1.463 5.19L2 22l4.94-1.44A9.96 9.96 0 0 0 12.001 22c5.522 0 10-4.478 10-10S17.523 2 12.001 2zm0 18.18a8.15 8.15 0 0 1-4.166-1.143l-.299-.178-2.933.855.87-2.943-.194-.3A8.16 8.16 0 0 1 3.82 12c0-4.518 3.663-8.18 8.181-8.18 4.517 0 8.18 3.662 8.18 8.18 0 4.517-3.663 8.18-8.18 8.18z" />
    </svg>
  );
}

function WhatsAppButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16a34a] ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

const services = [
  {
    title: "Website design & build",
    description:
      "A clean, mobile-friendly website for your shop, clinic, hotel, or business — built to load fast on an average phone connection.",
  },
  {
    title: "WhatsApp & Google Maps setup",
    description:
      "Click-to-chat WhatsApp buttons and a properly configured Google Business Profile, so customers can find and reach you easily.",
  },
  {
    title: "Content in Odia or English",
    description:
      "Copy written in whichever language your customers actually use — including Sambalpuri Odia where it fits your audience.",
  },
  {
    title: "Ongoing support",
    description:
      "Once your site is live, we handle updates, fixes, and hosting questions — you don't need to touch any code.",
  },
];

const portfolio = [
  {
    name: "My Choice Mobile Shop",
    url: "https://mychoicemobileshop.webelvate.com",
    description: "Mobile phone & accessories retailer",
  },
  {
    name: "First Smile Dental",
    url: "https://firstsmiledental.webelvate.com",
    description: "Dental clinic",
  },
  {
    name: "Bharati Machinery",
    url: "https://bharatimachinary.com",
    description: "Industrial machinery supplier",
  },
];

const steps = [
  {
    step: "1",
    title: "Message us on WhatsApp",
    description: "Tell us about your business — what you do and who your customers are.",
  },
  {
    step: "2",
    title: "We build a free sample",
    description:
      "We put together a real, working sample site for your business — no payment, no commitment.",
  },
  {
    step: "3",
    title: "You review it",
    description: "Like what you see? We refine it with you until it's right.",
  },
  {
    step: "4",
    title: "We launch & support it",
    description: "We publish your site and stay on for updates and support afterward.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-bold tracking-tight">
            Web<span className="text-[#16a34a]">Elvate</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-zinc-600 sm:flex">
            <a href="#services" className="hover:text-zinc-900">
              Services
            </a>
            <a href="#portfolio" className="hover:text-zinc-900">
              Portfolio
            </a>
            <a href="#how-it-works" className="hover:text-zinc-900">
              How it works
            </a>
            <a href="#contact" className="hover:text-zinc-900">
              Contact
            </a>
          </nav>
          <WhatsAppButton className="!py-2 !px-4 text-xs sm:text-sm">
            Chat with us
          </WhatsAppButton>
        </div>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-24">
            <p className="rounded-full bg-green-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#16a34a]">
              Serving businesses in Sambalpur &amp; Bargarh, Odisha
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
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
        </section>

        {/* Services */}
        <section id="services" className="border-b border-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#16a34a]">
              What we do
            </h2>
            <p className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Everything your business needs to be found online.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-b border-zinc-100 bg-zinc-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#16a34a]">
              How it works
            </h2>
            <p className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              From a WhatsApp message to a live website.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="flex flex-col gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16a34a] text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-b border-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#16a34a]">
              Our work
            </h2>
            <p className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Real websites we&apos;ve built for local businesses.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {portfolio.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-100 p-6 transition-colors hover:border-[#16a34a]"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {site.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {site.description}
                    </p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-[#16a34a] group-hover:underline">
                    Visit site →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section
          id="contact"
          className="bg-zinc-900 text-white"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to get your business online?
            </h2>
            <p className="max-w-xl text-base leading-7 text-zinc-300">
              Message us on WhatsApp with your business name and what you do.
              We&apos;ll build a free sample site and get back to you — no
              pricing conversation until you&apos;ve seen it.
            </p>
            <WhatsAppButton>Message us on WhatsApp</WhatsAppButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center">
          <p>
            <span className="font-semibold text-zinc-900">WebElvate</span> —
            websites for businesses in Sambalpur &amp; Bargarh, Odisha
          </p>
          <p>© {new Date().getFullYear()} WebElvate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
