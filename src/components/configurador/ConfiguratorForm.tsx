import { usePoolConfiguratorStore } from "@/components/configurador/usePoolConfiguratorStore";
import { useI18n } from "@/i18n/I18nProvider";

export function ConfiguratorForm() {
  const { t } = useI18n();
  const {
    shape,
    cleaningType,
    lengthM,
    widthM,
    depthM,
    setShape,
    setCleaningType,
    setLengthM,
    setWidthM,
    setDepthM,
  } = usePoolConfiguratorStore();

  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5 shadow-sm">
      <div>
        <label htmlFor="shape" className="block text-sm font-semibold text-foreground mb-2">
          {t.configurator.shape}
        </label>
        <select
          id="shape"
          value={shape}
          onChange={(e) => setShape(e.target.value as typeof shape)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
        >
          <option value="rectangular">{t.configurator.rectangular}</option>
          <option value="ovalada">{t.configurator.oval}</option>
          <option value="rinon">{t.configurator.kidney}</option>
        </select>
      </div>

      <div>
        <label htmlFor="cleaningType" className="block text-sm font-semibold text-foreground mb-2">
          {t.configurator.cleaningType}
        </label>
        <select
          id="cleaningType"
          value={cleaningType}
          onChange={(e) => setCleaningType(e.target.value as typeof cleaningType)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
        >
          <option value="semanal">{t.configurator.weekly}</option>
          <option value="puntual">{t.configurator.oneTime}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="lengthM" className="block text-sm font-semibold text-foreground mb-2">
            {t.configurator.length}
          </label>
          <input
            id="lengthM"
            type="number"
            min={3}
            max={25}
            step={0.1}
            value={lengthM}
            onChange={(e) => setLengthM(Number(e.target.value))}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>

        <div>
          <label htmlFor="widthM" className="block text-sm font-semibold text-foreground mb-2">
            {t.configurator.width}
          </label>
          <input
            id="widthM"
            type="number"
            min={2}
            max={15}
            step={0.1}
            value={widthM}
            onChange={(e) => setWidthM(Number(e.target.value))}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>

        <div>
          <label htmlFor="depthM" className="block text-sm font-semibold text-foreground mb-2">
            {t.configurator.depth}
          </label>
          <input
            id="depthM"
            type="number"
            min={0.8}
            max={4}
            step={0.1}
            value={depthM}
            onChange={(e) => setDepthM(Number(e.target.value))}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>
      </div>
    </div>
  );
}
