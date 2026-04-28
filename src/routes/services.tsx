import { createFileRoute } from "@tanstack/react-router";
import { StrategicQuoteCta } from "@/components/StrategicQuoteCta";
import { useI18n } from "@/i18n/I18nProvider";
import { buildSeoMeta } from "@/lib/seo";
import poolResortPalm from "@/assets/pool-resort-palm.png";
import poolModernRectangular from "@/assets/pool-modern-rectangular.png";
import poolStepsDetail from "@/assets/pool-steps-detail.png";
import poolCleaningEquipment from "@/assets/pool-cleaning-equipment.png";
import poolInfinityHillside from "@/assets/pool-infinity-hillside.png";
import poolCityView from "@/assets/pool-city-view.png";
import poolForestLounge from "@/assets/pool-forest-lounge.png";

export const Route = createFileRoute("/services")({
  head: () =>
    buildSeoMeta({
      title: "Pool Cleaning & Maintenance Services Miami | Supreme Pool Spa Services",
      description:
        "Weekly pool cleaning, chemical balancing, equipment repair, and algae control in Miami-Dade. Book your Miami pool service—free quotes, no long-term contracts.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, locale } = useI18n();
  const isEs = locale === "es";
  const allServices = [
    { ...t.services.items[0], image: poolCleaningEquipment },
    { ...t.services.items[1], image: poolStepsDetail },
    { ...t.services.items[2], image: poolInfinityHillside },
    { ...t.services.items[3], image: poolModernRectangular },
    { ...t.services.items[4], image: poolCityView },
    { ...t.services.items[5], image: poolForestLounge },
  ];

  return (
    <div className="min-h-screen">
      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img
          src={poolResortPalm}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_40%]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-pool-dark/80" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-pool-light text-sm font-semibold uppercase tracking-widest mb-4">
            {isEs ? "Lo que hacemos" : "What we do"}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            {isEs ? "Servicios profesionales para tu piscina" : "Professional pool services"}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            {isEs
              ? "Desde limpieza semanal hasta reparaciones complejas — nos encargamos de todo"
              : "From weekly cleaning to complex repairs — we handle everything"}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px]" aria-hidden="true">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div key={service.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground leading-tight">{service.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20" aria-label={isEs ? "Presupuesto gratis" : "Free quote"}>
          <StrategicQuoteCta variant="dark" formHref="/contact#contact-quote-form" />
        </div>
      </section>
    </div>
  );
}
