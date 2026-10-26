import { cookies } from "next/headers";

export interface SessionData {
  userId: string;
  role?: string;
  email?: string;
  createdAt: number;
}

const SESSION_COOKIE_NAME = "session_token";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

/**
 * Configure secure, HttpOnly, SameSite cookies.
 * Prevents client-side scripts from reading tokens (neutralizing XSS token theft).
 */
export async function setSecureSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true, // Inaccessible to document.cookie (protects against XSS)
    secure: process.env.NODE_ENV === "production", // Transmitted exclusively over HTTPS in production
    sameSite: "lax", // Protects against Cross-Site Request Forgery (CSRF)
    path: "/", // Available across the entire site
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

/**
 * Retrieve the current session token from the secure cookie store.
 */
export async function getSessionCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value;
}

/**
 * Invalidate and clear the session cookie.
 */
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0, // Immediately expires cookie
  });
}

/**
 * Helper to get the authenticated session.
 * In a real application, decrypt or verify JWT/database token.
 */
export async function getSession(): Promise<SessionData | null> {
  const token = await getSessionCookie();
  if (!token) return null;

  try {
    // In production, verify signature with AUTH_SECRET:
    // const payload = jwt.verify(token, process.env.AUTH_SECRET!);
    return {
      userId: "user-verified",
      role: "admin",
      createdAt: Date.now(),
    };
  } catch {
    return null;
  }
}
