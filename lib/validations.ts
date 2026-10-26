/**
 * Input sanitization and validation utilities
 * Protects server actions and API route handlers against XSS, injection, and invalid payloads.
 */

// Basic HTML sanitization: escape dangerous characters to mitigate XSS
export function sanitizeString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .replace(/[<>]/g, "") // Strip raw angle brackets
    .slice(0, 1000); // Prevent payload length bomb attacks
}

export function sanitizePhone(phone: unknown): string {
  if (typeof phone !== "string") return "";
  return phone.replace(/[^0-9+\s-]/g, "").trim().slice(0, 20);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim()) && email.length <= 120;
}

export interface InquiryInput {
  name: string;
  phone: string;
  location: string;
  areaSqFt?: number;
  paverType?: string;
  notes?: string;
}

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
}

export function validateInquiryPayload(raw: unknown): ValidationResult<InquiryInput> {
  const errors: Record<string, string> = {};

  if (!raw || typeof raw !== "object") {
    return { success: false, errors: { form: "Invalid request payload" } };
  }

  const obj = raw as Record<string, unknown>;

  const name = sanitizeString(obj.name);
  if (!name || name.length < 2) {
    errors.name = "Full name must be at least 2 characters.";
  }

  const phone = sanitizePhone(obj.phone);
  if (!phone || phone.length < 8) {
    errors.phone = "Please enter a valid phone or WhatsApp number.";
  }

  const location = sanitizeString(obj.location) || "Colombo";

  let areaSqFt: number | undefined;
  if (obj.areaSqFt !== undefined && obj.areaSqFt !== null && obj.areaSqFt !== "") {
    const parsed = Number(obj.areaSqFt);
    if (isNaN(parsed) || parsed <= 0 || parsed > 5000000) {
      errors.areaSqFt = "Area must be a positive number up to 5,000,000 sq.ft.";
    } else {
      areaSqFt = parsed;
    }
  }

  const paverType = sanitizeString(obj.paverType) || "Uni Paver 80mm";
  const notes = sanitizeString(obj.notes);

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name,
      phone,
      location,
      areaSqFt,
      paverType,
      notes,
    },
  };
}
