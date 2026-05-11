import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Αγορά / Πώληση", href: "#" },
  { label: "Υπηρεσίες", href: "#" },
];

const navLinksMobile = [
  { label: "Αγορά / Πώληση", href: "#" },
  { label: "Βραχυχρόνια Μίσθωση", href: "#" },
  { label: "Υπηρεσίες", href: "#" },
  { label: "Επικοινωνία", href: "#" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.11 17.49c-.27-.13-1.62-.8-1.87-.89-.25-.09-.43-.13-.62.13-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.6-1.45-.83-1.98-.22-.52-.45-.45-.62-.46-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.13.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.31zM16.02 4C9.4 4 4 9.4 4 16.02c0 2.36.69 4.55 1.86 6.41L4 28l5.74-1.83a11.97 11.97 0 0 0 6.28 1.78c6.62 0 12.02-5.4 12.02-12.02C28.04 9.4 22.64 4 16.02 4z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/95 shadow-lg backdrop-blur-md"
          : "bg-brand-navy/90 backdrop-blur-sm"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="container-px mx-auto flex h-[60px] max-w-[1280px] items-center justify-between gap-2 sm:h-[68px]">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+30210"
            className="btn-ghost shrink-0 xl:px-4 xl:text-base"
          >
            <Phone className="h-4 w-4 shrink-0 xl:h-5 xl:w-5" strokeWidth={2.4} />
            +30 210 XXX XXXX
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#25D366] text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-md xl:h-11 xl:w-11"
          >
            <WhatsAppIcon className="h-5 w-5 xl:h-6 xl:w-6" />
          </a>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
          <a
            href="tel:+30210"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
            aria-label="Κλήση"
          >
            <Phone className="h-6 w-6" strokeWidth={2.2} />
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md bg-[#25D366] text-white transition-colors hover:bg-[#20bd5a]"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Μενού"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[min(70vh,calc(100dvh-60px))] overflow-y-auto border-t border-white/10 bg-brand-navy/95 backdrop-blur-md lg:hidden">
          <div className="container-px mx-auto flex max-w-[1280px] flex-col gap-1 py-3">
            {navLinksMobile.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link rounded-md px-2 py-3 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+30210"
              className="flex items-center gap-2 rounded-md px-2 py-3 text-white/90 transition-colors hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4 shrink-0" />
              +30 210 XXX XXXX
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
