import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Keletso for mining and industrial pumping enquiries and quotation requests.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="section-shell py-20">
      <SectionHeader
        eyebrow="Contact us"
        title="Speak with Our Team"
        text="Tell us about your pumping requirement and we will help guide the right solution for your operation."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <div className="card">
            <h3 className="text-2xl font-semibold text-[#17191C]">Contact Details</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-700">
              <li><span className="font-semibold text-[#17191C]">Phone:</span> [PHONE NUMBER]</li>
              <li><span className="font-semibold text-[#17191C]">Email:</span> [EMAIL ADDRESS]</li>
              <li><span className="font-semibold text-[#17191C]">Address:</span> [BUSINESS ADDRESS]</li>
              <li><span className="font-semibold text-[#17191C]">WhatsApp:</span> [WHATSAPP NUMBER]</li>
            </ul>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(23,25,28,0.06)]">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#17191C]">Business hours</h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                Placeholder
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">[BUSINESS HOURS]</p>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-slate-100 p-5 shadow-[0_12px_30px_rgba(23,25,28,0.06)]">
            <div className="flex h-64 items-center justify-center rounded-[16px] border border-dashed border-slate-300 bg-slate-200 text-center text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Google Maps placeholder
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="mt-12 rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-[0_12px_30px_rgba(23,25,28,0.06)]">
        <p className="text-lg font-medium text-[#17191C]">Need a quotation?</p>
        <Link href="/request-quote" className="btn-primary mt-5">
          Request a Quote
        </Link>
      </div>
    </main>
  );
}
