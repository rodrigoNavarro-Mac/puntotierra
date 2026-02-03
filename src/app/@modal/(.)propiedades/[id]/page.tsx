import { properties } from "@/data/properties";
import ModalWrapper from "./ModalWrapper";

type Props = {
    params: Promise<{ id: string }>
}

export default async function PropertyModal({ params }: Props) {
    const { id } = await params;
    const property = properties.find((p) => p.id === id);

    if (!property) {
        return null;
    }

    return <ModalWrapper property={property} />;
}
