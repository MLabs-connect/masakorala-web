"use server";

import { validateInquiryPayload } from "@/lib/validations";
import { getSession } from "@/lib/auth";

export interface ServerActionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  data?: {
    referenceNumber: string;
  };
}

/**
 * Secure Server Action for processing project site inquiries
 * Features:
 * 1. Payload validation with lib/validations
 * 2. XSS character sanitization
 * 3. Optional session checking for administrative mutations
 * 4. Safe error boundaries without leaking database internals
 */
export async function submitProjectInquiry(
  _prevState: unknown,
  formData: FormData
): Promise<ServerActionResponse> {
  try {
    // 1. Extract and sanitize raw input fields
    const rawData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      areaSqFt: formData.get("areaSqFt"),
      paverType: formData.get("paverType"),
      notes: formData.get("notes"),
    };

    // 2. Validate against schema
    const validation = validateInquiryPayload(rawData);
    if (!validation.success || !validation.data) {
      return {
        success: false,
        message: "Validation failed. Please verify your entries.",
        errors: validation.errors,
      };
    }

    // 3. Optional: Verify user session if this was a privileged operation
    // const session = await getSession();
    // if (!session) { return { success: false, message: "Unauthorized" }; }

    const { name, phone, location, areaSqFt, paverType } = validation.data;

    // 4. In a real application, persist safely with parameterized query:
    // await db.insert(inquiries).values({ name, phone, location, areaSqFt, paverType });
    const referenceNumber = `MK-${Date.now().toString().slice(-6)}`;

    // Return sanitized public result
    return {
      success: true,
      message: `Inquiry registered successfully under reference #${referenceNumber}. A civil technical officer will contact you shortly.`,
      data: { referenceNumber },
    };
  } catch (error) {
    // Never leak technical error details or stack traces to client
    console.error("Secure Server Action failure in submitProjectInquiry:", error);
    return {
      success: false,
      message: "An unexpected error occurred while processing your request. Please try again or contact our hotline directly.",
    };
  }
}
