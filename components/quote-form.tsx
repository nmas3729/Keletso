"use client";

import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="space-y-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(23,25,28,0.06)]" onSubmit={handleSubmit} noValidate>
      <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
        Prototype Form — Please do not submit confidential or personal information.
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="field">
          <span>Full Name</span>
          <input type="text" name="fullName" placeholder="Your full name" required />
        </label>
        <label className="field">
          <span>Company Name</span>
          <input type="text" name="companyName" placeholder="Company name" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label className="field">
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="[PHONE NUMBER]" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="field">
          <span>Country</span>
          <input type="text" name="country" placeholder="Country" required />
        </label>
        <label className="field">
          <span>Industry</span>
          <input type="text" name="industry" placeholder="Mining, Mineral Processing, Industrial" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="field">
          <span>Product / Pump Type</span>
          <input type="text" name="productType" placeholder="Slurry Pumps, Dewatering Pumps, etc." required />
        </label>
        <label className="field">
          <span>Required Quantity</span>
          <input type="text" name="quantity" placeholder="e.g. 2 units" required />
        </label>
      </div>

      <label className="field">
        <span>Application / Requirements</span>
        <textarea name="application" rows={5} placeholder="Describe your pumping requirement" required />
      </label>

      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={4} placeholder="Additional information" />
      </label>

      <div className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        <p>
          Your information will be used to respond to your enquiry and provide the requested information.
        </p>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-[#17191C] focus:ring-[#17191C]" required />
        <span>
          I consent to Keletso using my information to respond to this quotation request and manage my enquiry.
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          Submit Quote Request
        </button>
        <a href="/privacy-policy" className="text-sm font-medium text-[#17191C] underline-offset-4 hover:underline">
          Privacy Policy
        </a>
      </div>

      {submitted ? (
        <p className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Prototype Form — Submissions are currently disabled.
        </p>
      ) : null}
    </form>
  );
}
