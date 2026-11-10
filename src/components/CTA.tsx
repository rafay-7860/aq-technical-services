"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { quoteWhatsAppMessage, whatsappUrl } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
      <Image
        src="/images/cta.jpg"
        alt="Technical professional supporting property maintenance operations"
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/92 to-navy/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(232,93,4,0.28),transparent_45%)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">
            Ready to Get Started?
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Need technical services or property maintenance in Dubai?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Message AQ Technical Services on WhatsApp for a free quote or to discuss your
            residential or commercial maintenance requirements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl(quoteWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange/25 transition hover:bg-orange-deep"
            >
              Get a Free Quote
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
