import { ChevronRight, Handshake, KeyRound, Palmtree } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Handshake,
    titleEl: (
      <>
        <span className="text-brand-red">ΠΩΛΗΣΕΙΣ</span>{" "}
        <span className="text-brand-navy">Selling</span>
      </>
    ),
    body: "Αναλαμβάνουμε την πώληση του ακινήτου σας με στόχο τη μέγιστη αξία και τη σωστή προβολή στην αγορά.",
    cta: "ΠΩΛΗΣΤΕ ΤΟ ΑΚΙΝΗΤΟ ΣΑΣ",
  },
  {
    icon: KeyRound,
    titleEl: (
      <>
        <span className="text-brand-red">ΕΝΟΙΚΙΑΣΕΙΣ</span>{" "}
        <span className="text-brand-navy">Leasing</span>
      </>
    ),
    body: "Εξεύρεση ενοικιαστών και διαχείριση ποιοτικών μισθώσεων με ασφάλεια και επαγγελματισμό.",
    cta: "ΒΡΕΙΤΕ ΕΝΟΙΚΙΑΣΤΗ",
  },
  {
    icon: Palmtree,
    titleEl: (
      <>
        <span className="text-brand-red">ΒΡΑΧΥΧΡΟΝΙΑ</span>{" "}
        <span className="text-brand-navy">ΜΙΣΘΩΣΗ</span>
      </>
    ),
    body: "Μετατρέπουμε το ακίνητό σας σε Airbnb, αυξάνοντας τα έσοδα έως 40% και αναλαμβάνοντας τα πάντα για εσάς.",
    cta: "ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ",
  },
];

export default function ServicePickGrid() {
  return (
    <section className="bg-[#f3f1ec] py-10 md:py-16 lg:py-20">
      <div className="container-px mx-auto max-w-[1180px]">
        <SectionHeading>
          Επιλέξτε την Υπηρεσία που σας Ταιριάζει
        </SectionHeading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {items.map(({ icon: Icon, titleEl, body, cta }) => (
            <div
              key={cta}
              className="group card-hover relative flex h-full flex-col items-center overflow-hidden rounded-xl border border-slate-200/80 bg-white p-6 text-center shadow-card sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-red via-brand-red-hover to-brand-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <div className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200 transition-all duration-500 group-hover:bg-brand-navy/5 group-hover:ring-brand-navy/20 sm:mb-6 sm:h-28 sm:w-28">
                <span className="absolute inset-0 rounded-full bg-brand-navy/0 transition-all duration-500 group-hover:bg-brand-navy/5" />
                <Icon
                  className="relative h-12 w-12 shrink-0 text-brand-navy transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14"
                  strokeWidth={1.4}
                />
              </div>

              <h3 className="mb-3 text-lg font-extrabold tracking-wide sm:mb-4 sm:text-xl md:text-2xl">
                {titleEl}
              </h3>
              <p className="mb-6 flex-1 text-center text-sm leading-relaxed text-slate-600 sm:text-base">
                {body}
              </p>
              <button
                type="button"
                className="btn-red-compact mt-auto h-[52px] w-full max-w-[320px] px-4 sm:max-w-none"
              >
                <span className="truncate">{cta}</span>
                <ChevronRight
                  className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
