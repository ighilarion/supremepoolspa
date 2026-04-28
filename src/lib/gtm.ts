/**
 * Google Tag Manager — pushes to `dataLayer` for triggers in GTM (GA4, Ads, etc.).
 *
 * En GTM: crea un disparador «Evento personalizado» con el nombre del `event`
 * (p. ej. `generate_lead`, `cta_click`, `spa_page_view`) y asocia etiquetas GA4.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushGtmDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

/** Evento GA4 recomendado al enviar el formulario de lead con éxito. */
export function trackGenerateLead(formVariant: "home" | "contact") {
  pushGtmDataLayer({
    event: "generate_lead",
    lead_source: formVariant === "home" ? "home_quote_form" : "contact_page_form",
  });
}

/** Cambio de idioma (ES/EN). */
export function trackLanguageSelect(locale: "es" | "en") {
  pushGtmDataLayer({
    event: "language_select",
    locale,
  });
}

/**
 * Clics en CTAs (tel, WhatsApp, ir a presupuesto, contacto).
 * `placement`: dónde está el botón; `target`: qué acción es.
 */
export function trackCtaClick(params: {
  placement: string;
  target: "tel" | "whatsapp" | "quote_anchor" | "contact_page";
  /** Ruta o URL del enlace, útil en GTM */
  link_url?: string;
}) {
  pushGtmDataLayer({
    event: "cta_click",
    ...params,
  });
}

/** Vista de página en navegación cliente (SPA); usa `href` de la app router. */
export function trackSpaPageView(pagePath: string, pageTitle: string) {
  pushGtmDataLayer({
    event: "spa_page_view",
    page_path: pagePath,
    page_title: pageTitle,
  });
}
