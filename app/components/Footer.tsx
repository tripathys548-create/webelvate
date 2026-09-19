import { WHATSAPP_HREF, WhatsAppIcon } from "./whatsapp";

const exploreLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "What We Do" },
  { href: "#portfolio", label: "Our Work" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F1D36] py-14 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-semibold">WebElvate</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
            Websites that help local businesses get found, trusted and contacted.
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-white/60">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.25" /></svg>
            Sambalpur &amp; Bargarh, Odisha
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Talk to us</p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            +91 70776 52489
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} WebElvate. All rights reserved.
      </div>
    </footer>
  );
}
