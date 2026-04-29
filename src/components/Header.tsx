import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import { trackCtaClick, trackLanguageSelect } from "@/lib/gtm";
import brandLogo from "@/assets/supreme-mark.png";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale, setLocale } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = scrolled
    ? "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    : "text-sm font-medium text-white/85 hover:text-white transition-colors";

  const navActiveClass = scrolled
    ? "text-sm font-medium text-primary"
    : "text-sm font-semibold text-white underline underline-offset-8 decoration-2 decoration-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-lg transition-colors duration-300 ${
        scrolled ? "bg-[#ecf9fc] border-border/60" : "bg-[#ecf9fc]/35 border-white/20"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={brandLogo}
            alt="Supreme Pool Spa Services"
            className="h-10 w-16 rounded-md object-cover bg-background"
            loading="eager"
            width={64}
            height={40}
          />
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-[#fff]"
            }`}
          >
            Supreme Pool Spa Services
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLinkClass} activeProps={{ className: navActiveClass }}>
            {t.header.home}
          </Link>
          {/* Configurador oculto del menú (ruta /configurador sigue disponible)
          <Link to="/configurador" className={navLinkClass} activeProps={{ className: navActiveClass }}>
            {t.header.configurator}
          </Link>
          */}
          <Link to="/services" className={navLinkClass} activeProps={{ className: navActiveClass }}>
            {t.header.services}
          </Link>
          <Link to="/about" className={navLinkClass} activeProps={{ className: navActiveClass }}>
            {t.header.about}
          </Link>
          <Link to="/contact" className={navLinkClass} activeProps={{ className: navActiveClass }}>
            {t.header.contact}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="inline-flex rounded-md border border-border bg-background p-1 text-xs">
            <button
              type="button"
              onClick={() => {
                trackLanguageSelect("es");
                setLocale("es");
              }}
              className={`px-2 py-1 rounded ${locale === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              aria-label={`${t.header.switchLanguage}: Español`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => {
                trackLanguageSelect("en");
                setLocale("en");
              }}
              className={`px-2 py-1 rounded ${locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              aria-label={`${t.header.switchLanguage}: English`}
            >
              EN
            </button>
          </div>
          <Button asChild variant="default" size="lg">
            <Link
              to="/contact"
              onClick={() =>
                trackCtaClick({ placement: "header_desktop", target: "contact_page", link_url: "/contact" })
              }
            >
              {t.header.freeQuote}
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-2 space-y-3">
          <Link to="/" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>{t.header.home}</Link>
          {/* Configurador oculto del menú móvil (ruta /configurador sigue disponible)
          <Link to="/configurador" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>{t.header.configurator}</Link>
          */}
          <Link to="/services" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>{t.header.services}</Link>
          <Link to="/about" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>{t.header.about}</Link>
          <Link to="/contact" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>{t.header.contact}</Link>
          <div className="flex gap-2 py-1">
            <button
              type="button"
              onClick={() => {
                trackLanguageSelect("es");
                setLocale("es");
              }}
              className={`px-2 py-1 rounded border text-xs ${locale === "es" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"}`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => {
                trackLanguageSelect("en");
                setLocale("en");
              }}
              className={`px-2 py-1 rounded border text-xs ${locale === "en" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"}`}
            >
              EN
            </button>
          </div>
          <Button asChild variant="default" className="w-full">
            <Link
              to="/contact"
              onClick={() => {
                trackCtaClick({ placement: "header_mobile", target: "contact_page", link_url: "/contact" });
                setMobileOpen(false);
              }}
            >
              {t.header.freeQuote}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
