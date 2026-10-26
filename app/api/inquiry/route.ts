import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkRateLimit, getCorsHeaders, handleCorsPreflight } from "@/lib/security";
import { validateInquiryPayload } from "@/lib/validations";

// 1. Handle CORS preflight requests
export async function OPTIONS(request: NextRequest) {
  return handleCorsPreflight(request);
}

// 2. Secure POST handler with Rate Limiting, Input Validation & CORS
export async function POST(request: NextRequest) {
  const corsHeaders = getCorsHeaders(request);

  // A. Rate Limiting Check (Anti-DDoS / Brute-force protection: 10 req/min)
  const rateLimit = checkRateLimit(request, { limit: 10, windowMs: 60 * 1000 });
  if (!rateLimit.success) {
    return NextResponse.json(
      {
        error: "Too many requests. Please slow down.",
        code: "RATE_LIMIT_EXCEEDED",
        retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000),
      },
      {
        status: 429,
        headers: {
          ...corsHeaders,
          "Retry-After": Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
        },
      }
    );
  }

  try {
    // B. Parse JSON body safely
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Malformed JSON payload.", code: "INVALID_JSON" },
        { status: 400, headers: corsHeaders }
      );
    }

    // C. Schema & Payload Sanitization
    const validation = validateInquiryPayload(rawBody);
    if (!validation.success || !validation.data) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          code: "VALIDATION_ERROR",
          details: validation.errors,
        },
        { status: 400, headers: corsHeaders }
      );
    }

    // D. Safe execution (e.g. database insertion, email dispatch)
    const referenceNumber = `MK-${Date.now().toString().slice(-6)}`;

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully.",
        referenceNumber,
      },
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "X-RateLimit-Limit": rateLimit.limit.toString(),
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("API error in /api/inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error.", code: "INTERNAL_ERROR" },
      { status: 500, headers: corsHeaders }
    );
  }
}
