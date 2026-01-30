import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-text-main text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-10">
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative h-24 w-[300px] mb-6">
                            <Image
                                src="/logo.png"
                                alt="Punto Tierra Logo"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-400 max-w-xs mb-6">
                            Tu punto de partida en bienes raíces. Propiedades seleccionadas para vivir e invertir seguro.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/profile.php?id=100069903310405" aria-label="Facebook" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/punto_tierra?igsh=MXZvMGJ6dGN4MXE4NA==" aria-label="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-gray-200">Contacto</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                <a href="tel:+522221921012" className="hover:text-primary transition">222 192 1012</a>
                            </li>
                            <li>
                                <a href="mailto:contacto@puntotierra.mx" className="hover:text-primary transition">contacto@puntotierra.mx</a>
                            </li>
                            <li>Paseo Sinfonía Int D307, Sonata Town Center San Andrés Cholula, Puebla, Mexico</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-gray-200">Legal</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="/aviso-privacidad" className="hover:text-primary transition">Aviso de Privacidad</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Punto Tierra. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
