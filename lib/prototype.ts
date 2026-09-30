export type SiteEnvironment = "prototype" | "production";

export function getSiteEnvironment(): SiteEnvironment {
  const raw =
    process.env.NEXT_PUBLIC_VITE_SITE_ENV ??
    process.env.VITE_SITE_ENV ??
    "prototype";

  return raw === "production" ? "production" : "prototype";
}

export function isPrototypeMode(): boolean {
  const raw =
    process.env.NEXT_PUBLIC_VITE_PROTOTYPE_MODE ??
    process.env.VITE_PROTOTYPE_MODE ??
    "true";

  return raw === "true" || getSiteEnvironment() !== "production";
}

export function isPrototypeWatermarkEnabled(): boolean {
  const raw =
    process.env.NEXT_PUBLIC_VITE_PROTOTYPE_WATERMARK ??
    process.env.VITE_PROTOTYPE_WATERMARK ??
    "true";

  return isPrototypeMode() && raw === "true";
}
