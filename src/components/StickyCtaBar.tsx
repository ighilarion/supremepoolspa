import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/button";
import { CONTACT_TEL_HREF, CONTACT_WHATSAPP_HREF } from "@/lib/contact";
import { trackCtaClick } from "@/lib/gtm";

export function StickyCtaBar() {
  const { t } = useI18n();

  return (
    <>
      <a
        href={CONTACT_WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        onClick={() =>
          trackCtaClick({
            placement: "sticky_whatsapp_fab",
            target: "whatsapp",
            link_url: CONTACT_WHATSAPP_HREF,
          })
        }
        className="group fixed bottom-[calc(env(safe-area-inset-bottom)+7.5rem)] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:bottom-6 md:right-6"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/40" />
        <span className="absolute inset-0 rounded-full ring-2 ring-white/40" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative h-7 w-7 fill-current"
          aria-hidden
        >
          <path d="M19.11 17.2c-.27-.14-1.57-.78-1.81-.87-.24-.09-.42-.14-.6.14-.17.27-.69.87-.84 1.04-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.33-1.56-1.48-1.83-.15-.27-.02-.41.11-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.53-.43-.46-.6-.47h-.51c-.18 0-.47.07-.72.34-.24.27-.94.91-.94 2.22s.96 2.58 1.09 2.76c.14.18 1.89 2.88 4.58 4.04.64.28 1.14.45 1.52.58.64.2 1.22.17 1.67.11.51-.08 1.57-.64 1.79-1.27.22-.63.22-1.17.15-1.27-.07-.11-.25-.18-.51-.31Z" />
          <path d="M27.29 4.69A15.94 15.94 0 0 0 16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.58 2.13 8.01L0 32l8.2-2.1A15.9 15.9 0 0 0 16 32c8.84 0 16-7.16 16-16 0-4.27-1.66-8.29-4.71-11.31ZM16 29.13c-2.39 0-4.73-.64-6.78-1.84l-.49-.29-4.87 1.24 1.3-4.75-.32-.5A13.09 13.09 0 0 1 2.87 16C2.87 8.75 8.75 2.87 16 2.87c3.5 0 6.79 1.36 9.27 3.84A13.02 13.02 0 0 1 29.13 16c0 7.25-5.88 13.13-13.13 13.13Z" />
        </svg>
        <span className="sr-only">Abrir WhatsApp</span>
        <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-white/90 animate-pulse" />
        <span className="absolute -bottom-11 hidden rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background shadow-md md:block">
          WhatsApp
        </span>
      </a>
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 box-border w-full max-w-[100vw] overflow-x-hidden pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))]"
        aria-label="Quick actions"
      >
        <div className="pointer-events-auto mx-auto w-full max-w-2xl min-w-0 overflow-hidden rounded-2xl border border-border/60 bg-[#ecf9fc]/95 p-2 shadow-lg backdrop-blur-md">
          <div className="grid min-w-0 grid-cols-2 gap-2">
            <Button
              asChild
              variant="outline"
              className="h-12 min-h-12 min-w-0 gap-1 border-primary/30 bg-background/80 px-2 text-foreground hover:bg-background sm:gap-2 sm:px-3"
            >
              <a
                href={CONTACT_TEL_HREF}
                onClick={() =>
                  trackCtaClick({ placement: "sticky_bar", target: "tel", link_url: CONTACT_TEL_HREF })
                }
                className="flex min-w-0 items-center justify-center gap-1 text-xs font-semibold sm:gap-2 sm:text-sm"
              >
                <span aria-hidden className="shrink-0">
                  📞
                </span>
                <span className="min-w-0 text-center leading-tight line-clamp-2 sm:line-clamp-none">
                  {t.stickyCta.callNow}
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="default"
              className="h-12 min-h-12 min-w-0 gap-1 px-2 sm:gap-2 sm:px-3"
            >
              <a
                href="/#quote-form"
                onClick={() =>
                  trackCtaClick({ placement: "sticky_bar", target: "quote_anchor", link_url: "/#quote-form" })
                }
                className="flex min-w-0 items-center justify-center gap-1 text-xs font-semibold sm:gap-2 sm:text-sm"
              >
                <span aria-hidden className="shrink-0">
                  💬
                </span>
                <span className="min-w-0 text-center leading-tight line-clamp-2 sm:line-clamp-none">
                  {t.stickyCta.freeQuote}
                </span>
              </a>
            </Button>
          </div>
          <p className="mt-2 px-0.5 text-center text-[11px] font-medium leading-tight text-muted-foreground">
            {t.stickyCta.microcopy}
          </p>
        </div>
      </div>
    </>
  );
}
