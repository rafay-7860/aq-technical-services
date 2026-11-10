import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceIcons } from "@/lib/icons";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            description="Explore proposed service categories for residential and commercial technical maintenance in Dubai. Share your needs and we will confirm the right support for your property."
          />
        </FadeIn>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-charcoal/55">
          Service categories shown below are proposed website offerings and should be verified with
          the business before being treated as confirmed specialist capabilities.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <FadeIn key={service.slug} delay={Math.min(index * 0.05, 0.3)}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-[0_18px_50px_rgba(11,31,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,31,58,0.12)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-navy shadow-md">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange transition hover:gap-3 hover:text-orange-deep"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
