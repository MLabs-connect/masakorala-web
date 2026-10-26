import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ============================================================================
// 1. RATE LIMITING UTILITY (Token Bucket / Sliding Window)
// Protects endpoints against brute-force, scraping, and DDoS attacks.
// ============================================================================

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// In-memory IP tracking map (In distributed multi-instance setups, back with Redis/Upstash)
const ipRateLimitMap = new Map<string, RateLimitRecord>();

// Clean up expired entries every 10 minutes to prevent memory leaks
if (typeof setInterval !== "undefined") {
  const timer = setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipRateLimitMap.entries()) {
      if (now > record.resetTime) {
        ipRateLimitMap.delete(ip);
      }
    }
  }, 10 * 60 * 1000);
  if (timer && typeof timer === "object" && "unref" in timer) {
    (timer as { unref: () => void }).unref();
  }
}

export interface RateLimitOptions {
  limit?: number; // Maximum requests allowed
  windowMs?: number; // Time window in milliseconds
}

export function checkRateLimit(
  request: NextRequest,
  options: RateLimitOptions = {}
): {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
} {
  const limit = options.limit || 20; // default 20 requests
  const windowMs = options.windowMs || 60 * 1000; // default 1 minute

  // Extract client IP address safely from proxy headers
  const forwarded = request.headers.get("x-forwarded-for");
  const clientIp = forwarded
    ? forwarded.split(",")[0].trim()
    : request.headers.get("x-real-ip") || "127.0.0.1";

  const now = Date.now();
  const existing = ipRateLimitMap.get(clientIp);

  if (!existing || now > existing.resetTime) {
    ipRateLimitMap.set(clientIp, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      resetTime: now + windowMs,
    };
  }

  if (existing.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      resetTime: existing.resetTime,
    };
  }

  existing.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - existing.count,
    resetTime: existing.resetTime,
  };
}

// ============================================================================
// 2. EXPLICIT CORS RESTRICTION
// ============================================================================

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SITE_URL || "https://masakoralagroup.lk",
  "http://localhost:3000",
];

export function getCorsHeaders(request: NextRequest): Record<string, string> {
  const origin = request.headers.get("origin") || "";
  const isAllowed = ALLOWED_ORIGINS.includes(origin);

  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400", // Cache preflight for 24h
  };
}

export function handleCorsPreflight(request: NextRequest): NextResponse {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}
