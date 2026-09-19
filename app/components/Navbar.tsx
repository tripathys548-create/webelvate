import Image from "next/image";
import { PrimaryButton } from "./buttons";

const links = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "What We Do" },
  { href: "#portfolio", label: "Our Work" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-100 bg-[#FAF7F2]/90 backdrop-blur">
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
        <nav className="hidden gap-7 text-sm font-medium text-zinc-600 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-zinc-900">
              {link.label}
            </a>
          ))}
        </nav>
        <PrimaryButton className="!px-4 !py-2.5 text-xs sm:text-sm">
          Get My Free Website
        </PrimaryButton>
      </div>
    </header>
  );
}
