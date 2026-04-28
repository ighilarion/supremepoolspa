import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";
import { CONTACT_TEL_HREF, CONTACT_WHATSAPP_HREF } from "@/lib/contact";
import { trackCtaClick } from "@/lib/gtm";

type StrategicQuoteCtaProps = {
  /** Default: home lead form */
  formHref?: string;
  variant?: "light" | "dark" | "sand";
  className?: string;
};

export function StrategicQuoteCta({
  formHref = "/#quote-form",
  variant = "light",
  className,
}: StrategicQuoteCtaProps) {
  const { t } = useI18n();
  const q = t.quoteCta;

  const inner =
    variant === "dark"
      ? "border border-white/15 bg-pool-dark/95 p-8 md:p-10"
      : variant === "sand"
        ? "border border-miami-coral/15 bg-miami-sand/90 p-8 md:p-10"
        : "border border-border bg-secondary/40 p-8 md:p-10 shadow-sm";

  return (
    <div className={cn("mx-auto max-w-5xl px-6", className)}>
      <div className={cn("rounded-3xl text-center", inner)}>
        <h2
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight",
            variant === "dark" ? "text-white" : "text-foreground",
          )}
        >
          {q.title}
        </h2>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          <Button asChild variant="default" size="lg" className="min-h-[52px] text-base font-semibold sm:min-w-[10rem]">
            <a
              href={CONTACT_TEL_HREF}
              onClick={() =>
                trackCtaClick({
                  placement: "strategic_cta",
                  target: "tel",
                  link_url: CONTACT_TEL_HREF,
                })
              }
            >
              <span aria-hidden>📞</span>
              {q.callNow}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="min-h-[52px] border-0 bg-[#25D366] text-base font-semibold text-white hover:bg-[#20bd5a] sm:min-w-[10rem]"
          >
            <a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCtaClick({
                  placement: "strategic_cta",
                  target: "whatsapp",
                  link_url: CONTACT_WHATSAPP_HREF,
                })
              }
            >
              <span aria-hidden>💬</span>
              {q.whatsapp}
            </a>
          </Button>
          <Button asChild variant="coral" size="lg" className="min-h-[52px] text-base font-semibold sm:min-w-[10rem]">
            <a
              href={formHref}
              onClick={() =>
                trackCtaClick({
                  placement: "strategic_cta",
                  target: "quote_anchor",
                  link_url: formHref,
                })
              }
            >
              <span aria-hidden>👉</span>
              {q.form}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
