import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ConfiguratorForm } from "@/components/configurador/ConfiguratorForm";
import { PriceSummary } from "@/components/configurador/PriceSummary";
import { useI18n } from "@/i18n/I18nProvider";
import { buildSeoMeta } from "@/lib/seo";
import poolHeaderImage from "@/assets/pool-steps-detail.png";

const PoolCanvas3D = lazy(() =>
  import("@/components/configurador/PoolCanvas3D").then((module) => ({
    default: module.PoolCanvas3D,
  })),
);

export const Route = createFileRoute("/configurador")({
  head: () =>
    buildSeoMeta({
      title: "3D Pool Configurator — BlueNova Pools",
      description:
        "Use the BlueNova Pools 3D configurator to estimate weekly or one-time pool cleaning costs based on dimensions and shape.",
      path: "/configurador",
    }),
  component: ConfiguradorPage,
});

function ConfiguradorPage() {
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
            {isEs ? "Diseña tu piscina" : "Design your pool"}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            {isEs ? "Configurador 3D de piscinas" : "3D Pool Configurator"}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            {isEs
              ? "Ajusta las dimensiones, visualiza en 3D y obtén un presupuesto estimado al instante."
              : "Adjust dimensions, visualize in 3D and get an instant estimated quote."}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px]" aria-hidden="true">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <ConfiguratorForm />
            <PriceSummary />
          </div>
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="h-[420px] rounded-2xl border border-border bg-secondary/50 animate-pulse" />
              }
            >
              <PoolCanvas3D />
            </Suspense>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.configurator.hint}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
