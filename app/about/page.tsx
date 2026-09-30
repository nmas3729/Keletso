import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { industries, products } from "@/data/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Keletso, our mission, vision and the pumping solutions we provide for mining and industrial customers across Africa.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="section-shell py-20">
      <SectionHeader
        eyebrow="About us"
        title="Dependable Pumping Supply for Mining and Industry"
        text="Keletso supplies reliable pump equipment and related solutions for mining and industrial clients across Africa."
      />

      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(23,25,28,0.06)] md:p-10">
        <p className="text-lg leading-8 text-slate-700">
          Keletso is a supplier of mining pumps and pumping solutions across Africa. The company sources equipment from selected suppliers in Asia and supplies pumping equipment and related products to mining and industrial clients.
        </p>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Keletso sources selected pumping equipment from suppliers in Asia and supplies solutions to mining and industrial customers across Africa.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="card">
          <p className="eyebrow">Mission</p>
          <h3 className="mt-5 text-3xl font-semibold text-[#17191C]">Mission</h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            To provide reliable, high performance pumping solutions that keep mining operations safe, efficient and productive. We are committed to supplying quality mining pumps, equipment and technical support while delivering responsible service and long-term value to our customers.
          </p>
        </div>

        <div className="card">
          <p className="eyebrow">Vision</p>
          <h3 className="mt-5 text-3xl font-semibold text-[#17191C]">Vision</h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            To be a trusted leader in mining pumping solutions across Africa, recognized for quality products, dependable service, technical expertise and innovative solutions that contribute to safer and more sustainable mining operations.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="card">
          <p className="eyebrow">Our markets</p>
          <h3 className="mt-5 text-2xl font-semibold text-[#17191C]">Our Markets</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {industries.map((industry) => (
              <li key={industry.title}>• {industry.title}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <p className="eyebrow">Product range</p>
          <h3 className="mt-5 text-2xl font-semibold text-[#17191C]">Our Product Range</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {products.slice(0, 7).map((product) => (
              <li key={product.name}>• {product.name}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <p className="eyebrow">Approach</p>
          <h3 className="mt-5 text-2xl font-semibold text-[#17191C]">Our Approach</h3>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            We focus on dependable performance, practical support and supply solutions aligned to the demands of mining and industrial operations.
          </p>
        </div>
      </div>
    </main>
  );
}
