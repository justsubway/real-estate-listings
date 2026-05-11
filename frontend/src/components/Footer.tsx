import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Logo from "./Logo";

const nav = [
  "Αγορά / Πώληση",
  "Βραχυχρόνια Μίσθωση",
  "Υπηρεσίες",
  "Επικοινωνία",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy-dark text-white/85">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />

      <div className="container-px relative mx-auto grid max-w-[1180px] grid-cols-1 gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-white/70">
            Οι ειδικοί στην αγορά, πώληση και διαχείριση ακινήτων σε όλη την
            Ελλάδα.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red hover:ring-brand-red/40"
                aria-label="social"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Πλοήγηση
          </h4>
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white/75 transition-colors duration-200 hover:text-brand-gold"
                >
                  <span className="h-[1px] w-3 bg-white/30 transition-all duration-200 group-hover:w-5" />
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Επικοινωνία
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-gold/90" />
              +30 210 XXX XXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-gold/90" />
              info@realestateairbnb.gr
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-gold/90" />
              Λεωφ. Συγγρού 123, Αθήνα
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-px mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-2 py-4 text-xs text-white/60 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Real Estate &amp; Airbnb Experts. Όλα τα
            δικαιώματα διατηρούνται.
          </span>
          <span>Σχεδιασμός &amp; Ανάπτυξη — Demo</span>
        </div>
      </div>
    </footer>
  );
}
