import { ChevronDown, Search } from "lucide-react";

const fields = [
  {
    label: "Είδος Ακινήτου",
    options: ["Διαμέρισμα", "Μονοκατοικία", "Μεζονέτα", "Οικόπεδο"],
  },
  {
    label: "Περιοχή",
    options: ["Αθήνα", "Θεσσαλονίκη", "Πάτρα", "Ηράκλειο"],
  },
  {
    label: "Τιμή",
    options: [
      "Έως 100.000 €",
      "100.000 - 250.000 €",
      "250.000 - 500.000 €",
      "500.000 € +",
    ],
  },
];

export default function SearchBar() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/5 via-white/20 to-white/5 opacity-60 blur-md" />
      <div className="relative flex flex-col items-stretch gap-2.5 rounded-xl bg-white/95 p-3 shadow-card ring-1 ring-black/5 backdrop-blur-sm sm:gap-3 sm:p-4 md:flex-row md:gap-3 md:p-4 lg:gap-4 lg:p-5">
        {fields.map((f) => (
          <div key={f.label} className="group relative flex-1">
            <select
              defaultValue=""
              className="w-full cursor-pointer appearance-none rounded-md border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-slate-700 outline-none transition-all duration-200 hover:border-brand-navy/40 focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/10 sm:py-3.5 sm:pr-11 sm:text-base"
            >
              <option value="" disabled>
                {f.label}
              </option>
              {f.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-all duration-200 group-hover:text-brand-navy group-hover:translate-y-[calc(-50%+1px)] sm:h-5 sm:w-5" />
          </div>
        ))}

        <button
          type="button"
          className="btn-red min-h-[52px] w-full shrink-0 md:w-auto md:min-w-[190px] lg:min-w-[210px]"
        >
          <Search className="h-5 w-5" strokeWidth={2.5} />
          ΑΝΑΖΗΤΗΣΗ
        </button>
      </div>
    </div>
  );
}
