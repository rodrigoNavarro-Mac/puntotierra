"use client";

import { useState } from "react";

export default function LeadForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);

        try {
            await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
                method: "POST",
                body: formData,
                mode: "no-cors", // Zoho usually doesn't return JSON with CORS headers for this, so 'no-cors' prevents network errors but limits response reading.
            });
            // Since 'no-cors' returns an opaque response, we assume success if no network error occurred.
            // This replicates the behavior of a 'fire and forget' or iframe submission.
            setStatus("success");
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <section id="contacto" className="py-20 bg-accent/20">
                <div className="container mx-auto px-4 max-w-lg text-center">
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-primary/10">
                        <h3 className="text-2xl font-heading font-semibold text-primary mb-4">¡Mensaje enviado!</h3>
                        <p className="text-gray-600 mb-6">
                            Gracias, un asesor de Punto Tierra se comunicará contigo en breve.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="text-secondary font-medium underline"
                        >
                            Enviar otro mensaje
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contacto" className="py-20 bg-accent/30">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading text-3xl font-semibold text-text-main mb-2">
                            Recibe información personalizada
                        </h2>
                        <p className="text-gray-600">
                            Te contactamos sin compromiso para resolver tus dudas.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Hidden Inputs for Zoho */}
                        <input type="text" style={{ display: "none" }} name="xnQsjsdp" value="98236dc94e3f5cdf00cb7d394017df04f94400a1ae365d759ec2c5533a77e75c" readOnly />
                        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                        <input type="text" style={{ display: "none" }} name="xmIwtLD" value="7e502c675625bfb4c3adbcd35e4e3dc96dc9895e787435cd031b805e4831a49e61ef462c2e8cb36ad6ffde62955dad89" readOnly />
                        <input type="text" style={{ display: "none" }} name="actionType" value="TGVhZHM=" readOnly />
                        <input type="text" style={{ display: "none" }} name="returnURL" value="null" readOnly />

                        {/* Custom Hidden Fields */}
                        <input type="text" style={{ display: "none" }} name="LEADCF10" value="Punto Tierra" readOnly />
                        {/* Honeypot */}
                        <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" value="" readOnly />

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="First_Name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="First_Name"
                                    name="First Name"
                                    required
                                    maxLength={40}
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Apellidos <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="Last_Name"
                                    name="Last Name"
                                    required
                                    maxLength={80}
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Tus apellidos"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="Email"
                                    name="Email"
                                    required
                                    maxLength={100}
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="hola@ejemplo.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="Mobile" className="block text-sm font-medium text-gray-700 mb-1">
                                    Móvil <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="Mobile"
                                    name="Mobile"
                                    required
                                    maxLength={30}
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="55 1234 5678"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-primary text-white font-medium py-4 rounded-md hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? "Enviando..." : "Confirmar"}
                        </button>

                        <p className="text-xs text-gray-400 text-center mt-4">
                            Tus datos están protegidos. No enviamos spam.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
