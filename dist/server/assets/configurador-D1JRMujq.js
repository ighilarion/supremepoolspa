import { S as React, T as jsxRuntimeExports, r as reactExports } from "./worker-entry-cvZvdqP8.js";
import { u as useI18n } from "./router-BgqfygMi.js";
import { p as poolCleaning } from "./pool-cleaning-HNqIgGP9.js";
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    React.useCallback(() => selector(api.getState()), [api, selector]),
    React.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = ((createState) => createState ? createImpl(createState) : createImpl);
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
const usePoolConfiguratorStore = create((set) => ({
  shape: "rectangular",
  cleaningType: "semanal",
  lengthM: 10,
  widthM: 5,
  depthM: 1.8,
  setShape: (shape) => set({ shape }),
  setCleaningType: (cleaningType) => set({ cleaningType }),
  setLengthM: (lengthM) => set({ lengthM: clamp(lengthM, 3, 25) }),
  setWidthM: (widthM) => set({ widthM: clamp(widthM, 2, 15) }),
  setDepthM: (depthM) => set({ depthM: clamp(depthM, 0.8, 4) })
}));
function ConfiguratorForm() {
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
    setDepthM
  } = usePoolConfiguratorStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "shape", className: "block text-sm font-semibold text-foreground mb-2", children: t.configurator.shape }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "shape",
          value: shape,
          onChange: (e) => setShape(e.target.value),
          className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rectangular", children: t.configurator.rectangular }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ovalada", children: t.configurator.oval }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rinon", children: t.configurator.kidney })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "cleaningType", className: "block text-sm font-semibold text-foreground mb-2", children: t.configurator.cleaningType }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "cleaningType",
          value: cleaningType,
          onChange: (e) => setCleaningType(e.target.value),
          className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "semanal", children: t.configurator.weekly }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "puntual", children: t.configurator.oneTime })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "lengthM", className: "block text-sm font-semibold text-foreground mb-2", children: t.configurator.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "lengthM",
            type: "number",
            min: 3,
            max: 25,
            step: 0.1,
            value: lengthM,
            onChange: (e) => setLengthM(Number(e.target.value)),
            className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "widthM", className: "block text-sm font-semibold text-foreground mb-2", children: t.configurator.width }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "widthM",
            type: "number",
            min: 2,
            max: 15,
            step: 0.1,
            value: widthM,
            onChange: (e) => setWidthM(Number(e.target.value)),
            className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "depthM", className: "block text-sm font-semibold text-foreground mb-2", children: t.configurator.depth }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "depthM",
            type: "number",
            min: 0.8,
            max: 4,
            step: 0.1,
            value: depthM,
            onChange: (e) => setDepthM(Number(e.target.value)),
            className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
          }
        )
      ] })
    ] })
  ] });
}
const PRICING_RANGES = [
  { maxAreaM2: 25, weeklyPrice: 140, oneTimePrice: 220 },
  { maxAreaM2: 45, weeklyPrice: 190, oneTimePrice: 320 },
  { maxAreaM2: 70, weeklyPrice: 250, oneTimePrice: 420 },
  { maxAreaM2: Number.POSITIVE_INFINITY, weeklyPrice: 320, oneTimePrice: 560 }
];
const SHAPE_AREA_FACTOR = {
  rectangular: 1,
  ovalada: Math.PI / 4,
  rinon: 0.78
};
function roundTo2(value) {
  return Math.round(value * 100) / 100;
}
function calculatePoolQuote(input) {
  const shapeFactor = SHAPE_AREA_FACTOR[input.shape];
  const areaM2 = roundTo2(input.lengthM * input.widthM * shapeFactor);
  const volumeM3 = roundTo2(areaM2 * input.depthM);
  const matchedRange = PRICING_RANGES.find((range) => areaM2 <= range.maxAreaM2) ?? PRICING_RANGES[PRICING_RANGES.length - 1];
  const estimatedPrice = input.cleaningType === "semanal" ? matchedRange.weeklyPrice : matchedRange.oneTimePrice;
  const previousRange = PRICING_RANGES[PRICING_RANGES.indexOf(matchedRange) - 1];
  const min = previousRange ? previousRange.maxAreaM2 : 0;
  const max = matchedRange.maxAreaM2 === Number.POSITIVE_INFINITY ? "más de 70" : `${min === 0 ? "0" : min}-${matchedRange.maxAreaM2}`;
  return {
    areaM2,
    volumeM3,
    estimatedPrice,
    rangeLabel: `${max} m²`
  };
}
function PriceSummary() {
  const { t } = useI18n();
  const { shape, cleaningType, lengthM, widthM, depthM } = usePoolConfiguratorStore();
  const quote = calculatePoolQuote({ shape, cleaningType, lengthM, widthM, depthM });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-wider text-primary-foreground/70", children: t.configurator.estimateByRange }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl md:text-5xl font-bold mt-2", children: [
      "$",
      quote.estimatedPrice
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-primary-foreground/80", children: cleaningType === "semanal" ? t.configurator.weekly : t.configurator.oneTime }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary-foreground/10 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70", children: t.configurator.area }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-base", children: [
          quote.areaM2,
          " m²"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary-foreground/10 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70", children: t.configurator.volume }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-base", children: [
          quote.volumeM3,
          " m³"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary-foreground/10 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70", children: t.configurator.range }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-base", children: quote.rangeLabel })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-primary-foreground/75", children: t.configurator.estimateNote })
  ] });
}
const PoolCanvas3D = reactExports.lazy(() => import("./PoolCanvas3D-Bo5AeVdO.js").then((module) => ({
  default: module.PoolCanvas3D
})));
function ConfiguradorPage() {
  const {
    t,
    locale
  } = useI18n();
  const isEs = locale === "es";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: poolCleaning, alt: "", className: "absolute inset-0 w-full h-full object-cover", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-pool-dark/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-pool-light text-sm font-semibold uppercase tracking-widest mb-4", children: isEs ? "🎨 Diseña tu piscina" : "🎨 Design your pool" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-extrabold text-white tracking-tight", children: isEs ? "Configurador 3D de piscinas" : "3D Pool Configurator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-white/70 max-w-2xl mx-auto", children: isEs ? "Ajusta las dimensiones, visualiza en 3D y obtén un presupuesto estimado al instante." : "Adjust dimensions, visualize in 3D and get an instant estimated quote." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 1440 60", preserveAspectRatio: "none", className: "w-full h-[40px]", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z", className: "fill-background" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConfiguratorForm, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PriceSummary, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[420px] rounded-2xl border border-border bg-secondary/50 animate-pulse" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PoolCanvas3D, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: t.configurator.hint })
      ] })
    ] }) })
  ] });
}
const configurador = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: ConfiguradorPage
}, Symbol.toStringTag, { value: "Module" }));
export {
  configurador as a,
  createStore as c,
  usePoolConfiguratorStore as u
};
