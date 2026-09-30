import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Placeholder privacy policy for Keletso. Intended to be replaced with the company's approved legal policy.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section-shell py-20">
      <div className="max-w-3xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(23,25,28,0.06)] md:p-10">
        <p className="eyebrow">Privacy policy</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#17191C]">Privacy Policy</h1>
        <p className="mt-6 text-base leading-8 text-slate-700">
          This is a placeholder privacy policy page for Keletso and should be replaced with the client&apos;s approved legal and data protection policy before launch.
        </p>
        <p className="mt-5 text-base leading-8 text-slate-700">
          Personal information collected through contact and quotation forms is used to respond to enquiries and provide the information requested by the visitor. The website does not collect unnecessary personal information and forms should be handled securely.
        </p>
        <p className="mt-5 text-base leading-8 text-slate-700">
          Please ensure the final policy also covers consent, data retention, third-party processing, and any local data protection requirements applicable to the business.
        </p>
      </div>
    </main>
  );
}
