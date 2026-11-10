import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { serviceIcons } from "@/lib/icons";
import {
  quoteWhatsAppMessage,
  services,
  siteConfig,
  whatsappUrl,
} from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} Dubai`,
    description: `${service.shortDescription} Contact AQ Technical Services in Dubai for ${service.title.toLowerCase()}.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | AQ Technical Services Dubai`,
      description: service.shortDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const matched = services.find((item) => item.slug === slug);

  if (!matched) {
    notFound();
  }

  const service = matched!;
  const Icon = serviceIcons[service.icon];
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to services
          </Link>
          <div className="mt-8 flex items-start gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange text-white">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">
                Service Category
              </p>
              <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
              About this service
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/75">{service.description}</p>
            <p className="mt-5 text-base leading-relaxed text-charcoal/75">
              This page presents a proposed service category for the AQ Technical Services website.
              For confirmed availability, scope, and scheduling, please contact the team directly
              with your property details.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl(quoteWhatsAppMessage(service.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-deep"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={whatsappUrl(
                  `Hello AQ Technical Services, I am interested in ${service.title}. Please provide more information.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-surface px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-orange/40 hover:text-orange"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-navy/10 bg-surface p-7">
            <h2 className="font-display text-xl font-semibold text-navy">Talk to us</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
              Contact AQ Technical Services for {service.title.toLowerCase()} support in Dubai.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal/80">
              <li>
                <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-navy hover:text-orange">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-navy hover:text-orange"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address.short}</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Related service categories
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = serviceIcons[item.icon];
              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="rounded-3xl border border-navy/8 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,31,58,0.08)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-orange">
                    <RelatedIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {item.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
