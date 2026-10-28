import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Paths that require authenticated sessions
const PROTECTED_ROUTES = ["/admin", "/dashboard", "/api/protected"];

// Common malicious probe patterns to block immediately
const MALICIOUS_PATTERNS = [
  /\/\.env/i,
  /\/\.git/i,
  /\/wp-admin/i,
  /\/wp-login/i,
  /\/xmlrpc\.php/i,
  /\.php$/i,
  /\/etc\/passwd/i,
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bypass Next.js internal static assets and development hot-reloading
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 1. Block automated malicious scanner probes
  for (const pattern of MALICIOUS_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  // 2. Authentication Guards & Route Protection
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Check for secure HttpOnly session cookie
    const sessionToken = request.cookies.get("session_token")?.value;

    if (!sessionToken) {
      // If an API route, return 401 Unauthorized JSON
      if (pathname.startsWith("/api/")) {
        return NextResponse.json(
          { error: "Authentication required", code: "UNAUTHORIZED" },
          { status: 401 }
        );
      }

      // If a page route, redirect to login page with return URL
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 3. Clone response and attach security headers
  const response = NextResponse.next();

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/webpack-hmr|images/|logo\\.png|company-logo\\.png|mlabs\\.png|favicon\\.ico).*)",
  ],
};
