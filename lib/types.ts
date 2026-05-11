export type HeroSlide = {
  _key?: string;
  badge?: string;
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  heroImage?: unknown;
  features?: Array<{
    _key?: string;
    title: string;
    description?: string;
    icon?: IconStyle;
  }>;
};

export type HeroBlock = HeroSlide & {
  _key?: string;
  _type: "heroBlock";
  slides?: HeroSlide[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showControls?: boolean;
  showDots?: boolean;
};

export type FeatureBlock = {
  _key?: string;
  _type: "featureBlock";
  label?: string;
  heading: string;
  description?: string;
  highlights: string[];
};

export type PricingPlan = {
  _key?: string;
  title: string;
  speed: string;
  price: string;
  period?: string;
  isFeatured?: boolean;
  badge?: string;
  buttonLabel?: string;
  buttonLink?: string;
  features?: string[];
};

export type PricingBlock = {
  _key?: string;
  _type: "pricingBlock";
  heading?: string;
  highlightedHeading?: string;
  allPackagesLabel?: string;
  allPackagesLink?: string;
  plans: PricingPlan[];
};

export type TestimonialItem = {
  _key?: string;
  name: string;
  role?: string;
  message: string;
  rating?: number;
  avatar?: unknown;
};

export type TestimonialBlock = {
  _key?: string;
  _type: "testimonialBlock";
  heading?: string;
  highlightedHeading?: string;
  items: TestimonialItem[];
};

export type CoverageBlock = {
  _key?: string;
  _type: "coverageBlock";
  label?: string;
  heading: string;
  highlightedHeading?: string;
  description?: string;
  buttonLabel?: string;
  buttonLink?: string;
  mapImage?: unknown;
};

export type IconStyle = "speed" | "shield" | "wifi" | "price" | "home" | "business" | "game";

export type UseCaseItem = {
  _key?: string;
  title: string;
  description?: string;
  icon?: IconStyle;
  image?: unknown;
};

export type UseCaseBlock = {
  _key?: string;
  _type: "useCaseBlock";
  heading: string;
  highlightedHeading?: string;
  items: UseCaseItem[];
};

export type ContactBlock = {
  _key?: string;
  _type: "contactBlock";
  label?: string;
  sectionTitle: string;
  sectionSubtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  mapEmbedUrl?: string;
};

export type ContentBlock = {
  _key?: string;
  _type: "contentBlock";
  heading: string;
  body?: Array<{
    _key?: string;
    _type: "block";
    children?: Array<{ _key?: string; _type: "span"; text?: string }>;
  }>;
};

export type CtaBlock = {
  _key?: string;
  _type: "ctaBlock";
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

export type PageBlock =
  | HeroBlock
  | FeatureBlock
  | PricingBlock
  | CoverageBlock
  | UseCaseBlock
  | TestimonialBlock
  | ContactBlock
  | ContentBlock
  | CtaBlock;

export type PageData = {
  _id?: string;
  title: string;
  slug: { current: string };
  isHome?: boolean;
  pageDescription?: string;
  blocks: PageBlock[];
};


export type NavItem = {
  _key?: string;
  label: string;
  href: string;
};

export type SocialLink = {
  _key?: string;
  platform: "instagram" | "facebook" | "tiktok";
  url: string;
};

export type SanityImage = {
  _type?: "image";
  alt?: string;
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  crop?: unknown;
  hotspot?: unknown;
};

export type SiteSettings = {
  siteTitle: string;
  navigation: NavItem[];
  headerCtaLabel?: string;
  headerCtaLink?: string;
  logo?: SanityImage;
  logoWidth?: number;
  logoHeight?: number;
  footerTagline?: string;
  footerDescription?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactAddress?: string;
  operationalHours?: string[];
  footerSocialLinks?: SocialLink[];
  privacyLink?: string;
  termsLink?: string;
  footerCopyright?: string;
};
