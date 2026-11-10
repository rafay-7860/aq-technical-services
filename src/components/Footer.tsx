import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  defaultWhatsAppMessage,
  navLinks,
  services,
  siteConfig,
  whatsappUrl,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange text-sm font-bold tracking-wide">
              AQ
            </span>
            <span className="font-display text-lg font-semibold">{siteConfig.name}</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Professional technical services and maintenance solutions for residential and
            commercial properties in Dubai.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#25D366]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-orange"
            >
              <Mail className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-orange">
            Navigation
          </h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-orange">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-orange">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-start gap-3 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-start gap-3 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
                {siteConfig.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
              <span>{siteConfig.address.short}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Technical Services & Maintenance — Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
