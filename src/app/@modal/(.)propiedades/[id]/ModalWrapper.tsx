"use client";

import { useRouter } from "next/navigation";
import TechnicalSheetModal from "@/components/TechnicalSheetModal";
import { Property } from "@/data/properties";

export default function ModalWrapper({ property }: { property: Property }) {
    const router = useRouter();

    return (
        <TechnicalSheetModal
            property={property}
            onClose={() => router.back()}
        />
    );
}
