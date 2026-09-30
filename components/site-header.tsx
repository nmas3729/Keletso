"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/site-data";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#17191C]/95 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Keletso home">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 text-sm font-semibold text-white ring-1 ring-white/15">
            K
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.08em] text-white">KELETSO</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-200 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/request-quote" className="btn-primary btn-primary--sm">
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#17191C] md:hidden">
          <div className="section-shell flex flex-col gap-3 py-4 text-sm font-medium text-slate-200">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              className="btn-primary mt-2 inline-flex w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
