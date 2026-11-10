import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-orange/20 via-transparent to-navy/10" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(11,31,58,0.16)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src="/images/about.jpg"
                  alt="Technical services professional reviewing systems on site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-display text-lg font-semibold text-white">
                  Technical care for Dubai properties
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Clear communication. Careful workmanship.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="About AQ Technical Services"
            description="Reliable technical services and maintenance are essential for keeping residential and commercial properties safe, functional, and comfortable."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/75">
            <p>
              AQ Technical Services supports property owners, residents, and businesses in Dubai
              with practical maintenance and technical service solutions. From everyday upkeep to
              targeted repair requests, we focus on clear communication and careful workmanship.
            </p>
            <p>
              Well-maintained electrical systems, plumbing, air conditioning, and building finishes
              help protect comfort, reduce disruption, and support the long-term condition of a
              property. Our approach centres on understanding your needs, responding promptly, and
              delivering service with professionalism.
            </p>
            <p>
              Whether you manage a home, apartment, office, or commercial facility, we are ready to
              discuss your requirements and help you arrange the right maintenance support.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
