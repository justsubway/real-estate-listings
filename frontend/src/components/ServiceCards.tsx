import { ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    overlay: (
      <span className="block text-center text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        ΠΩΛΗΣΗ ΑΚΙΝΗΤΟΥ
      </span>
    ),
    body: "Βρίσκουμε τον σωστό αγοραστή, στη σωστή τιμή.",
    cta: "ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85",
    overlay: (
      <span className="block text-center text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        <span className="text-[#FF5A5F]">AIRBNB</span>{" "}
        <span className="text-white">ΔΙΑΧΕΙΡΙΣΗ</span>
      </span>
    ),
    body: "Αυξάνουμε τα έσοδα χωρίς να ασχολείσαι.",
    cta: "ΒΡΕΙΤΕ ΕΝΟΙΚΙΑΣΤΗ",
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-[#f3f1ec] pt-4 pb-8 md:pb-12">
      <div className="container-px mx-auto max-w-[1180px]">
        <SectionHeading>Οι Υπηρεσίες μας</SectionHeading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((c, i) => (
            <article
              key={i}
              className="group card-hover overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-card"
            >
              <div className="relative h-[220px] overflow-hidden sm:h-[240px] md:h-[280px]">
                <img
                  src={c.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/35" />
                <div className="absolute inset-0 flex items-center justify-center px-4 py-6 sm:px-6">
                  {c.overlay}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red opacity-90" />
              </div>

              <div className="bg-white px-5 py-7 text-center sm:px-8 sm:py-9">
                <p className="mb-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {c.body}
                </p>
                <button
                  type="button"
                  className="btn-red-compact mx-auto w-full max-w-[280px] sm:w-auto sm:min-w-[230px]"
                >
                  {c.cta}
                  <ChevronRight
                    className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
