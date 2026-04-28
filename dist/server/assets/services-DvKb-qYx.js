import { T as jsxRuntimeExports } from "./worker-entry-cvZvdqP8.js";
import { u as useI18n, B as Button, L as Link } from "./router-BgqfygMi.js";
import { p as poolCleaning } from "./pool-cleaning-HNqIgGP9.js";
import { p as poolWater } from "./pool-water-DRoMYJhh.js";
import { p as poolNight } from "./pool-night-CGUCrl5Z.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ServicesPage() {
  const {
    t,
    locale
  } = useI18n();
  const isEs = locale === "es";
  const allServices = [{
    ...t.services.items[0],
    image: poolCleaning
  }, {
    ...t.services.items[1],
    image: poolWater
  }, {
    ...t.services.items[2],
    image: poolNight
  }, {
    ...t.services.items[3],
    image: poolWater
  }, {
    ...t.services.items[4],
    image: poolCleaning
  }, {
    ...t.services.items[5],
    image: poolNight
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: poolCleaning, alt: "", className: "absolute inset-0 w-full h-full object-cover", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-pool-dark/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-pool-light text-sm font-semibold uppercase tracking-widest mb-4", children: isEs ? "Lo que hacemos" : "What we do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-extrabold text-white tracking-tight", children: isEs ? "Servicios profesionales para tu piscina" : "Professional pool services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-white/70 max-w-2xl mx-auto", children: isEs ? "Desde limpieza semanal hasta reparaciones complejas — nos encargamos de todo" : "From weekly cleaning to complex repairs — we handle everything" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 1440 60", preserveAspectRatio: "none", className: "w-full h-[40px]", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z", className: "fill-background" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: allServices.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.image, alt: service.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy", width: 800, height: 600 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground leading-tight", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm leading-relaxed", children: service.description })
        ] })
      ] }, service.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 bg-pool-dark rounded-3xl p-12 md:p-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: t.services.ctaTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/70 max-w-lg mx-auto", children: t.services.ctaText }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "coral", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: t.services.ctaButton }) }) })
      ] })
    ] })
  ] });
}
export {
  ServicesPage as component
};
