"use client";

import { isPrototypeMode, isPrototypeWatermarkEnabled } from "@/lib/prototype";

export function PrototypeWatermark() {
  if (!isPrototypeMode() || !isPrototypeWatermarkEnabled()) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-8 z-40 flex justify-center opacity-20">
      <div className="rounded-full border border-slate-400 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur-sm">
        KELETSO • WEBSITE PROTOTYPE • SihleB Design Studio
      </div>
    </div>
  );
}
