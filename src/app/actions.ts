"use server";

import { headers } from 'next/headers';
import { createHash } from 'crypto';

// Helper: SHA-256 Hashing
const sha256 = (value: string) => createHash('sha256').update(value).digest('hex');

// Helper: Phone Normalization (Force '52' for MX numbers)
const normalizePhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    // Simple heuristic: if 10 digits, assume MX and prepend 52
    if (digits.length === 10) return `52${digits}`;
    // If it starts with 52 and has 12 or 13 digits, keep it.
    // Otherwise return just digits to be safe, though CAPI prefers Country Codes.
    return digits;
};

// CAPI Function
async function sendToCAPI(email: string, phone: string, eventId: string, userAgent: string | null) {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const token = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!pixelId || !token) {
        console.warn("Meta Pixel/Token not configured for CAPI");
        return;
    }

    const hashedEmail = sha256(email.trim().toLowerCase());
    const hashedPhone = sha256(normalizePhone(phone));

    const body = {
        data: [
            {
                event_name: 'Lead',
                event_time: Math.floor(Date.now() / 1000),
                event_id: eventId,
                action_source: 'website',
                event_source_url: 'https://puntotierra.mx',
                user_data: {
                    em: [hashedEmail],
                    ph: [hashedPhone],
                    client_user_agent: userAgent
                }
            }
        ]
    };

    try {
        const res = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            const err = await res.json();
            console.error("CAPI Error:", JSON.stringify(err));
        } else {
            // console.log("CAPI Success");
        }
    } catch (e) {
        console.error("CAPI Network Error:", e);
    }
}

export async function submitZohoLead(formData: FormData) {
    const headersList = await headers();
    const userAgent = headersList.get('user-agent');

    // Extract data for CAPI before sending to Zoho
    // We do this optimistically or in parallel
    const email = formData.get("Email") as string;
    const phone = formData.get("Mobile") as string;
    // event_id must be passed from client for deduplication
    const eventId = formData.get("event_id") as string;

    try {
        // Parallel Execution: Send to CAPI (Fire & Forget) + Send to Zoho
        // We prioritize returning the Zoho result to the user, but we trigger CAPI.
        if (email && phone && eventId) {
            sendToCAPI(email, phone, eventId, userAgent).catch(e => console.error("Background CAPI Failed", e));
        }

        const response = await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
            method: "POST",
            body: formData,
        });

        // Zoho usually redirects on success or returns HTML.
        // We want to check the status code at least.
        const status = response.status;
        const text = await response.text();

        console.log("Zoho Response Status:", status);
        // console.log("Zoho Response Body:", text); // Uncomment if needed for deep debug

        if (!response.ok) {
            console.error("Zoho submission failed:", text);
            return { success: false, message: "Error al enviar el formulario." };
        }

        // Check for specific error messages in text if status is 200 (Zoho sometimes returns 200 with error text)
        // Common pattern: "D'oh! something went wrong" or validation errors in HTML.
        if (text.includes("D'oh!") || text.includes("error occurred")) {
            console.error("Zoho returned error page:", text);
            return { success: false, message: "Zoho rechazó el envío." };
        }

        return { success: true };
    } catch (error) {
        console.error("Server Action Error:", error);
        return { success: false, message: "Error de servidor." };
    }
}
