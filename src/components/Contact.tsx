import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { defaultWhatsAppMessage, siteConfig, whatsappUrl } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact Us"
            title="Request a Quote or Maintenance Support"
            description="Reach AQ Technical Services by phone, email, WhatsApp, or the enquiry form below."
          />
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange/20 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-white/5 blur-2xl" />

              <div className="relative">
                <h3 className="font-display text-2xl font-semibold">{siteConfig.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Technical services and maintenance solutions for residential and commercial
                  properties in Dubai.
                </p>

                <ul className="mt-8 space-y-5 text-sm">
                  <li>
                    <a
                      href={`tel:${siteConfig.phoneTel}`}
                      className="inline-flex items-start gap-3 transition hover:text-orange"
                    >
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                      <span>
                        <span className="block text-xs uppercase tracking-[0.16em] text-white/50">
                          Phone
                        </span>
                        {siteConfig.phoneDisplay}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-start gap-3 transition hover:text-orange"
                    >
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                      <span>
                        <span className="block text-xs uppercase tracking-[0.16em] text-white/50">
                          Email
                        </span>
                        {siteConfig.email}
                      </span>
                    </a>
                  </li>
                  <li className="inline-flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/50">
                        Address
                      </span>
                      {siteConfig.address.short}
                    </span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl(defaultWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    WhatsApp
                  </a>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <MapPin className="h-4 w-4" aria-hidden />
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
