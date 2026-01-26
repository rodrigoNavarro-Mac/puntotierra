"use server";

export async function submitZohoLead(formData: FormData) {
    try {
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
