"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { quoteWhatsAppMessage, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.jpg"
          alt="Dubai skyline representing professional technical services and property maintenance"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/90 to-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(232,93,4,0.28),transparent_48%)]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-4 pb-20 pt-36 sm:px-6 sm:pb-24 lg:justify-center lg:px-8 lg:pb-28 lg:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.28em] text-orange"
        >
          AQ Technical Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Professional Technical Services & Maintenance Solutions in Dubai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Reliable technical services and maintenance solutions designed to keep your residential
          and commercial properties operating smoothly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={whatsappUrl(quoteWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange/30 transition hover:bg-orange-deep"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
