"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import * as fbq from '@/lib/fpixel';

export default function WhatsAppButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-float hover:scale-105 transition-transform duration-300 hidden md:block border border-gray-100">
                A un solo click de un asesor
            </div>
            <Link
                href="https://wa.me/522221921012" 
                target="_blank"
                className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-float hover:animate-none hover:scale-110 transition-transform duration-300 hover:bg-[#20bd5a] flex items-center justify-center"
                aria-label="Contactar por WhatsApp"
                onClick={() => {
                    fbq.event('Contact', {
                        content_name: 'whatsapp_button',
                        content_category: 'lead_generation'
                    });
                }}
            >
                <MessageCircle size={32} fill="white" className="text-white" />
            </Link>
        </div>
    );
}
