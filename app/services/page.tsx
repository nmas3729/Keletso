import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { serviceList } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Keletso provides practical pump supply, sourcing and support services for mining and industrial operations.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="section-shell py-20">
      <SectionHeader
        eyebrow="Our services"
        title="Practical Pumping Support for Mining and Industry"
        text="We focus on reliable pump supply, sourcing and technical guidance tailored to the needs of demanding mineral and industrial environments."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceList.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>

      <div className="mt-14 rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(23,25,28,0.06)]">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Need a pumping solution?</p>
            <h3 className="mt-3 text-3xl font-semibold text-[#17191C]">Talk to our team</h3>
          </div>
          <Link href="/request-quote" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
