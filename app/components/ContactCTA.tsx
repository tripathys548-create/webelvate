import { OnDarkSecondaryButton, PrimaryButton } from "./buttons";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 text-center text-white"
      style={{ background: "linear-gradient(135deg, #172B4D 0%, #3B2A6B 60%, #4C2E7A 100%)" }}
    >
      <div className="relative mx-auto max-w-xl px-6">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          Your Website Could Be Live Soon.
        </h2>
        <p className="mt-4 text-base text-white/70">
          First, see what it could look like.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton>Get My Free Sample Website</PrimaryButton>
          <OnDarkSecondaryButton>Chat on WhatsApp</OnDarkSecondaryButton>
        </div>
        <p className="mt-5 text-sm text-white/50">No upfront payment. No obligation.</p>
      </div>
    </section>
  );
}
