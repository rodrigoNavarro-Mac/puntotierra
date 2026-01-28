import Navbar from "@/components/Navbar";
import Properties from "@/components/Properties";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";

export default function DesarrollosPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PageHeader
                title="Nuestros Desarrollos"
                subtitle="Proyectos exclusivos en las mejores ubicaciones de México."
            />
            <Properties
                category="Development"
            />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
