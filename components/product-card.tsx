import Link from "next/link";

type ProductCardProps = {
  name: string;
  image: string;
  alt: string;
  description: string;
  application: string;
};

export function ProductCard({ name, image, alt, description, application }: ProductCardProps) {
  return (
    <article className="card group overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[#17191C]">{name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <p className="mt-4 text-sm font-medium text-slate-700">
          <span className="font-semibold text-[#17191C]">Typical application:</span> {application}
        </p>
        <p className="mt-4 text-sm font-medium text-slate-600">Technical specifications available on request.</p>
        <div className="mt-6">
          <Link href="/request-quote" className="btn-primary btn-primary--sm">
            Request Information
          </Link>
        </div>
      </div>
    </article>
  );
}
