"use client";

import { isPrototypeMode } from "@/lib/prototype";

export function PrototypeBanner() {
  if (!isPrototypeMode()) {
    return null;
  }

  return (
    <div className="border-b border-white/10 bg-[#252A2E] text-white">
      <div className="section-shell flex items-center justify-center py-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]">
        <span>KELETSO WEBSITE PROTOTYPE — CONFIDENTIAL</span>
      </div>
    </div>
  );
}
