export const siteConfig = {
  name: "AQ Technical Services",
  legalName: "AQ Technical Services",
  phoneDisplay: "+971 55 869 0179",
  phoneTel: "+971558690179",
  email: "info@aqtechnicalservices.com",
  address: {
    line1: "Marina Plaza, Tower, Floor 31",
    line2: "74 Al Marsa Street, Marsa Dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    short:
      "Marina Plaza, Tower, Floor 31, 74 Al Marsa Street, Marsa Dubai, Dubai, UAE",
  },
  mapsUrl: "https://maps.app.goo.gl/rDPqUpzsE1igB3qM8",
  whatsappNumber: "971558690179",
  url: "https://aqtechnicalservices.com",
  locale: "en_AE",
} as const;

export const defaultWhatsAppMessage =
  "Hello AQ Technical Services, I am interested in your technical services. Please provide more information.";

export function whatsappUrl(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function quoteWhatsAppMessage(service?: string) {
  if (service) {
    return `Hello AQ Technical Services, I would like a free quote for ${service}. Please contact me with more information.`;
  }
  return "Hello AQ Technical Services, I would like a free quote for your technical services. Please contact me with more information.";
}

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  icon:
    | "zap"
    | "droplets"
    | "wind"
    | "building"
    | "paintbrush"
    | "hammer"
    | "wrench"
    | "home"
    | "briefcase";
};

export const services: Service[] = [
  {
    slug: "electrical-maintenance",
    title: "Electrical Maintenance",
    shortDescription:
      "Support for electrical systems, fixtures, and routine maintenance needs in homes and workplaces.",
    description:
      "Our electrical maintenance category covers routine checks, repairs, and upkeep that help keep lighting, power points, and related systems working safely and reliably. Share your requirements and we will guide you on the next steps.",
    image: "/images/electrical.jpg",
    imageAlt: "Power lines and electrical infrastructure representing electrical maintenance",
    icon: "zap",
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    shortDescription:
      "Plumbing maintenance and repairs for leaks, fixtures, and water system issues.",
    description:
      "From leak checks to fixture support and general plumbing upkeep, this category is designed for residential and commercial properties that need dependable plumbing attention. Tell us what you need and we will respond promptly.",
    image: "/images/plumbing.jpg",
    imageAlt: "Modern bathroom fixtures representing plumbing maintenance services",
    icon: "droplets",
  },
  {
    slug: "hvac-maintenance",
    title: "Air Conditioning (HVAC) Maintenance",
    shortDescription:
      "AC and HVAC maintenance support to help keep indoor environments comfortable.",
    description:
      "Air conditioning maintenance helps properties stay comfortable throughout the year. This category covers servicing and upkeep for cooling systems commonly used in Dubai homes and commercial spaces.",
    image: "/images/hvac.jpg",
    imageAlt: "Modern interior environment representing HVAC comfort and maintenance",
    icon: "wind",
  },
  {
    slug: "building-maintenance",
    title: "Building Maintenance",
    shortDescription:
      "Broad building upkeep support for common areas, facilities, and day-to-day maintenance needs.",
    description:
      "Building maintenance brings together practical upkeep tasks that help properties remain presentable, functional, and well cared for. Ideal for property managers and owners looking for coordinated technical support.",
    image: "/images/building.jpg",
    imageAlt: "Contemporary building facade representing facility and building maintenance",
    icon: "building",
  },
  {
    slug: "painting-services",
    title: "Painting Services",
    shortDescription:
      "Interior and exterior painting support to refresh and maintain property finishes.",
    description:
      "Painting services help renew interiors and exteriors with a clean, professional finish. Share the scope of your space and we can discuss suitable scheduling and preparation.",
    image: "/images/painting.jpg",
    imageAlt: "Freshly painted interior walls representing painting services",
    icon: "paintbrush",
  },
  {
    slug: "carpentry-services",
    title: "Carpentry Services",
    shortDescription:
      "Carpentry support for fittings, repairs, and woodwork maintenance around your property.",
    description:
      "Carpentry work supports doors, fittings, cabinetry touch-ups, and other woodwork needs that keep interiors practical and well maintained. Contact us with details of the work required.",
    image: "/images/carpentry.jpg",
    imageAlt: "Woodworking and carpentry tools for property fittings and repairs",
    icon: "hammer",
  },
  {
    slug: "general-technical-maintenance",
    title: "General Technical Maintenance",
    shortDescription:
      "Flexible technical maintenance support for mixed property upkeep requirements.",
    description:
      "General technical maintenance is suited to mixed requests that span more than one trade. Describe the issue and property type so we can help you plan the right response.",
    image: "/images/general.jpg",
    imageAlt: "Technical professional reviewing systems for general maintenance support",
    icon: "wrench",
  },
  {
    slug: "residential-property-maintenance",
    title: "Residential Property Maintenance",
    shortDescription:
      "Maintenance support tailored to apartments, villas, and residential communities.",
    description:
      "Residential property maintenance focuses on the day-to-day technical needs of homes and residential buildings. Whether it is a single repair or broader upkeep, we are ready to discuss your requirements.",
    image: "/images/residential.jpg",
    imageAlt: "Modern residential property exterior suited for home maintenance services",
    icon: "home",
  },
  {
    slug: "commercial-property-maintenance",
    title: "Commercial Property Maintenance",
    shortDescription:
      "Technical and maintenance support for offices, retail spaces, and commercial facilities.",
    description:
      "Commercial properties benefit from responsive technical support that helps operations continue smoothly. Share your facility needs and preferred timing so we can assist accordingly.",
    image: "/images/commercial.jpg",
    imageAlt: "Contemporary commercial office interior representing facility maintenance",
    icon: "briefcase",
  },
];

export const galleryItems = [
  {
    title: "Building maintenance",
    image: "/images/gallery-building.jpg",
    alt: "High-rise residential buildings representing building maintenance contexts",
  },
  {
    title: "Electrical work",
    image: "/images/gallery-electrical.jpg",
    alt: "Electrician performing electrical maintenance work",
  },
  {
    title: "Plumbing maintenance",
    image: "/images/gallery-plumbing.jpg",
    alt: "Professional tools used for plumbing and technical maintenance",
  },
  {
    title: "AC maintenance",
    image: "/images/gallery-hvac.jpg",
    alt: "Technician inspecting equipment related to cooling and HVAC systems",
  },
  {
    title: "Interior maintenance",
    image: "/images/gallery-interior.jpg",
    alt: "Modern interior space representing interior upkeep and finishes",
  },
  {
    title: "Commercial property maintenance",
    image: "/images/gallery-commercial.jpg",
    alt: "Construction and commercial facility environment for property maintenance",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Reliable Service",
    description:
      "Clear communication and dependable follow-through for residential and commercial maintenance requests.",
    icon: "shield" as const,
  },
  {
    title: "Professional Approach",
    description:
      "Organized planning, respectful on-site conduct, and attention to detail across technical service work.",
    icon: "badge" as const,
  },
  {
    title: "Quality-Focused Work",
    description:
      "Careful workmanship and practical solutions aimed at keeping properties operating smoothly.",
    icon: "check" as const,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We listen carefully to your requirements and keep you informed from enquiry through completion.",
    icon: "heart" as const,
  },
  {
    title: "Residential & Commercial Solutions",
    description:
      "Flexible support for homes, apartments, offices, and commercial facilities across Dubai.",
    icon: "layers" as const,
  },
  {
    title: "Responsive Communication",
    description:
      "Reach us by phone, email, or WhatsApp for quotes and maintenance enquiries.",
    icon: "message" as const,
  },
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
] as const;
