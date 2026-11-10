import type { Metadata } from "next";
import { Figtree, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AQ Technical Services | Technical Services & Maintenance Dubai",
    template: "%s | AQ Technical Services",
  },
  description:
    "AQ Technical Services provides technical services and maintenance solutions for residential and commercial properties in Dubai. Electrical, plumbing, HVAC, building maintenance and more.",
  keywords: [
    "Technical Services Dubai",
    "Maintenance Company Dubai",
    "Building Maintenance Dubai",
    "Electrical Maintenance Dubai",
    "Plumbing Services Dubai",
    "AC Maintenance Dubai",
    "Property Maintenance UAE",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "AQ Technical Services | Technical Services & Maintenance Dubai",
    description:
      "Professional technical services and maintenance solutions for residential and commercial properties in Dubai.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "AQ Technical Services — Dubai technical maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AQ Technical Services | Technical Services & Maintenance Dubai",
    description:
      "Professional technical services and maintenance solutions for residential and commercial properties in Dubai.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-charcoal antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
