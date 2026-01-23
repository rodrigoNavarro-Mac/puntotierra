import { Search, MessageSquare, Key } from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-text-main mb-4">
                        ¿Cómo funciona?
                    </h2>
                    <p className="text-gray-600">Tres pasos sencillos para asegurar tu patrimonio.</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2 mx-10"></div>

                    {/* Step 1 */}
                    <div className="flex flex-col items-center bg-white p-4 z-10 w-full md:w-1/3 mb-10 md:mb-0">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 ring-8 ring-white">
                            <Search size={32} />
                        </div>
                        <h3 className="font-heading text-xl font-semibold mb-2">1. Exploras opciones</h3>
                        <p className="text-gray-500 text-center text-sm px-4">Revisa nuestro catálogo curado de propiedades.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center bg-white p-4 z-10 w-full md:w-1/3 mb-10 md:mb-0">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 ring-8 ring-white">
                            <MessageSquare size={32} />
                        </div>
                        <h3 className="font-heading text-xl font-semibold mb-2">2. Te asesoramos</h3>
                        <p className="text-gray-500 text-center text-sm px-4">Resolvemos dudas y te damos claridad financiera.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center bg-white p-4 z-10 w-full md:w-1/3">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 ring-8 ring-white">
                            <Key size={32} />
                        </div>
                        <h3 className="font-heading text-xl font-semibold mb-2">3. Cierras tu compra</h3>
                        <p className="text-gray-500 text-center text-sm px-4">Firmas con seguridad y recibes tu propiedad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
