import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
    const phoneNumber = '+233599961709'
    const message = 'Hello! I would like to learn more about FirmLove Foundation.'

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg z-[999] animate-whatsapp-pulse hover:bg-[#1EBE57] hover:scale-110 transition-transform duration-200"
            aria-label="Chat on WhatsApp"
            id="whatsapp-float"
        >
            <MessageCircle size={28} fill="currentColor" />
            <span className="absolute right-[120%] top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                Chat with us
            </span>
        </a>
    )
}
