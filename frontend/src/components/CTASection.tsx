import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-navy-darker text-white">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 noise-bg opacity-50" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-brand-gold/15 blur-3xl" />

      <div className="container-px relative mx-auto max-w-[900px] py-16 text-center md:py-20">
        <h2 className="text-3xl font-extrabold uppercase tracking-wide md:text-4xl">
          ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ ΣΗΜΕΡΑ!
        </h2>
        <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        <p className="mt-5 text-base text-white/85 md:text-lg">
          Ελάτε να κάνουμε το επόμενο βήμα μαζί σας
        </p>
        <button type="button" className="btn-red mt-8 px-8">
          ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
