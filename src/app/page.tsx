import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <CTA />
      <Contact />
    </>
  );
}
