import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/lib/site";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Work"
            title="Visual Inspiration for Technical & Building Maintenance"
            description="A curated gallery of high-quality imagery representing the types of environments and maintenance work we support. These are illustrative stock photographs, not project photos from AQ Technical Services."
          />
        </FadeIn>

        <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
          {galleryItems.map((item, index) => {
            const featured = index === 0 || index === 5;
            return (
              <FadeIn
                key={`${item.title}-${index}`}
                delay={Math.min(index * 0.05, 0.25)}
                className={featured ? "h-full sm:row-span-2" : "h-full"}
              >
                <figure className="group relative h-full min-h-[220px] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16">
                    <p className="font-display text-base font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-white/65">Illustrative stock imagery</p>
                  </figcaption>
                </figure>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
