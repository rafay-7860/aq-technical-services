"use client";

import { MessageCircle } from "lucide-react";
import { defaultWhatsAppMessage, whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AQ Technical Services on WhatsApp"
      className="whatsapp-float fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition duration-300 hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/35" aria-hidden />
      <MessageCircle className="relative h-7 w-7" strokeWidth={2.2} aria-hidden />
    </a>
  );
}
