import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Content Security Policy
// In development: Allow WebSockets (ws:, wss:) for Fast Refresh / Turbopack HMR and do NOT upgrade to HTTPS
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https:;
  font-src 'self' https://fonts.gstatic.com data:;
  connect-src 'self' ws: wss: http: https:;
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://wa.me;
  frame-ancestors 'none';
  ${isProd ? "upgrade-insecure-requests;" : ""}
`.replace(/\s{2,}/g, " ").trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspHeader,
  },
  {
    // In dev: max-age=0 clears any cached HSTS in the browser for localhost
    // In prod: 2 years HSTS with subdomains and preload
    key: "Strict-Transport-Security",
    value: isProd
      ? "max-age=63072000; includeSubDomains; preload"
      : "max-age=0",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  /* Performance and rendering features */
  cacheComponents: true,
  partialPrefetching: true,

  /* Security Headers */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
