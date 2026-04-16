export type HomePageData = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaLink: string;
    heroImage?: unknown;
  };
  about: {
    heading: string;
    description: string;
    highlights: string[];
  };
  packages: Array<{
    title: string;
    speed: string;
    price: string;
    features: string[];
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    message: string;
    rating: number;
  }>;
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    address: string;
    phone: string;
    email: string;
    mapEmbedUrl: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
};
