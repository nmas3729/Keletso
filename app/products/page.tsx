import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeader } from "@/components/section-header";
import { products } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Keletso's range of mining and industrial pumps, pumping equipment and related accessories.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="section-shell py-20">
      <SectionHeader
        eyebrow="Product range"
        title="Mining and Industrial Pumping Equipment"
        text="A focused selection of pumping equipment for challenging mining, mineral processing and industrial environments."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            image={product.image}
            alt={product.alt}
            description={product.description}
            application={product.application}
          />
        ))}
      </div>

      <div className="mt-14 rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-[0_12px_30px_rgba(23,25,28,0.06)]">
        <p className="text-lg font-medium text-[#17191C]">Need help selecting the right pump?</p>
        <Link href="/request-quote" className="btn-primary mt-5">
          Request a Quote
        </Link>
      </div>
    </main>
  );
}
