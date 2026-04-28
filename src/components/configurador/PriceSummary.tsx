import { calculatePoolQuote } from "@/lib/pricing/poolPricing";
import { usePoolConfiguratorStore } from "@/components/configurador/usePoolConfiguratorStore";
import { useI18n } from "@/i18n/I18nProvider";

export function PriceSummary() {
  const { t } = useI18n();
  const { shape, cleaningType, lengthM, widthM, depthM } = usePoolConfiguratorStore();
  const quote = calculatePoolQuote({ shape, cleaningType, lengthM, widthM, depthM });

  return (
    <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground">
      <p className="text-sm uppercase tracking-wider text-primary-foreground/70">
        {t.configurator.estimateByRange}
      </p>
      <p className="text-4xl md:text-5xl font-bold mt-2">${quote.estimatedPrice}</p>
      <p className="mt-2 text-primary-foreground/80">
        {cleaningType === "semanal" ? t.configurator.weekly : t.configurator.oneTime}
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div className="rounded-lg bg-primary-foreground/10 p-3">
          <p className="text-primary-foreground/70">{t.configurator.area}</p>
          <p className="font-semibold text-base">{quote.areaM2} m²</p>
        </div>
        <div className="rounded-lg bg-primary-foreground/10 p-3">
          <p className="text-primary-foreground/70">{t.configurator.volume}</p>
          <p className="font-semibold text-base">{quote.volumeM3} m³</p>
        </div>
        <div className="rounded-lg bg-primary-foreground/10 p-3">
          <p className="text-primary-foreground/70">{t.configurator.range}</p>
          <p className="font-semibold text-base">{quote.rangeLabel}</p>
        </div>
      </div>

      <p className="mt-6 text-xs text-primary-foreground/75">
        {t.configurator.estimateNote}
      </p>
    </div>
  );
}
