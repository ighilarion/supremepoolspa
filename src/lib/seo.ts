export const SITE_URL = "https://www.supremepoolspa.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image-supreme-pool-spa.png`;

type SeoInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildSeoMeta({ title, description, path = "/" }: SeoInput) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
