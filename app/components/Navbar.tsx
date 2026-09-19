import { WhatsAppButton } from "./whatsapp";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          <span className="text-[#172B4D]">Web</span>
          <span className="text-[#F43F5E]">Elvate</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-zinc-600 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-zinc-900">
              {link.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton className="!px-4 !py-2 text-xs sm:text-sm">
          Chat with us
        </WhatsAppButton>
      </div>
    </header>
  );
}
