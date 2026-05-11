// Fallback dihapus, maintenance mode akan digunakan jika data gagal
import {
  homePageQuery,
  pageBySlugQuery,
  pageSlugsQuery,
  pagesForNavQuery,
  siteSettingsQuery
} from "./queries";
import { sanityClient } from "./sanity.client";
import { NavItem, PageData, SiteSettings } from "./types";

type SiteSettingsResponse = Omit<SiteSettings, "navigation"> & {
  navigation?: NavItem[] | null;
};

type NavPage = {
  title: string;
  slug: string;
  isHome?: boolean;
};

function pageToNavItem(page: NavPage): NavItem {
  return {
    label: page.title,
    href: page.isHome ? "/" : `/${page.slug}`
  };
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const settings = await sanityClient.fetch<SiteSettingsResponse | null>(siteSettingsQuery);
    if (!settings) throw new Error("No settings");

    const navigation =
      settings.navigation?.length
        ? settings.navigation
        : (await sanityClient.fetch<NavPage[]>(pagesForNavQuery)).map(pageToNavItem);

    return {
      ...settings,
      navigation
    };
  } catch {
    return null;
  }
}

export async function getHomePageData(): Promise<PageData | null> {
  try {
    const page = await sanityClient.fetch<PageData | null>(homePageQuery);
    if (page) return page;
  } catch {}
  return null;
}

export async function getPageDataBySlug(slug: string): Promise<PageData | null> {
  try {
    const page = await sanityClient.fetch<PageData | null>(pageBySlugQuery, { slug });
    if (page) return page;
  } catch {}
  return null;
}

export async function getAllPageSlugs(): Promise<Array<{ slug: string }>> {
  try {
    const slugs = await sanityClient.fetch<Array<{ slug: string }>>(pageSlugsQuery);
    return slugs || [];
  } catch {
    return [];
  }
}
