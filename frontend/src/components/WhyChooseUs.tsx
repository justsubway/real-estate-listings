import { Handshake, ShieldCheck, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Handshake,
    title: "ΕΜΠΕΙΡΙΑ",
    description: "Προσωποποιημένη εξυπηρέτηση και γνώση της αγοράς.",
  },
  {
    icon: TrendingUp,
    title: "ΜΕΓΙΣΤΗ ΑΠΟΔΟΣΗ",
    description: "Αύξηση της αξίας και των εσόδων του ακινήτου σας.",
  },
  {
    icon: ShieldCheck,
    title: "ΑΞΙΟΠΙΣΤΙΑ & ΑΣΦΑΛΕΙΑ",
    description: "Εγγυημένη εξυπηρέτηση με απόλυτη διαφάνεια.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3f1ec] pt-6 pb-16 md:pb-20">
      <div className="container-px mx-auto max-w-[1100px]">
        <SectionHeading>ΓΙΑΤΙ ΝΑ ΜΑΣ ΕΠΙΛΕΞΕΤΕ;</SectionHeading>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex w-full flex-col items-center text-center"
            >
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-slate-200 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-brand-navy/[0.04] group-hover:ring-brand-navy/25 md:h-[6.5rem] md:w-[6.5rem]">
                <Icon
                  className="h-12 w-12 shrink-0 text-brand-navy transition-transform duration-500 group-hover:scale-110 md:h-14 md:w-14"
                  strokeWidth={1.6}
                />
              </div>
              <h3 className="mb-3 max-w-[18rem] text-lg font-extrabold leading-snug tracking-wider text-brand-navy md:text-xl">
                {title}
              </h3>
              <p className="max-w-[280px] text-base leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
