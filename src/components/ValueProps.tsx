import { CheckCircle, MapPin, FileText } from "lucide-react";

const benefits = [
    {
        icon: MapPin,
        title: "Propiedades estratégicas",
        description: "Ubicaciones con plusvalía real, sin sorpresas."
    },
    {
        icon: CheckCircle,
        title: "Acompañamiento total",
        description: "Te guiamos en cada paso del proceso de compra e inversión."
    },
    {
        icon: FileText,
        title: "Sin letras chiquitas",
        description: "Transparencia absoluta en precios, legalidad y contratos."
    }
];

export default function ValueProps() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-text-main mb-4">
                        ¿Por qué Punto Tierra?
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mb-6 text-primary">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
