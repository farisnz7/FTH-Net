import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.image";
import { NavItem, SanityImage } from "@/lib/types";

type NavbarProps = {
  siteTitle: string;
  navigation: NavItem[];
  logo?: SanityImage;
  logoWidth?: number;
  logoHeight?: number;
};

function clampLogoSize(value: number | undefined, fallback: number, min: number, max: number) {
  if (typeof value !== "number" || !Number.isFinite(value)) return fallback;
  return Math.min(Math.max(Math.round(value), min), max);
}

export function Navbar({
  siteTitle,
  navigation,
  logo,
  logoWidth,
  logoHeight
}: NavbarProps) {
  const logoAlt = logo?.alt || siteTitle;
  const renderedLogoWidth = clampLogoSize(logoWidth, 160, 40, 320);
  const renderedLogoHeight = clampLogoSize(logoHeight, 60, 24, 120);
  const logoUrl = logo?.asset
    ? urlFor(logo)
        .width(renderedLogoWidth * 2)
        .height(renderedLogoHeight * 2)
        .fit("max")
        .auto("format")
        .url()
    : null;

  return (
    <header className="topbar">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={logoAlt}
              width={renderedLogoWidth}
              height={renderedLogoHeight}
              style={{ width: renderedLogoWidth, height: renderedLogoHeight }}
              priority
            />
          ) : (
            siteTitle
          )}
        </Link>
        <nav>
          {navigation.map((item) => (
            <Link key={`${item.label}-${item.href}`} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
