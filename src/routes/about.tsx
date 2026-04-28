import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import { buildSeoMeta } from "@/lib/seo";
import heroImage from "@/assets/pool-city-view.png";
import poolHeaderImage from "@/assets/pool-forest-lounge.png";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeoMeta({
      title: "About BlueNova Pools — Miami Pool Experts",
      description:
        "Learn about BlueNova Pools, a trusted Miami team focused on professional pool care, transparent service, and customer-first support.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  const { t, locale } = useI18n();
  const isEs = locale === "es";

  const values = [
    { icon: "⭐", title: isEs ? "Excelencia" : "Excellence", description: isEs ? "Cada piscina recibe atención premium, sin importar su tamaño." : "Every pool gets premium care regardless of size." },
    { icon: "🤝", title: isEs ? "Confianza" : "Trust", description: isEs ? "Construimos relaciones a largo plazo con nuestros clientes." : "We build long-term relationships with our clients." },
    { icon: "🌱", title: isEs ? "Sostenibilidad" : "Sustainability", description: isEs ? "Usamos productos eco-friendly siempre que es posible." : "We use eco-friendly products whenever possible." },
    { icon: "⚡", title: isEs ? "Rapidez" : "Speed", description: isEs ? "Respuesta rápida y servicio puntual, siempre." : "Fast response and always on-time service." },
  ];

  return (
    <div className="min-h-screen">
      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img
          src={poolHeaderImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_35%]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-pool-dark/80" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-pool-light text-sm font-semibold uppercase tracking-widest mb-4">
            {isEs ? "Nuestra historia" : "Our story"}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            {isEs ? "Cuidamos piscinas en Miami con pasión y confianza" : "Pool care in Miami with passion and trust"}
            </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            {isEs
              ? "Pasión, profesionalismo y compromiso con cada cliente."
              : "Passion, professionalism and commitment to every client."}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px]" aria-hidden="true">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{t.about.badge}</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              {t.about.title1}<br />
              <span className="text-gradient">{t.about.title2}</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              {t.about.p1}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>
            <div className="mt-8">
              <Button asChild variant="default" size="lg">
                <Link to="/contact">{t.about.cta}</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt={isEs ? "Piscina de lujo en Miami" : "Luxury pool in Miami"}
              className="w-full h-[500px] object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{t.about.values}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-8 border border-border text-center shadow-sm hover:shadow-lg transition-shadow">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
