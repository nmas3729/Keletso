import type { NextConfig } from "next";

const siteEnvironment =
  process.env.VITE_SITE_ENV ?? process.env.NEXT_PUBLIC_VITE_SITE_ENV ?? "prototype";
const prototypeMode =
  process.env.VITE_PROTOTYPE_MODE ?? process.env.NEXT_PUBLIC_VITE_PROTOTYPE_MODE ?? "true";
const isPrototypeEnvironment =
  siteEnvironment !== "production" || prototypeMode === "true";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: isPrototypeEnvironment
              ? "noindex, nofollow, noarchive"
              : "index, follow, max-image-preview:large",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
