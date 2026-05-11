import { groq } from "next-sanity";

export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  isHome,
  pageDescription,
  blocks[]{
    ...,
    slides[]{..., features[]{...}},
    plans[]{...},
    items[]{...},
    features[]{...}
  }
}`;

export const homePageQuery = groq`*[_type == "page" && isHome == true][0]{
  _id,
  title,
  slug,
  isHome,
  pageDescription,
  blocks[]{
    ...,
    slides[]{..., features[]{...}},
    plans[]{...},
    items[]{...},
    features[]{...}
  }
}`;

export const pageSlugsQuery = groq`*[_type == "page" && defined(slug.current)]{
  "slug": slug.current
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteTitle,
  navigation[]{label,href},
  headerCtaLabel,
  headerCtaLink,
  logo,
  logoWidth,
  logoHeight,
  footerTagline,
  footerDescription,
  contactPhone,
  contactEmail,
  contactAddress,
  operationalHours,
  footerSocialLinks[]{_key,platform,url},
  privacyLink,
  termsLink,
  footerCopyright
}`;

export const pagesForNavQuery = groq`*[_type == "page" && defined(slug.current)] | order(isHome desc, _createdAt asc){
  title,
  "slug": slug.current,
  isHome
}`;
