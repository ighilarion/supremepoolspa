import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { GtmPageViewTracker } from "@/components/GtmPageViewTracker";
import { I18nProvider, useI18n } from "@/i18n/I18nProvider";
import { SITE_URL } from "@/lib/seo";

import appCss from "../styles.css?url";

function gtmHeadScript(gtmId: string) {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
}

function NotFoundComponent() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.notFound.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.notFound.description}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.notFound.goHome}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Supreme Pool Spa Services" },
      { name: "twitter:site", content: "@BlueNovaPools" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const gtmId = import.meta.env.VITE_GTM_ID?.trim() ?? "";
  const showGtm = gtmId.length > 0;

  return (
    <html lang="en">
      <head>
        {showGtm ? (
          <script
            dangerouslySetInnerHTML={{
              __html: gtmHeadScript(gtmId),
            }}
          />
        ) : null}
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#business`,
              name: "Supreme Pool Spa Services",
              description:
                "Professional pool cleaning and pool maintenance in Miami and Miami-Dade County. Weekly service, repairs, chemical balancing, and free quotes.",
              url: SITE_URL,
              telephone: "+1-786-656-6759",
              email: "info@bluenovapools.com",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Miami-Dade County",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.7617,
                longitude: -80.1918,
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Miami",
                addressRegion: "FL",
                addressCountry: "US",
              },
              serviceType: [
                "Pool cleaning",
                "Pool maintenance",
                "Pool equipment repair",
                "Pool chemical balancing",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Pool services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pool cleaning",
                      description:
                        "Weekly and one-time pool cleaning for homes in Miami-Dade.",
                      areaServed: {
                        "@type": "AdministrativeArea",
                        name: "Miami-Dade County",
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        {showGtm ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <GtmPageViewTracker />
      <Header />
      <div>
        <Outlet />
        <Footer />
      </div>
      <StickyCtaBar />
    </I18nProvider>
  );
}
