import { Home } from "lucide-react";

export default function Logo() {
  return (
    <a
      href="#"
      className="flex min-w-0 max-w-[calc(100%-7.5rem)] items-center gap-2 select-none sm:max-w-none sm:gap-3"
    >
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/95 shadow-sm sm:h-10 sm:w-10">
        <Home className="h-4 w-4 text-brand-navy sm:h-5 sm:w-5" strokeWidth={2.4} />
      </span>
      <span className="min-w-0 text-[13px] font-extrabold leading-tight tracking-wide text-white sm:text-[15px] md:text-[16px]">
        Real Estate <span className="text-[#e8c547]">&amp; Airbnb</span>{" "}
        <span className="font-bold">Experts</span>
      </span>
    </a>
  );
}
