import Image from "next/image";
import Link from "next/link";
import type { SocialLink } from "@/types";
import {
  contactLinks,
  footerNavLinks,
  legalLinks,
  socialLinks,
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
        {links?.map((link) => (
          <Link key={link.label} href={link.href} className={linkClass}>
            {link.label}
          </Link>
        ))}
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
          <p className="m-0 mb-3.5 max-w-[340px] text-pretty text-[0.91rem]/[1.65] font-light text-steel-2">
            {siteConfig.shortDescription}
          </p>
          <div className="flex gap-[18px]">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-[13px]/none font-normal text-steel-2 transition-colors duration-200 hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Navegação" links={footerNavLinks} />

        <FooterColumn title="Contato" links={contactLinks}>
          <span className="text-[0.92rem]/[1.5] font-normal text-steel-2">
            {siteConfig.contact.location}
          </span>
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
