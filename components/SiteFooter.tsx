import Image from "next/image";
import Link from "next/link";
import { NavItem, SanityImage, SocialLink } from "@/lib/types";
import { urlFor } from "@/lib/sanity.image";

type SiteFooterProps = {
  siteTitle: string;
  navigation: NavItem[];
  logo?: SanityImage;
  logoWidth?: number;
  logoHeight?: number;
  phone?: string;
  email?: string;
  address?: string;
  operationalHours?: string[];
  socialLinks?: SocialLink[];
  privacyLink?: string;
  termsLink?: string;
  copyright?: string;
};

function clampLogoSize(value: number | undefined, fallback: number, min: number, max: number) {
  if (typeof value !== "number" || !Number.isFinite(value)) return fallback;
  return Math.min(Math.max(Math.round(value), min), max);
}

function getSocialLabel(platform: SocialLink["platform"]) {
  return platform.charAt(0).toUpperCase() + platform.slice(1);
}

function SocialIcon({ platform }: { platform: SocialLink["platform"] }) {
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="16.4" cy="7.6" r="0.8" />
      </svg>
    );
  }

  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8.4h2V5.2h-2.6c-3 0-4.4 1.8-4.4 4.5v1.8H6.7v3.2H9V21h3.5v-6.3h2.7l.5-3.2h-3.2V9.9c0-.9.4-1.5 1.5-1.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.3 4.8c.4 2.4 1.8 3.9 4.1 4.3v3.2a7 7 0 0 1-4-1.2v4.7c0 3.1-2.3 5.4-5.5 5.4a5.2 5.2 0 0 1-5.3-5.2c0-3.3 2.7-5.8 6.2-5.3v3.4c-1.6-.4-2.8.5-2.8 1.9 0 1.1.8 1.9 1.9 1.9 1.2 0 2-.8 2-2.2V4.8h3.4Z" />
    </svg>
  );
}

export function SiteFooter({
  siteTitle,
  navigation,
  logo,
  logoWidth,
  logoHeight,
  phone,
  email,
  address,
  operationalHours,
  socialLinks,
  privacyLink,
  termsLink,
  copyright
}: SiteFooterProps) {
  const renderedLogoWidth = clampLogoSize(logoWidth, 140, 40, 320);
  const renderedLogoHeight = clampLogoSize(logoHeight, 52, 24, 120);
  const logoUrl = logo?.asset
    ? urlFor(logo)
        .width(renderedLogoWidth * 2)
        .height(renderedLogoHeight * 2)
        .fit("max")
        .auto("format")
        .url()
    : null;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={logo?.alt || siteTitle}
              width={renderedLogoWidth}
              height={renderedLogoHeight}
              style={{ width: renderedLogoWidth, height: renderedLogoHeight }}
            />
          ) : (
            <h2>{siteTitle}</h2>
          )}
        </div>
        <div>
          <h3>Kontak Kami</h3>
          <ul className="footer-list">
            {phone ? <li>{phone}</li> : null}
            {email ? <li>{email}</li> : null}
            {address ? <li>{address}</li> : null}
          </ul>
        </div>
        <div>
          <h3>Jam Operasional</h3>
          <ul className="footer-list">
            {(operationalHours || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          {socialLinks?.length ? (
            <div className="social-links" aria-label="Social media">
              {socialLinks.map((item) => {
                if (!item.platform || !item.url) return null;

                return (
                  <Link
                    key={item._key || item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={getSocialLabel(item.platform)}
                  >
                    <SocialIcon platform={item.platform} />
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{copyright || `Copyright 2026 ${siteTitle}. All Rights Reserved`}</p>
        <div>
          {privacyLink ? <Link href={privacyLink}>Kebijakan Privasi</Link> : null}
          {termsLink ? <Link href={termsLink}>Syarat & Ketentuan</Link> : null}
        </div>
      </div>
    </footer>
  );
}
