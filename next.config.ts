import type { NextConfig } from "next";

/**
 * BN55 - Next.js Configuration
 * Single config for Next.js 16 (Turbopack default)
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  // Silence Next 16 Turbopack + webpack warning; keep webpack for --webpack builds
  turbopack: {},

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slotspk.com.pk",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      // Legacy image
      { source: "/3-patti-world.webp", destination: "/BN55.webp", permanent: true },
      { source: "/3-patti-world-logo.webp", destination: "/BN55.webp", permanent: true },
      // Old 3 Patti World routes to BN55
      { source: "/download-3-patti-world", destination: "/download-bn55", permanent: true },
      { source: "/deposit-money-in-3-patti-world", destination: "/deposit-money-in-bn55", permanent: true },
      { source: "/withdraw-money-from-3-patti-world", destination: "/withdraw-money-from-bn55", permanent: true },
      { source: "/3-patti-world-for-pc", destination: "/bn55-for-pc", permanent: true },
      { source: "/blog/is-3-patti-world-real-or-fake", destination: "/blog/is-bn55-real-or-fake", permanent: true },
      { source: "/blog/create-3-patti-world-account-and-login", destination: "/blog/create-bn55-account-and-login", permanent: true },
      { source: "/blog/tips-to-win-big-in-3-patti-world", destination: "/blog/tips-to-win-big-in-bn55", permanent: true },
      { source: "/blog/3-patti-world-app-review-2026", destination: "/blog/bn55-app-review-2026", permanent: true },
      { source: "/blog/3-patti-world-bonuses-vip-guide", destination: "/blog/bn55-bonuses-vip-guide", permanent: true },
      { source: "/blog/3-patti-world-tips-10-smart-tricks", destination: "/blog/bn55-tips-10-smart-tricks", permanent: true },
      { source: "/blog/how-to-use-3-patti-world-app-pakistan-guide-2026", destination: "/blog/how-to-use-bn55-app-pakistan-guide-2026", permanent: true },
      { source: "/blog/is-3-patti-world-safe-legal-pakistan", destination: "/blog/is-bn55-safe-legal-pakistan", permanent: true },
      { source: "/blog/responsible-gaming-guide-3-patti-world", destination: "/blog/responsible-gaming-guide-bn55", permanent: true },
      { source: "/blog/3patti-blue-vs-3-patti-world", destination: "/blog/3patti-blue-vs-bn55", permanent: true },
      { source: "/blog/3patti-gold-vs-3-patti-world", destination: "/blog/3patti-gold-vs-bn55", permanent: true },
      { source: "/blog/3patti-lucky-vs-3-patti-world", destination: "/blog/3patti-lucky-vs-bn55", permanent: true },
      { source: "/blog/3patti-room-vs-3-patti-world", destination: "/blog/3patti-room-vs-bn55", permanent: true },
      { source: "/blog/3patti-world-latest-version-new-features-2026-updates", destination: "/blog/bn55-latest-version-new-features-2026-updates", permanent: true },
      { source: "/blog/3patti-world-login-problems-solutions-2026-guide", destination: "/blog/bn55-login-problems-solutions-2026-guide", permanent: true },
      { source: "/blog/ips-exceed-issue-3-patti-world-how-to-fix", destination: "/blog/ips-exceed-issue-bn55-how-to-fix", permanent: true },
      { source: "/blog/ways-to-earn-money-with-3-patti-world-2026", destination: "/blog/ways-to-earn-money-with-bn55-2026", permanent: true },
      // Older Card Rummy routes → BN55
      { source: "/download-card-rummy", destination: "/download-bn55", permanent: true },
      { source: "/deposit-money-in-card-rummy", destination: "/deposit-money-in-bn55", permanent: true },
      { source: "/withdraw-money-from-card-rummy", destination: "/withdraw-money-from-bn55", permanent: true },
      { source: "/card-rummy-for-pc", destination: "/bn55-for-pc", permanent: true },
      { source: "/blog/is-card-rummy-real-or-fake", destination: "/blog/is-bn55-real-or-fake", permanent: true },
      { source: "/blog/create-card-rummy-account-and-login", destination: "/blog/create-bn55-account-and-login", permanent: true },
      { source: "/blog/tips-to-win-big-in-card-rummy", destination: "/blog/tips-to-win-big-in-bn55", permanent: true },
      { source: "/blog/card-rummy-app-review-2026", destination: "/blog/bn55-app-review-2026", permanent: true },
      { source: "/blog/card-rummy-bonuses-vip-guide", destination: "/blog/bn55-bonuses-vip-guide", permanent: true },
      { source: "/blog/card-rummy-tips-10-smart-tricks", destination: "/blog/bn55-tips-10-smart-tricks", permanent: true },
      { source: "/blog/how-to-use-card-rummy-app-pakistan-guide-2026", destination: "/blog/how-to-use-bn55-app-pakistan-guide-2026", permanent: true },
      { source: "/blog/is-card-rummy-safe-legal-pakistan", destination: "/blog/is-bn55-safe-legal-pakistan", permanent: true },
      { source: "/blog/responsible-gaming-guide-card-rummy", destination: "/blog/responsible-gaming-guide-bn55", permanent: true },
      { source: "/blog/3patti-blue-vs-card-rummy", destination: "/blog/3patti-blue-vs-bn55", permanent: true },
      { source: "/blog/3patti-gold-vs-card-rummy", destination: "/blog/3patti-gold-vs-bn55", permanent: true },
      { source: "/blog/3patti-lucky-vs-card-rummy", destination: "/blog/3patti-lucky-vs-bn55", permanent: true },
      { source: "/blog/3patti-room-vs-card-rummy", destination: "/blog/3patti-room-vs-bn55", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "/.well-known/:path*",
      },
      {
        source: "/3-patti-blue-logo.webp",
        destination: "/BN55.webp",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Long-cache only hashed static assets (not HTML pages, not /_next/static override in a way that breaks Turbopack/dev)
      {
        source: "/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Used when running with `next dev --webpack` / `next build --webpack`
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      config.target = ["web", "es2022"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      };
    }
    return config;
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["react-icons"],
  },

  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
};

export default nextConfig;
