import Image from "next/image";
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
        <a href="#top" className="flex items-center">
          <Image
            src="/webelvate-logo.png"
            alt="WebElvate — Higher Together"
            width={348}
            height={118}
            priority
            className="h-9 w-auto"
          />
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
