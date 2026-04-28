import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { trackSpaPageView } from "@/lib/gtm";

/** Envía `spa_page_view` al dataLayer en cada cambio de ruta (cliente). */
export function GtmPageViewTracker() {
  const href = useRouterState({ select: (s) => s.location.href });

  useEffect(() => {
    trackSpaPageView(href, typeof document !== "undefined" ? document.title : "");
  }, [href]);

  return null;
}
