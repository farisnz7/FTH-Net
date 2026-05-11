import { Navbar } from "@/components/Navbar";
import { PageBuilder } from "@/components/PageBuilder";
import { SiteFooter } from "@/components/SiteFooter";
import { MaintenanceBanner } from "@/components/MaintenanceBanner";
import { getAllPageSlugs, getPageDataBySlug, getSiteSettings } from "@/lib/page-data";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs
    .filter((item) => item.slug !== "home")
    .map((item) => ({ slug: item.slug }));
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = params;
  const [settings, page] = await Promise.all([getSiteSettings(), getPageDataBySlug(slug)]);
  if (!settings || !page || page.isHome) {
    return <MaintenanceBanner />;
  }
  return (
    <main>
      <Navbar
        siteTitle={settings.siteTitle}
        navigation={settings.navigation}
        logo={settings.logo}
        logoWidth={settings.logoWidth}
        logoHeight={settings.logoHeight}
      />
      <PageBuilder blocks={page.blocks} />
      <SiteFooter
        siteTitle={settings.siteTitle}
        navigation={settings.navigation}
        logo={settings.logo}
        logoWidth={settings.logoWidth}
        logoHeight={settings.logoHeight}
        phone={settings.contactPhone}
        email={settings.contactEmail}
        address={settings.contactAddress}
        operationalHours={settings.operationalHours}
        socialLinks={settings.footerSocialLinks}
        privacyLink={settings.privacyLink}
        termsLink={settings.termsLink}
        copyright={settings.footerCopyright}
      />
    </main>
  );
}
