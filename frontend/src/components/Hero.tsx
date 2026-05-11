import SearchBar from "./SearchBar";

/** Must respect Vite `base` on GitHub Pages (e.g. /real-estate-website/). */
const HERO_IMAGE = `${import.meta.env.BASE_URL}villa.png`;

export default function Hero() {
  return (
    <section className="relative w-full bg-brand-navy">
      <div className="relative min-h-[520px] w-full overflow-hidden sm:min-h-[600px] lg:min-h-[680px]">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1240px] flex-col items-center text-center container-px pb-16 pt-16 sm:min-h-[600px] sm:items-start sm:text-left sm:pb-20 sm:pt-20 lg:min-h-[680px] lg:pb-24 lg:pt-28">
          <div className="flex w-full animate-fade-up justify-center sm:justify-start">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md sm:text-xs">
              Real Estate &amp; Airbnb Experts
            </span>
          </div>

          <h1
            className="mt-5 max-w-4xl text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-md animate-fade-up [animation-delay:120ms] sm:mt-6 sm:text-4xl md:text-5xl md:leading-[1.1] lg:text-[56px] lg:leading-[1.06]"
          >
            Μετατρέπουμε το Ακίνητό σας σε{" "}
            <span className="text-brand-gold glow-gold">Εισόδημα</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 drop-shadow animate-fade-up [animation-delay:240ms] sm:text-lg">
            Εξειδικευμένη ομάδα στην αγορά, πώληση και διαχείριση ακινήτων, με
            αξιοπιστία και αποδοτικότητα σε κάθε βήμα.
          </p>

          <div className="mt-auto w-full max-w-[1180px] self-center pt-12 sm:pt-16 lg:pt-20 animate-fade-up [animation-delay:360ms]">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="h-10 bg-[#f3f1ec] sm:h-14 md:h-20" />
    </section>
  );
}
