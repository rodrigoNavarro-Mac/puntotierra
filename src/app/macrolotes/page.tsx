import Navbar from "@/components/Navbar";
import Properties from "@/components/Properties";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";

export default function MacrolotesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PageHeader
                title="Macrolotes Disponibles"
                subtitle="Terrenos de gran extensión para desarrollo inmobiliario en ubicaciones estratégicas."
            />
            <Properties
                category="Macrolot"
            />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
