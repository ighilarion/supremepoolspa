import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-cvZvdqP8.js";
import { u as useI18n, B as Button } from "./router-BgqfygMi.js";
import { p as poolCleaning } from "./pool-cleaning-HNqIgGP9.js";
import { p as poolWater } from "./pool-water-DRoMYJhh.js";
import { p as poolNight } from "./pool-night-CGUCrl5Z.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const tx = (isEs, es, en) => isEs ? es : en;
const servicesList = [{
  en: "Pool cleaning & weekly maintenance",
  es: "Limpieza y mantenimiento semanal",
  enDesc: "Weekly visits to keep your water crystal clear and equipment running smoothly.",
  esDesc: "Visitas semanales para mantener el agua cristalina y el equipo funcionando al 100%.",
  image: poolCleaning
}, {
  en: "Equipment repair (pumps, filters)",
  es: "Reparación de bombas y filtros",
  enDesc: "Fast diagnosis and repair for pumps, filters, and circulation systems.",
  esDesc: "Diagnóstico y reparación rápida de bombas, filtros y sistemas de circulación.",
  image: poolNight
}, {
  en: "Water chemical balancing",
  es: "Tratamiento químico del agua",
  enDesc: "Accurate chemical balancing for safer water and better long-term pool health.",
  esDesc: "Balance químico preciso para un agua más segura y una piscina más saludable.",
  image: poolWater
}];
const reviews = [{
  en: "My pool has never looked better. Fast and professional.",
  es: "Mi piscina nunca ha estado mejor. Servicio rápido y profesional.",
  name: "Carlos M.",
  stars: 5
}, {
  en: "They fixed everything in less than 24 hours!",
  es: "¡Arreglaron todo en menos de 24 horas!",
  name: "Sarah L.",
  stars: 5
}, {
  en: "Excellent service. My pool is crystal clear now.",
  es: "Excelente servicio. Mi piscina está cristalina.",
  name: "David R.",
  stars: 5
}];
const whyUs = [{
  icon: "⚡",
  en: "Same or next-day service",
  es: "Servicio el mismo día o siguiente"
}, {
  icon: "📍",
  en: "Local Miami experts",
  es: "Expertos locales en Miami"
}, {
  icon: "💰",
  en: "Transparent pricing",
  es: "Precios claros"
}, {
  icon: "🤝",
  en: "Personalized service",
  es: "Atención personalizada"
}];
const areas = ["Miami Beach", "Coral Gables", "Kendall", "Doral", "Brickell", "Homestead", "Hialeah", "Aventura"];
function Index() {
  const {
    locale
  } = useI18n();
  const isEs = locale === "es";
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    service: ""
  });
  const [formSubmitted, setFormSubmitted] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setFormSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, className: "absolute inset-0 w-full h-full object-cover", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/hero-video.mp4", type: "video/mp4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-gradient absolute inset-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-semibold uppercase tracking-widest rounded-full px-5 py-2 mb-6 border border-primary-foreground/20", children: isEs ? "Servicio #1 en Miami" : "Miami's #1 Pool Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight", children: isEs ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Convierte tu piscina en un ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pool-light", children: "oasis perfecto" }),
          " en Miami"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Turn your pool into a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pool-light", children: "perfect oasis" }),
          " in Miami"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg md:text-2xl text-primary-foreground/90 font-medium max-w-3xl mx-auto leading-relaxed", children: isEs ? "Limpieza, mantenimiento y reparación profesional — sin preocupaciones." : "Professional cleaning, maintenance & repair — without the stress." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto", children: isEs ? "Técnicos certificados • Respuesta en 24h • Presupuesto gratis" : "Certified techs • 24h response • Free estimates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "coral", size: "lg", className: "min-h-[58px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote-form", className: "text-lg px-9 py-4", children: isEs ? "Cotización GRATIS en 24h" : "Get Your FREE Quote in 24h" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "heroOutline", size: "lg", className: "min-h-[58px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+13051234567", className: "text-lg px-9 py-4", children: [
            "📞 ",
            isEs ? "Llamar ahora" : "Call now"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            "✅ ",
            isEs ? "Técnicos certificados" : "Certified technicians"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            "✅ ",
            isEs ? "Servicio rápido en todo Miami" : "Fast service across Miami"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            "✅ ",
            isEs ? "+500 clientes satisfechos" : "+500 happy homeowners"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 1440 120", preserveAspectRatio: "none", className: "w-full h-[80px] md:h-[120px]", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,62 C110,108 235,22 360,58 C485,96 600,26 720,54 C840,86 965,16 1080,50 C1200,82 1320,34 1440,58 L1440,120 L0,120 Z", className: "fill-background" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-foreground tracking-tight", children: tx(isEs, "¿Tu piscina se está convirtiendo en un problema?", "Is Your Pool Becoming a Problem?") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 max-w-3xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: tx(isEs, "Agua sucia, equipos dañados, mantenimiento constante... puede ser frustrante.", "Dirty water, broken equipment, constant maintenance... it can be overwhelming.") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-lg font-semibold leading-relaxed", children: tx(isEs, "Nos encargamos de todo para que vuelvas a disfrutar tu piscina.", "We handle everything so you can relax and enjoy your pool again.") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "default", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote-form", children: tx(isEs, "Agenda tu servicio hoy", "Book Your Service Today") }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/50 py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: tx(isEs, "Servicios de Piscina", "Our Pool Services") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight", children: tx(isEs, "Nuestros servicios de piscina", "Our Pool Services") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: servicesList.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300", children: [
        service.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.image, alt: isEs ? service.es : service.en, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy", width: 800, height: 600 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground leading-tight", children: isEs ? service.es : service.en }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: isEs ? service.esDesc : service.enDesc })
        ] })
      ] }, service.en)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "default", size: "lg", className: "min-h-[58px] px-10 text-lg rounded-sm shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote-form", className: "px-2 py-1", children: tx(isEs, "Solicitar presupuesto", "Get a Free Quote") }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-foreground tracking-tight", children: tx(isEs, "Clientes satisfechos en Miami", "Trusted Across Miami") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: reviews.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: Array.from({
          length: review.stars
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-miami-coral", children: "★" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground font-medium leading-relaxed", children: [
          '"',
          isEs ? review.es : review.en,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm font-semibold text-primary", children: [
          "— ",
          review.name
        ] })
      ] }, review.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-pool-dark py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-white tracking-tight", children: "Why Choose Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: whyUs.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl block mb-4", children: item.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: item.en }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-white/60 text-sm italic", children: item.es })
      ] }, item.en)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-foreground tracking-tight", children: tx(isEs, "Servicio de piscinas en Miami y alrededores", "Pool Services in Miami & Surroundings") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg max-w-2xl mx-auto", children: tx(isEs, "Trabajamos en Miami Beach, Coral Gables, Kendall y zonas cercanas.", "We serve Miami Beach, Coral Gables, Kendall and nearby areas.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: areas.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-secondary text-secondary-foreground rounded-full px-5 py-2 text-sm font-medium border border-border", children: [
        "📍 ",
        area
      ] }, area)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-miami-sand py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-miami-coral text-white rounded-full px-4 py-1 text-sm font-bold mb-6", children: tx(isEs, "GRATIS", "FREE") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-foreground tracking-tight", children: tx(isEs, "Obtén tu diagnóstico GRATIS hoy", "Get a FREE Pool Inspection Today") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg", children: tx(isEs, "Sin compromiso. Te decimos exactamente qué necesita tu piscina.", "No commitment. We'll tell you exactly what your pool needs.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "coral", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote-form", children: tx(isEs, "Solicitar ahora", "Claim Your Free Quote") }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pool-dark mx-auto max-w-6xl rounded-3xl p-12 md:p-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-white tracking-tight", children: tx(isEs, "Deja de preocuparte por tu piscina", "Stop Worrying About Your Pool") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xl text-pool-light font-medium", children: tx(isEs, "Nosotros la cuidamos por ti", "We take care of it for you") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/70 text-lg max-w-xl mx-auto", children: tx(isEs, "Déjalo en manos de profesionales y vuelve a disfrutarla.", "Let professionals handle it and enjoy it again.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote-form", className: "text-lg px-10 py-4", children: tx(isEs, "Solicita tu presupuesto GRATIS ahora", "Request Your FREE Quote Now") }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "quote-form", className: "bg-secondary/50 py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-foreground tracking-tight", children: tx(isEs, "Obtén tu presupuesto gratis", "Get Your Free Quote") }) }),
      formSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-10 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl block mb-4", children: "✅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: tx(isEs, "¡Gracias!", "Thank you!") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: tx(isEs, "Te contactaremos en menos de 24 horas.", "We'll contact you within 24 hours.") })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "bg-card rounded-2xl border border-border p-8 md:p-10 shadow-lg space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-semibold text-foreground mb-2", children: tx(isEs, "Nombre", "Name") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", type: "text", required: true, maxLength: 100, value: formData.name, onChange: (e) => setFormData({
            ...formData,
            name: e.target.value
          }), className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "John Doe" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-semibold text-foreground mb-2", children: tx(isEs, "Teléfono", "Phone") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", type: "tel", required: true, maxLength: 20, value: formData.phone, onChange: (e) => setFormData({
            ...formData,
            phone: e.target.value
          }), className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "(305) 555-1234" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "block text-sm font-semibold text-foreground mb-2", children: tx(isEs, "Servicio que necesitas", "Service Needed") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "service", value: formData.service, onChange: (e) => setFormData({
            ...formData,
            service: e.target.value
          }), className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: tx(isEs, "Seleccionar", "Select") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cleaning", children: tx(isEs, "Limpieza de piscina", "Pool Cleaning") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "maintenance", children: tx(isEs, "Mantenimiento semanal", "Weekly Maintenance") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "repair", children: tx(isEs, "Reparación de equipos", "Equipment Repair") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "chemical", children: tx(isEs, "Balance químico", "Chemical Balancing") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "inspection", children: tx(isEs, "Inspección", "Pool Inspection") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: tx(isEs, "Otro", "Other") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "coral", size: "lg", className: "w-full", children: tx(isEs, "Enviar", "Submit") })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
