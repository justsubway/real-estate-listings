import { Check } from "lucide-react";

const stats = [
  {
    title: "100+ Ακίνητα",
    subtitle: "πωλήσεις & διαχείριση",
  },
  {
    title: "5/5 Αξιολογήσεις",
    subtitle: "60 ευχαριστημένοι πελάτες",
  },
  {
    title: "έως +40%",
    subtitle: "Έσοδα Airbnb",
  },
];

export default function StatsBar() {
  return (
    <section className="border-y border-slate-200/70 bg-gradient-to-b from-[#eceae4] to-[#e7e4dc]">
      <div className="container-px mx-auto max-w-[1180px] py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col items-center justify-center gap-3 text-center transition-transform duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:gap-4 sm:text-left"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center self-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-soft ring-4 ring-emerald-500/15 transition-shadow duration-300 group-hover:ring-emerald-500/30 sm:self-auto">
                <Check className="h-7 w-7 stroke-[3]" />
              </span>
              <div className="flex min-h-[3.5rem] flex-col justify-center sm:min-h-0">
                <p className="text-xl font-bold tracking-tight text-brand-navy md:text-2xl">
                  {s.title}
                </p>
                <p className="mt-1 text-base text-slate-600 md:text-lg">
                  {s.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
