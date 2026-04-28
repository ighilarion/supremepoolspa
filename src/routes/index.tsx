import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContactQuoteForm } from "@/components/ContactQuoteForm";
import { StrategicQuoteCta } from "@/components/StrategicQuoteCta";
import { useI18n } from "@/i18n/I18nProvider";
import { buildSeoMeta } from "@/lib/seo";
import { CONTACT_TEL_HREF } from "@/lib/contact";
import { trackCtaClick } from "@/lib/gtm";
import poolCleaningEquipment from "@/assets/pool-cleaning-equipment.png";
import poolStepsDetail from "@/assets/pool-steps-detail.png";
import poolInfinityHillside from "@/assets/pool-infinity-hillside.png";
import poolShowcaseBefore from "@/assets/pool-showcase-before.png";
import poolShowcaseAfter from "@/assets/pool-showcase-after.png";
import {
  PoolBeforeAfterCarousel,
  type BeforeAfterPair,
} from "@/components/PoolBeforeAfterCarousel";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoMeta({
      title: "Pool Cleaning Miami | Supreme Pool Spa Services — Free Quote",
      description:
        "Professional pool cleaning in Miami and Miami-Dade. Weekly service, repairs, and chemical balancing. Get a free quote in 5 minutes—no long-term contracts.",
      path: "/",
    }),
  component: Index,
});

const tx = (isEs: boolean, es: string, en: string) => (isEs ? es : en);

const servicesList = [
  {
    en: "Weekly Pool Service",
    es: "Servicio semanal de piscina",
    enDesc: "Keep your pool crystal clear every week without the hassle.",
    esDesc: "Mantén tu piscina cristalina cada semana sin complicaciones.",
    image: poolCleaningEquipment,
  },
  {
    en: "One-Time Cleaning",
    es: "Limpieza puntual",
    enDesc: "Perfect for dirty or neglected pools that need a fresh start.",
    esDesc: "Ideal para piscinas sucias o descuidadas que necesitan un nuevo comienzo.",
    image: poolStepsDetail,
  },
  {
    en: "Green Pool Recovery",
    es: "Recuperación de piscina verde",
    enDesc: "We turn green pools into clean, swimmable water fast.",
    esDesc: "Convertimos piscinas verdes en agua limpia y lista para nadar, rápido.",
    image: poolInfinityHillside,
  },
];

const reviews = [
  {
    id: "great-service",
    en: "Great service, fast and professional",
    es: "Gran servicio, rápido y profesional",
    name: "Carlos M.",
    photo: "/reviews/avatar-1.jpg",
  },
  {
    id: "never-looked-better",
    en: "My pool has never looked better",
    es: "Mi piscina nunca ha estado mejor",
    name: "Sarah L.",
    photo: "/reviews/avatar-2.jpg",
  },
];

const whyUs = [
  { icon: "📍", en: "Local Miami service", es: "Servicio local en Miami" },
  { icon: "⚡", en: "Fast response time", es: "Respuesta rápida" },
  { icon: "💰", en: "Affordable pricing", es: "Precios accesibles" },
  { icon: "👥", en: "Experienced team", es: "Equipo experimentado" },
  { icon: "🔓", en: "No long-term contracts", es: "Sin contratos a largo plazo" },
];

const areas = [
  "Miami",
  "Doral",
  "Kendall",
  "Brickell",
  "Miami Beach",
  "Coral Gables",
  "Aventura",
  "Homestead",
];

