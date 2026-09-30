type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="card h-full">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#17191C] text-sm font-bold text-white">
        {title.slice(0, 2).toUpperCase()}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[#17191C]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
