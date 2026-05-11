type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = "" }: Props) {
  return (
    <div
      className={`mb-10 flex flex-col items-center justify-center md:mb-12 ${className}`}
    >
      <div className="flex items-center justify-center gap-3 md:gap-5">
        <span className="hidden h-px w-12 bg-slate-300 sm:block md:w-16" />
        <h2 className="section-title text-balance px-2">{children}</h2>
        <span className="hidden h-px w-12 bg-slate-300 sm:block md:w-16" />
      </div>
      <span className="mt-3 inline-block h-[3px] w-14 rounded-full bg-gradient-to-r from-brand-red via-brand-red-hover to-brand-gold" />
    </div>
  );
}
