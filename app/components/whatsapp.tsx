export const WHATSAPP_NUMBER = "917077652489";
const WHATSAPP_MESSAGE =
  "Hi WebElvate, I'd like a free sample website for my business.";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function WhatsAppIcon({ className }: { className?: string }) {
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

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/25 transition-transform hover:-translate-y-0.5"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
