type IndustryCardProps = {
  title: string;
  image: string;
  alt: string;
  description: string;
};

export function IndustryCard({ title, image, alt, description }: IndustryCardProps) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_8px_22px_rgba(23,25,28,0.06)]">
      <img src={image} alt={alt} className="h-56 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[#17191C]">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </article>
  );
}
