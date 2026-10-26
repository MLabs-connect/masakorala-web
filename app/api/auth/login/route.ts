import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkRateLimit, getCorsHeaders } from "@/lib/security";
import { setSecureSessionCookie } from "@/lib/auth";
import { sanitizeString, isValidEmail } from "@/lib/validations";

export async function POST(request: NextRequest) {
  const corsHeaders = getCorsHeaders(request);

  // 1. Strict Rate Limiting on Authentication (5 attempts per minute)
  const rateLimit = checkRateLimit(request, { limit: 5, windowMs: 60 * 1000 });
  if (!rateLimit.success) {
    return NextResponse.json(
      {
        error: "Too many login attempts. Please wait before retrying.",
        code: "AUTH_RATE_LIMIT",
      },
      { status: 429, headers: corsHeaders }
    );
  }

  try {
    const body = await request.json();
    const email = sanitizeString(body.email);
    const password = typeof body.password === "string" ? body.password : "";

    // 2. Input validation
    if (!isValidEmail(email) || !password || password.length < 8) {
      return NextResponse.json(
        { error: "Invalid email address or password format.", code: "INVALID_CREDENTIALS" },
        { status: 400, headers: corsHeaders }
      );
    }

    // 3. Verify credentials against database / hashed password (argon2 / bcrypt)
    // const user = await verifyUser(email, password);

    // 4. Generate cryptographically random session token
    const sessionToken = `st_${crypto.randomUUID()}_${Date.now()}`;

    // 5. Store session in HttpOnly, Secure, SameSite cookie
    // NEVER return token in JSON for localStorage!
    await setSecureSessionCookie(sessionToken);

    return NextResponse.json(
      {
        success: true,
        message: "Authentication successful.",
        user: { email },
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Login route error:", error);
    return NextResponse.json(
      { error: "Authentication service unavailable.", code: "AUTH_ERROR" },
      { status: 500, headers: corsHeaders }
    );
  }
}
