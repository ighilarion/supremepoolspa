import { T as jsxRuntimeExports } from "./worker-entry-cvZvdqP8.js";
import { u as useI18n, B as Button, L as Link } from "./router-BgqfygMi.js";
import { p as poolNight } from "./pool-night-CGUCrl5Z.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const heroImage = "/assets/hero-pool-Bb2oOp4m.jpg";
function AboutPage() {
  const {
    t,
    locale
  } = useI18n();
  const isEs = locale === "es";
  const values = [{
    icon: "⭐",
    title: isEs ? "Excelencia" : "Excellence",
    description: isEs ? "Cada piscina recibe atención premium, sin importar su tamaño." : "Every pool gets premium care regardless of size."
  }, {
    icon: "🤝",
    title: isEs ? "Confianza" : "Trust",
    description: isEs ? "Construimos relaciones a largo plazo con nuestros clientes." : "We build long-term relationships with our clients."
  }, {
    icon: "🌱",
    title: isEs ? "Sostenibilidad" : "Sustainability",
    description: isEs ? "Usamos productos eco-friendly siempre que es posible." : "We use eco-friendly products whenever possible."
  }, {
    icon: "⚡",
    title: isEs ? "Rapidez" : "Speed",
    description: isEs ? "Respuesta rápida y servicio puntual, siempre." : "Fast response and always on-time service."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: poolNight, alt: "", className: "absolute inset-0 w-full h-full object-cover", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-pool-dark/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-pool-light text-sm font-semibold uppercase tracking-widest mb-4", children: isEs ? "Nuestra historia" : "Our story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-extrabold text-white tracking-tight", children: isEs ? "Cuidamos piscinas en Miami con pasión y confianza" : "Pool care in Miami with passion and trust" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-white/70 max-w-2xl mx-auto", children: isEs ? "Pasión, profesionalismo y compromiso con cada cliente." : "Passion, professionalism and commitment to every client." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 1440 60", preserveAspectRatio: "none", className: "w-full h-[40px]", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z", className: "fill-background" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: t.about.badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight", children: [
          t.about.title1,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: t.about.title2 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg leading-relaxed", children: t.about.p1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: t.about.p2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "default", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: t.about.cta }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: isEs ? "Piscina de lujo en Miami" : "Luxury pool in Miami", className: "w-full h-[500px] object-cover", loading: "lazy", width: 1920, height: 1080 }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground tracking-tight", children: t.about.values }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-8 border border-border text-center shadow-sm hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: v.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold text-foreground", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.description })
      ] }, v.title)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
