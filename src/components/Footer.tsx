import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { CONTACT_PHONE_DISPLAY, CONTACT_TEL_HREF } from "@/lib/contact";
import { trackCtaClick } from "@/lib/gtm";
import brandLogo from "@/assets/supreme-mark.png";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={brandLogo}
                alt="Supreme Pool Spa Services"
                className="h-10 w-16 rounded-md object-cover border border-background/20 bg-background"
                loading="lazy"
                width={64}
                height={40}
              />
              <span className="text-xl font-bold tracking-tight">Supreme Pool Spa Services</span>
            </div>

            <p className="text-background/60 text-sm max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.navigation}</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm text-background/60 hover:text-background transition-colors">{t.header.home}</Link>
              {/* Configurador oculto del pie (ruta /configurador sigue disponible)
              <Link to="/configurador" className="block text-sm text-background/60 hover:text-background transition-colors">{t.header.configurator}</Link>
              */}
              <Link to="/services" className="block text-sm text-background/60 hover:text-background transition-colors">{t.header.services}</Link>
              <Link to="/about" className="block text-sm text-background/60 hover:text-background transition-colors">{t.header.about}</Link>
              <Link to="/contact" className="block text-sm text-background/60 hover:text-background transition-colors">{t.header.contact}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.contact}</h4>
            <div className="space-y-3 text-sm text-background/60">
              <p>📍 Miami, FL</p>
              <p>
                📞{" "}
                <a
                  href={CONTACT_TEL_HREF}
                  onClick={() =>
                    trackCtaClick({
                      placement: "footer",
                      target: "tel",
                      link_url: CONTACT_TEL_HREF,
                    })
                  }
                  className="text-background/80 hover:text-background underline-offset-2 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Supreme Pool Spa Services. {t.footer.rights}
        </div>

      </div>
    </footer>
  );
}