function Index() {
  const { locale, t } = useI18n();
  const isEs = locale === "es";

  const beforeAfterPairs: BeforeAfterPair[] = [
    {
      id: "transformation-showcase",
      kind: "slider",
      beforeSrc: poolShowcaseBefore,
      afterSrc: poolShowcaseAfter,
      beforeAlt: tx(
        isEs,
        "Piscina antes del tratamiento: agua verde y turbia",
        "Pool before treatment: green murky water",
      ),
      afterAlt: tx(
        isEs,
        "Piscina después del tratamiento: agua turquesa cristalina",
        "Pool after treatment: crystal-clear turquoise water",
      ),
      sliderAriaLabel: tx(
        isEs,
        "Comparador antes y después: arrastra horizontalmente",
        "Before and after comparison: drag horizontally",
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* BLOCK 1 — HERO */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-gradient absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-5xl w-full px-4 sm:px-6 text-center py-20 md:py-24">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md text-primary-foreground text-xs sm:text-sm font-semibold rounded-full px-4 py-2 mb-5 sm:mb-6 border border-primary-foreground/25 shadow-lg">
            <span className="flex text-miami-coral text-sm tracking-tighter" aria-hidden="true">
              ★★★★★
            </span>
            <span className="font-bold">4.9/5</span>
            <span className="text-primary-foreground/70">·</span>
            <span className="uppercase tracking-wider text-[10px] sm:text-xs">
              {isEs ? "+500 piscinas en Miami" : "+500 Miami pools served"}
            </span>
          </div>

          <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] tracking-tight">
            {isEs ? (
              <>
                Limpieza de piscinas en <span className="italic font-medium text-pool-light"> Miami </span>
                <br className="hidden sm:block" />{" "}
                Rápida, confiable y asequible
              </>
            ) : (
              <>
                Pool Cleaning in <span className="italic font-medium text-pool-light"> Miami </span>
                <br className="hidden sm:block" />{" "}
                Fast, Reliable & Affordable
              </>
            )}
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-2xl text-primary-foreground/95 font-normal max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            {isEs
              ? "Servicio semanal disponible esta semana — presupuesto gratis en 5 minutos. Limpieza de piscinas en Miami y Miami-Dade."
              : "Weekly service available this week – Get a free quote in 5 minutes. Trusted pool cleaning across Miami-Dade."}
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Button
              asChild
              variant="coral"
              size="lg"
              className="min-h-[58px] w-full sm:w-auto shadow-2xl shadow-miami-coral/30 hover:scale-[1.02] transition-transform"
            >
              <a
                href="#quote-form"
                onClick={() =>
                  trackCtaClick({ placement: "hero", target: "quote_anchor", link_url: "/#quote-form" })
                }
                className="text-base sm:text-lg px-7 sm:px-10 py-3 sm:py-4 font-semibold"
              >
                {isEs ? "Presupuesto gratis en 5 min →" : "Free quote in 5 min →"}
              </a>
            </Button>
            <Button
              asChild
              variant="heroOutline"
              size="lg"
              className="min-h-[58px] w-full sm:w-auto backdrop-blur-sm"
            >
              <a
                href={CONTACT_TEL_HREF}
                onClick={() =>
                  trackCtaClick({ placement: "hero", target: "tel", link_url: CONTACT_TEL_HREF })
                }
                className="text-base sm:text-lg px-7 sm:px-10 py-3 sm:py-4 font-semibold"
              >
                📞 {isEs ? "Llamar ahora" : "Call now"}
              </a>
            </Button>
          </div>

          {/* Price highlight */}
          <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-miami-coral/15 backdrop-blur-md border border-miami-coral/40 px-4 py-2 text-primary-foreground shadow-lg">
            <span aria-hidden className="text-base">💧</span>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              {isEs ? "Limpiezas desde" : "Cleanings from"}
            </span>
            <span className="text-lg sm:text-xl font-bold text-pool-light">$100</span>
          </div>

          {/* Microcopy under CTAs */}
          <p className="mt-4 text-xs sm:text-sm text-primary-foreground/75 font-medium">
            {isEs
              ? "⚡ Respuesta en menos de 24h · Sin compromiso"
              : "⚡ Response in under 24h · No commitment"}
          </p>

          {/* Trust strip */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-primary-foreground/15 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-8 text-xs sm:text-sm text-primary-foreground/85 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="text-pool-light">✓</span>{" "}
              {isEs ? "Técnicos certificados" : "Certified technicians"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-pool-light">✓</span>{" "}
              {isEs ? "Servicio en todo Miami" : "All Miami coverage"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-pool-light">✓</span>{" "}
              {isEs ? "Garantía de satisfacción" : "Satisfaction guarantee"}
            </span>
          </div>
        </div>

        {/* Wave bottom border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[80px] md:h-[120px]"
            aria-hidden="true"
          >
            <path
              d="M0,62 C110,108 235,22 360,58 C485,96 600,26 720,54 C840,86 965,16 1080,50 C1200,82 1320,34 1440,58 L1440,120 L0,120 Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* BEFORE / AFTER — high on page */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mt-3 sm:mt-5 text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {tx(
                isEs,
                "Mira cómo transformamos piscinas en una sola visita",
                "See how we transform pools in just one visit",
              )}
            </h2>
            <p className="mt-3 sm:mt-4 text-muted-foreground text-sm sm:text-base md:text-lg">
              {tx(
                isEs,
                "Misma piscina: arrastra el control para ver el cambio. Resultados reales de limpieza de piscinas en Miami.",
                "Same pool — drag the slider to see the transformation. Real Miami pool cleaning results from local homes.",
              )}
            </p>
          </div>

          <div className="mt-8 sm:mt-12 mx-auto max-w-4xl">
            <PoolBeforeAfterCarousel
              pairs={beforeAfterPairs}
              hint={tx(
                isEs,
                "Arrastra el comparador para revelar el después",
                "Drag the slider to reveal the after",
              )}
              carouselAriaLabel={tx(isEs, "Galería antes y después", "Before and after gallery")}
              getDotAriaLabel={(i) => tx(isEs, `Ir al proyecto ${i + 1}`, `Go to project ${i + 1}`)}
            />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — testimonials */}
      <section className="section-padding mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {tx(
              isEs,
              "La confianza de los propietarios en Miami",
              "Trusted by homeowners in Miami",
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={review.photo}
                  alt=""
                  className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-full object-cover ring-2 ring-primary/15 ring-offset-2 ring-offset-card"
                  loading="lazy"
                  width={64}
                  height={64}
                />
                <p className="font-semibold text-foreground">{review.name}</p>
              </div>
              <p className="text-foreground font-medium leading-relaxed text-sm sm:text-base">
                <span className="text-miami-coral whitespace-nowrap mr-2" aria-hidden>
                  ★★★★★
                </span>
                <span
                  aria-label={tx(isEs, "5 de 5 estrellas", "5 out of 5 stars")}
                  className="sr-only"
                >
                  {tx(isEs, "5 de 5 estrellas. ", "5 stars. ")}
                </span>
                {isEs ? review.es : review.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-background py-10 sm:py-12 md:py-14"
        aria-label={isEs ? "Presupuesto gratis" : "Free quote"}
      >
        <StrategicQuoteCta variant="light" />
      </section>

      {/* BLOCK 2 — PROBLEM / SOLUTION */}
      <section className="section-padding mx-auto max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">
          {tx(
            isEs,
            "¿Tu piscina se está convirtiendo en un problema?",
            "Is Your Pool Becoming a Problem?",
          )}
        </h2>
        <div className="mt-6 sm:mt-8 max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {tx(
              isEs,
              "Agua sucia, equipos dañados, mantenimiento constante... puede ser frustrante.",
              "Dirty water, broken equipment, constant maintenance... it can be overwhelming.",
            )}
          </p>
          <p className="text-foreground text-base sm:text-lg font-semibold leading-relaxed">
            {tx(
              isEs,
              "Nos encargamos de todo para que vuelvas a disfrutar tu piscina.",
              "We handle everything so you can relax and enjoy your pool again.",
            )}
          </p>
        </div>
        <div className="mt-7 sm:mt-8 flex justify-center px-4">
          <Button asChild variant="default" size="lg" className="w-full sm:w-auto max-w-md">
            <a href="#quote-form">
              {tx(isEs, "Agenda tu servicio hoy", "Book Your Service Today")}
            </a>
          </Button>
        </div>
      </section>

      {/* BLOCK 3 — SERVICES */}
      <section className="bg-secondary/50 py-14 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
              {tx(isEs, "Servicios de Piscina", "Our Pool Services")}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              {tx(isEs, "Nuestros servicios de piscina", "Our Pool Services")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {servicesList.map((service) => (
              <div
                key={service.en}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {service.image && (
                  <div className="h-44 sm:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={isEs ? service.es : service.en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                )}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">
                    {isEs ? service.es : service.en}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm text-muted-foreground leading-relaxed">
                    {isEs ? service.esDesc : service.enDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-center text-sm sm:text-base md:text-lg font-semibold text-primary px-2">
            <span aria-hidden className="mr-1.5">
              👉
            </span>
            {tx(
              isEs,
              "Consulta ahora – disponibilidad limitada esta semana",
              "Ask now – limited availability this week",
            )}
          </p>

          <div className="mt-7 sm:mt-8 flex justify-center">
            <Button
              asChild
              variant="default"
              size="lg"
              className="min-h-[56px] sm:min-h-[58px] w-full sm:w-auto max-w-md px-6 sm:px-10 text-base sm:text-lg rounded-sm shadow-lg"
            >
              <a href="#quote-form" className="px-2 py-1">
                {tx(isEs, "Solicitar presupuesto", "Get a Free Quote")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section
        className="bg-secondary/30 py-10 sm:py-12 md:py-14"
        aria-label={isEs ? "Presupuesto gratis" : "Free quote"}
      >
        <StrategicQuoteCta variant="light" />
      </section>

      {/* BLOCK 5 — WHY CHOOSE US */}
      <section className="bg-pool-dark py-14 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {tx(isEs, "¿Por qué elegirnos?", "Why choose us?")}
          </h2>

          <ul className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 list-none">
            {whyUs.map((item) => (
              <li
                key={item.en}
                className="flex flex-col items-center text-center rounded-2xl border border-white/15 bg-white/5 px-4 py-5 md:py-6 backdrop-blur-sm"
              >
                <span className="text-4xl md:text-5xl leading-none mb-3" aria-hidden>
                  {item.icon}
                </span>
                <span className="text-sm md:text-base font-semibold text-white leading-snug">
                  {isEs ? item.es : item.en}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOCK 6 — LOCAL AREA */}
      <section className="section-padding mx-auto max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">
          {tx(isEs, "Servimos en Miami y zonas cercanas", "Serving Miami and nearby areas")}
        </h2>
        <p className="mt-5 sm:mt-6 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          {tx(
            isEs,
            "Ofrecemos limpieza de piscinas en Miami, Doral, Kendall, Brickell y zonas circundantes.",
            "We provide pool cleaning services in Miami, Doral, Kendall, Brickell and surrounding areas.",
          )}
        </p>
        <div className="mt-7 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-secondary text-secondary-foreground rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium border border-border"
            >
              📍 {area}
            </span>
          ))}
        </div>
      </section>

      {/* BLOCK 7 — OFFER / LEAD MAGNET */}
      <section className="bg-miami-sand py-14 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block bg-miami-coral text-white rounded-full px-4 py-1 text-xs sm:text-sm font-bold mb-5 sm:mb-6">
            {tx(isEs, "GRATIS", "FREE")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {tx(isEs, "Obtén tu diagnóstico GRATIS hoy", "Get a FREE Pool Inspection Today")}
          </h2>
          <p className="mt-5 sm:mt-6 text-muted-foreground text-base sm:text-lg">
            {tx(
              isEs,
              "Sin compromiso. Te decimos exactamente qué necesita tu piscina.",
              "No commitment. We'll tell you exactly what your pool needs.",
            )}
          </p>
          <div className="mt-7 sm:mt-8 flex justify-center">
            <Button asChild variant="coral" size="lg" className="w-full sm:w-auto max-w-md">
              <a href="#quote-form">{tx(isEs, "Solicitar ahora", "Claim Your Free Quote")}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCK 8 — STRATEGIC CTA */}
      <section
        className="py-14 sm:py-16 md:py-20 px-0 bg-background"
        aria-label={isEs ? "Presupuesto gratis" : "Free quote"}
      >
        <StrategicQuoteCta variant="dark" />
      </section>

      {/* BLOCK 9 — CONTACT FORM */}
      <section id="quote-form" className="bg-secondary/50 py-14 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              {tx(isEs, "Obtén tu presupuesto gratis", "Get Your Free Quote")}
            </h2>
          </div>

          <ContactQuoteForm variant="home" />
        </div>
      </section>
    </div>
  );
}
