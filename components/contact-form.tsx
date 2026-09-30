"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="space-y-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(23,25,28,0.06)]" onSubmit={handleSubmit} noValidate>
      <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
        Prototype Form — Please do not submit confidential or personal information.
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="field">
          <span>Full Name</span>
          <input type="text" name="fullName" placeholder="Your full name" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="field">
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="[PHONE NUMBER]" />
        </label>
        <label className="field">
          <span>Company Name</span>
          <input type="text" name="companyName" placeholder="Your company" />
        </label>
      </div>

      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} placeholder="Tell us about your pumping requirement" required />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-[#17191C] focus:ring-[#17191C]" required />
        <span>
          I consent to the use of my information to respond to this enquiry and provide the requested information.
        </span>
      </label>

      <div className="flex items-center justify-between gap-4">
        <button type="submit" className="btn-primary">
          Send Enquiry
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
