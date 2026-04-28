import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/button";
import { CONTACT_TEL_HREF } from "@/lib/contact";
import { trackCtaClick } from "@/lib/gtm";

export function StickyCtaBar() {
  const { t } = useI18n();

  return (
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
  );
}
