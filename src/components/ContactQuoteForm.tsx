import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/i18n/I18nProvider";
import { CONTACT_PHONE_DISPLAY } from "@/lib/contact";
import { trackGenerateLead } from "@/lib/gtm";

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID ?? "maqaojvn";

type QuoteFields = {
  name: string;
  phone: string;
};

export type ContactQuoteFormProps = {
  /** `home`: tarjeta del bloque #quote-form en la portada. `embed` (default): dentro del card de /contact */
  variant?: "embed" | "home";
};

const inputHomeClass =
  "rounded-xl border border-input bg-background px-4 py-3 text-foreground h-auto md:text-sm focus-visible:ring-2";

export function ContactQuoteForm({ variant = "embed" }: ContactQuoteFormProps) {
  const [state, handleSubmit] = useForm<QuoteFields>(FORMSPREE_FORM_ID);
  const { t, locale } = useI18n();
  const isEs = locale === "es";
  const isHome = variant === "home";
  const leadTracked = useRef(false);

  useEffect(() => {
    if (!state.succeeded || leadTracked.current) return;
    leadTracked.current = true;
    trackGenerateLead(isHome ? "home" : "contact");
  }, [state.succeeded, isHome]);

  const nameId = isHome ? "home-quote-name" : "contact-name";
  const phoneId = isHome ? "home-quote-phone" : "contact-phone";

  const subjectLine = isHome
    ? isEs
      ? "Presupuesto gratis desde inicio — Supreme Pool Spa Services"
      : "Free quote from homepage — Supreme Pool Spa Services"
    : isEs
      ? "Nueva solicitud de presupuesto gratis — Supreme Pool Spa Services"
      : "New free quote request — Supreme Pool Spa Services";

  if (state.succeeded) {
    if (isHome) {
      return (
        <div className="bg-card rounded-2xl border border-border p-8 sm:p-10 text-center shadow-lg">
          <span className="text-5xl block mb-4" aria-hidden="true">
            ✅
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t.contact.sentTitle}</h3>
          <p className="mt-2 text-muted-foreground">{t.contact.sentText}</p>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="h-16 w-16 rounded-full bg-pool-light flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-pool-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground">{t.contact.sentTitle}</h3>
        <p className="mt-2 text-muted-foreground">{t.contact.sentText}</p>
      </div>
    );
  }

  const formErrors = state.errors?.getFormErrors() ?? [];

  const formClass = isHome
    ? "bg-card rounded-2xl border border-border p-6 sm:p-8 md:p-10 shadow-lg space-y-5 sm:space-y-6"
    : "space-y-6";

  return (
    <form onSubmit={handleSubmit} className={formClass}>
      <input type="hidden" name="_subject" value={subjectLine} />
      <input type="hidden" name="source" value={isHome ? "home" : "contact"} />
      {formErrors.length > 0 && (
        <p className="text-sm text-destructive" role="alert">
          {formErrors[0]?.message ?? t.contact.formError}
        </p>
      )}
      <div className={isHome ? "space-y-0" : "space-y-2"}>
        <Label
          htmlFor={nameId}
          className={isHome ? "block text-sm font-semibold text-foreground mb-2" : undefined}
        >
          {t.contact.name}
        </Label>
        <Input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={isEs ? "Tu nombre" : "Your name"}
          maxLength={100}
          required
          className={isHome ? inputHomeClass : undefined}
        />
        <ValidationError
          prefix={t.contact.name}
          field="name"
          errors={state.errors}
          className="text-sm text-destructive mt-1"
        />
      </div>
      <div className={isHome ? "space-y-0" : "space-y-2"}>
        <Label
          htmlFor={phoneId}
          className={isHome ? "block text-sm font-semibold text-foreground mb-2" : undefined}
        >
          {t.contact.phone}
        </Label>
        <Input
          id={phoneId}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder={CONTACT_PHONE_DISPLAY}
          maxLength={20}
          required
          className={isHome ? inputHomeClass : undefined}
        />
        <ValidationError
          prefix={t.contact.phone}
          field="phone"
          errors={state.errors}
          className="text-sm text-destructive mt-1"
        />
      </div>
      <div className="space-y-2">
        <Button
          type="submit"
          variant="coral"
          size="lg"
          className="w-full"
          disabled={state.submitting}
        >
          {state.submitting ? t.contact.sending : t.quoteCta.submit}
        </Button>
        <p className="text-center text-sm font-medium text-muted-foreground">
          {t.stickyCta.microcopy}
        </p>
      </div>
    </form>
  );
}
