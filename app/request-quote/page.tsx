import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a quotation for mining pumps and industrial pumping solutions from Keletso.",
  alternates: {
    canonical: "/request-quote",
  },
};

export default function RequestQuotePage() {
  return (
    <main className="section-shell py-20">
      <SectionHeader
        eyebrow="Request a quotation"
        title="Tell Us About Your Pumping Requirement"
        text="Share your application details and the team will help identify the right pumping solution for your operation."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[24px] border border-slate-200 bg-[#17191C] p-8 text-white shadow-[0_12px_30px_rgba(23,25,28,0.18)]">
          <p className="eyebrow eyebrow--light">How it works</p>
          <h3 className="mt-5 text-3xl font-semibold">Request support</h3>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
            <li>• Share your operating requirements.</li>
            <li>• Provide the product type, quantity and application.</li>
            <li>• Our team will review the request and provide the appropriate information.</li>
          </ul>
          <div className="mt-8 rounded-[18px] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            Your information will be used to respond to your enquiry and provide the requested information.
          </div>
        </div>

        <QuoteForm />
      </div>
    </main>
  );
}
