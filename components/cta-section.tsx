import Link from "next/link";

type CtaSectionProps = {
  title: string;
  text: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CtaSection({
  title,
  text,
  buttonLabel = "Request a Quote",
  buttonHref = "/request-quote",
}: CtaSectionProps) {
  return (
    <section className="bg-[#17191C] py-18 text-white">
      <div className="section-shell">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(104,112,120,0.26),_transparent_50%)] p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow--light">Need support?</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{text}</p>
          </div>
          <Link href={buttonHref} className="btn-primary inline-flex">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
