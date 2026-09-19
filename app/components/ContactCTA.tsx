import { WhatsAppButton } from "./whatsapp";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-[#172B4D] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
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
  );
}
