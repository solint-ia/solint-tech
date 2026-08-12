import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { SocialLink } from "@/types";
import {
  EmailIcon,
  InstagramIcon,
  LinkedinIcon,
  SocialLinksBar,
  WhatsAppIcon,
} from "@/components/ui";
import {
  footerNavLinks,
  legalLinks,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";

const linkClass =
  "text-[0.92rem]/[1.4] font-normal text-nav-2 transition-colors duration-200 hover:text-white break-words";

function FooterColumn({
  title,
  links,
  children,
}: {
  title: string;
  links?: readonly SocialLink[];
  children?: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <span className="mb-4 block text-xs/none font-medium tracking-[0.14em] text-faint uppercase">
        {title}
      </span>
      <div className="flex flex-col gap-3">
        {links?.map((link) => {
          const isExternal = link.href.startsWith("http://") || link.href.startsWith("https://");
          if (isExternal || link.href.startsWith("mailto:")) {
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={linkClass}
              >
                {link.label}
              </a>
            );
          }
          return (
            <Link key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          );
        })}
        {children}
      </div>
    </div>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-1 border-t border-accent/10 bg-[#040912]/70">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 px-6 pt-[clamp(40px,5vw,64px)]">
        <div className="sm:col-span-2 lg:col-span-2 min-w-0">
          <Image
            src={siteConfig.logoFooter.src}
            alt={siteConfig.name}
            width={siteConfig.logoFooter.width}
            height={siteConfig.logoFooter.height}
            className="mb-3 block h-[64px] sm:h-[72px] lg:h-[76px] w-auto brightness-110 -ml-1"
          />
          <p className="m-0 mb-4 max-w-[340px] text-pretty text-[0.91rem]/[1.65] font-light text-steel-2">
            {siteConfig.shortDescription}
          </p>

          {/* Símbolos oficiais das redes e canais com a paleta Solint */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px]/none font-semibold tracking-[0.14em] text-accent/80 uppercase">
              Canais Oficiais
            </span>
            <SocialLinksBar size="md" />
          </div>
        </div>

        <FooterColumn title="Navegação" links={footerNavLinks} />

        <FooterColumn title="Contato">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-[0.92rem]/[1.4] text-nav-2 transition-colors hover:text-white"
          >
            <span className="flex size-7 items-center justify-center rounded-lg border border-accent/20 bg-panel-2/80 text-accent transition-all group-hover:border-accent/45 group-hover:bg-accent group-hover:text-ink">
              <WhatsAppIcon size={14} />
            </span>
            <span>{siteConfig.contact.phone}</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group flex items-center gap-2.5 text-[0.92rem]/[1.4] text-nav-2 transition-colors hover:text-white"
          >
            <span className="flex size-7 items-center justify-center rounded-lg border border-accent/20 bg-panel-2/80 text-accent transition-all group-hover:border-accent/45 group-hover:bg-accent group-hover:text-ink">
              <EmailIcon size={14} />
            </span>
            <span>{siteConfig.contact.email}</span>
          </a>

          <a
            href="https://instagram.com/solint.ia"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-[0.92rem]/[1.4] text-nav-2 transition-colors hover:text-white"
          >
            <span className="flex size-7 items-center justify-center rounded-lg border border-accent/20 bg-panel-2/80 text-accent transition-all group-hover:border-accent/45 group-hover:bg-accent group-hover:text-ink">
              <InstagramIcon size={14} />
            </span>
            <span>@solint.ia</span>
          </a>

          <a
            href="https://www.linkedin.com/company/solint-ia"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-[0.92rem]/[1.4] text-nav-2 transition-colors hover:text-white"
          >
            <span className="flex size-7 items-center justify-center rounded-lg border border-accent/20 bg-panel-2/80 text-accent transition-all group-hover:border-accent/45 group-hover:bg-accent group-hover:text-ink">
              <LinkedinIcon size={14} />
            </span>
            <span>LinkedIn Solint</span>
          </a>

          <div className="flex items-start gap-2.5 text-[0.88rem]/[1.5] text-steel-2 pt-1">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-panel-2/80 text-accent mt-0.5">
              <MapPin size={14} />
            </span>
            <span className="break-words">
              Rua Bosco Scaffs, 95, Bairro Inácio Barbosa, Aracaju – SE (CEP 49041-060)
            </span>
          </div>
        </FooterColumn>
      </div>

      <div className="mx-auto mt-[clamp(28px,3.8vw,44px)] flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6.5 gap-y-3 border-t border-accent/8 px-6 pt-6 pb-7">
        <span className="text-[12.5px]/[1.4] font-normal text-faint">
          © {currentYear} {siteConfig.name}. Todos os direitos reservados.
        </span>
        <div className="flex flex-wrap gap-6.5">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12.5px]/[1.4] font-normal text-faint transition-colors duration-200 hover:text-nav-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
