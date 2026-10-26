import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/50660530033?text=Hola%2C%20quisiera%20consultar%20por%20un%20pastel"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 hover:scale-105 transition-transform drop-shadow-lg"
            aria-label="Escribinos por WhatsApp"
        >
            <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center">
                <FaWhatsapp size={34} className="text-white" />
            </div>
        </a>
    );
}
