import { createFileRoute } from "@tanstack/react-router";
import { ContactQuoteForm } from "@/components/ContactQuoteForm";
import { useI18n } from "@/i18n/I18nProvider";
import { buildSeoMeta } from "@/lib/seo";
import { CONTACT_PHONE_DISPLAY } from "@/lib/contact";
import { StrategicQuoteCta } from "@/components/StrategicQuoteCta";
import poolHeaderImage from "@/assets/pool-modern-rectangular.png";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoMeta({
      title: "Contact Supreme Pool Spa Services — Free Quote in Miami",
      description:
        "Request your free pool service quote in Miami. Contact Supreme Pool Spa Services for cleaning, maintenance, repairs, and inspections.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const { t, locale } = useI18n();
  const isEs = locale === "es";

  return (
    <div className="min-h-screen">
      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img src={poolHeaderImage} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-pool-dark/80" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-pool-light text-sm font-semibold uppercase tracking-widest mb-4">
            {isEs ? "Hablemos" : "Let's talk"}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            {isEs ? "Presupuesto gratis para tu piscina" : "Get a free quote for your pool"}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            {isEs
              ? "Cuéntanos qué necesitas y te respondemos en menos de 24 horas."
              : "Tell us what you need and we'll respond within 24 hours."}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px]" aria-hidden="true">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            id="contact-quote-form"
            className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-sm scroll-mt-28"
          >
            <ContactQuoteForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">{t.contact.contactInfo}</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t.contact.location}</p>
                    <p className="text-sm text-muted-foreground">Miami-Dade, FL</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t.contact.phone}</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_PHONE_DISPLAY}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@bluenovapools.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <span className="text-lg">🕐</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t.contact.schedule}</p>
                    <p className="text-sm text-muted-foreground">{isEs ? "Lun - Sáb: 7am - 6pm" : "Mon - Sat: 7am - 6pm"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6">
              <h4 className="font-semibold text-foreground">{t.contact.whyUs}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.contact.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2"><span className="text-primary">✓</span> {bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-12 md:py-16" aria-label={isEs ? "Presupuesto gratis" : "Free quote"}>
        <StrategicQuoteCta variant="sand" formHref="#contact-quote-form" />
      </section>
    </div>
  );
}
