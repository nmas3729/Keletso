import Link from "next/link";
import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { IndustryCard } from "@/components/industry-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeader } from "@/components/section-header";
import { featurePoints, industries, products, trustStats } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Keletso | Mining Pumps & Pumping Solutions Across Africa",
  description:
    "Keletso supplies reliable mining pumps, dewatering pumps, slurry pumps and industrial pumping solutions across Africa.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#17191C]">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
          alt="Industrial pump system in a mining and heavy machinery environment"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[#17191C]/80" />

        <div className="section-shell relative z-10 grid min-h-[620px] items-center gap-10 py-20 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow--light">Mining pumps & pumping solutions</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
              Reliable Pumping Solutions for Africa&apos;s Mining Industry
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              High-performance mining pumps, pumping equipment and technical support designed to keep demanding operations moving.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/request-quote" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/products" className="btn-secondary">
                View Products
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-200">
              Supply focus
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Mining pumping equipment",
                "Dewatering and slurry support",
                "Industrial pumping solutions",
                "Technical guidance for demanding sites",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-base text-slate-100">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#A7ADB2]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Built around reliability"
            title="Built Around Reliability"
            text="Keletso supplies pumping solutions for demanding mining and industrial environments where downtime, performance and dependable support matter."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustStats.map((item) => (
              <div key={item.label} className="card text-center">
                <p className="text-3xl font-semibold text-[#17191C]">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Product categories"
            title="Industry-Ready Pumping Equipment"
            text="A practical range of pumping equipment selected to support mining, mineral processing and industrial application needs."
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
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Markets served"
            title="Industries We Serve"
            text="Supporting the pumping and fluid management needs of core industrial and mining operations."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                image={industry.image}
                alt={industry.alt}
                description={industry.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Why Keletso"
            title="Why Keletso"
            text="A dependable supply partner for mining and industrial pumping requirements."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {featurePoints.map((feature) => (
              <article key={feature.title} className="card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#17191C] text-sm font-bold text-white">
                  {feature.title.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#17191C]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[24px] bg-[#17191C] p-8 text-white shadow-[0_12px_30px_rgba(23,25,28,0.18)] md:p-10">
              <p className="eyebrow eyebrow--light">Mission</p>
              <h3 className="mt-5 text-3xl font-semibold">Mission</h3>
              <p className="mt-4 text-base leading-8 text-slate-200">
                To provide reliable, high performance pumping solutions that keep mining operations safe, efficient and productive. We are committed to supplying quality mining pumps, equipment and technical support while delivering responsible service and long-term value to our customers.
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(23,25,28,0.06)] md:p-10">
              <p className="eyebrow">Vision</p>
              <h3 className="mt-5 text-3xl font-semibold text-[#17191C]">Vision</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                To be a trusted leader in mining pumping solutions across Africa, recognized for quality products, dependable service, technical expertise and innovative solutions that contribute to safer and more sustainable mining operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17191C] py-20 text-white">
        <img
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80"
          alt="African mining and industrial environment supporting large-scale pumping operations"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#17191C]/75" />
        <div className="section-shell relative z-10">
          <SectionHeader
            eyebrow="Africa focus"
            title="Supporting Mining Operations Across Africa"
            text="Keletso is positioned to support efficient, dependable pumping supply across African mining and industrial environments."
          />
        </div>
      </section>

      <CtaSection
        title="Let&apos;s Find the Right Pumping Solution"
        text="Tell us about your pumping requirements and our team will help identify the right equipment for your application."
      />
    </main>
  );
}
