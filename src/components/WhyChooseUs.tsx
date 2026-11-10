import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { whyIcons } from "@/lib/icons";
import { whyChooseUs } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built Around Trust, Quality & Clear Communication"
            description="We focus on dependable service, professional conduct, and practical solutions for residential and commercial properties."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = whyIcons[item.icon];
            return (
              <FadeIn key={item.title} delay={Math.min(index * 0.05, 0.25)}>
                <div className="group h-full rounded-3xl border border-navy/8 bg-surface p-7 transition duration-300 hover:border-orange/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(11,31,58,0.08)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-orange transition duration-300 group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
