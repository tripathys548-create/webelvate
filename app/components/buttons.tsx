import { WHATSAPP_HREF } from "./whatsapp";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function PrimaryButton({
  children,
  className = "",
  href = WHATSAPP_HREF,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FB6C7C] via-[#F43F5E] to-[#BE123C] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-900/20 transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4" />
    </a>
  );
}

export function SecondaryButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 ${className}`}
    >
      {children}
    </a>
  );
}

export function OnDarkSecondaryButton({
  children,
  href = WHATSAPP_HREF,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 ${className}`}
    >
      {children}
    </a>
  );
}
