import Link from "next/link";
import { navigation } from "@/data/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[#17191C] text-slate-200">
      <div className="section-shell py-16">
        <div className="grid gap-10 md:grid-cols-3 xl:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-semibold tracking-[0.08em] text-white">KELETSO</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Reliable Mining Pumping Solutions Across Africa
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>[PHONE]</li>
              <li>[EMAIL]</li>
              <li>[ADDRESS]</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-4 border-t border-white/10 pt-6 text-sm text-slate-300">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                POPIA / Data Protection
              </Link>
            </div>
            <p>© 2026 SihleB Design Studio. All Rights Reserved.</p>
          </div>

          <div className="text-xs leading-6 text-slate-400">
            <p className="mt-2">Keletso Website Prototype</p>
            <p className="mt-2">Designed &amp; Developed by SihleB Design Studio</p>
            <p className="mt-2">Prototype version — for review and approval purposes.</p>
            <p className="mt-2">
              This website prototype, including its original design, layout, interface concepts and development work, has been created by SihleB Design Studio for the Keletso project. It is provided for review and approval purposes and remains subject to further development and client approval.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
