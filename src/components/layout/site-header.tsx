"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button, SocialLinksBar } from "@/components/ui";
import { CONTACT_ANCHOR, navLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Distância de scroll a partir da qual o header ganha fundo mais opaco. */
const SCROLL_THRESHOLD = 24;

/** A rota ativa é derivada do pathname — nenhuma página precisa informá-la. */
function isActiveRoute(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navegar entre páginas deve fechar o menu mobile.
  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-60 border-b backdrop-blur-[18px] transition-[background-color,border-color] duration-300",
        isScrolled
          ? "border-accent/18 bg-[#040912]/88"
          : "border-accent/10 bg-ink/55",
      )}
    >
      <div className="mx-auto flex h-[82px] max-w-[1240px] items-center justify-between gap-5 px-6 lg:h-26 lg:gap-14">
        <Link
          href="/"
          aria-label={`${siteConfig.name}, ir para a página inicial`}
          className="flex flex-none items-center overflow-visible"
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.name}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            priority
            className="h-[34px] sm:h-[38px] lg:h-[44px] w-auto origin-left"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-11 lg:flex">
          {navLinks.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);
            return (
              <Link
                key={link.key}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "border-b py-1.5 text-sm/none font-medium tracking-[0.01em] transition-[color,border-color] duration-200",
                  isActive
                    ? "border-accent text-white"
                    : "border-transparent text-nav hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Button
          href={CONTACT_ANCHOR}
          size="sm"
          className="hidden flex-none rounded-[10px] px-5 py-[11px] text-[13.5px]/none font-semibold shadow-[0_6px_22px_rgb(22_140_255/0.28)] hover:shadow-[0_10px_30px_rgb(53_217_255/0.42)] lg:inline-flex"
        >
          Fale com a Solint
        </Button>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex size-[42px] flex-none items-center justify-center rounded-[10px] border border-accent/22 bg-panel/70 text-fg-strong lg:hidden"
        >
          <Menu size={18} aria-hidden="true" />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          "overflow-hidden bg-[#040912]/97 backdrop-blur-[18px] transition-[max-height,opacity] duration-350 ease-out-solint lg:hidden",
          isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-0.5 border-t border-accent/10 px-6 pt-2.5 pb-5.5">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3.5 text-[15px]/[1.3] font-medium text-[#C7D8EE]"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={CONTACT_ANCHOR}
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 w-full rounded-[11px] px-5 py-3.5 text-sm/none font-semibold"
          >
            Fale com a Solint
          </Button>

          {/* Ícones oficiais das redes no drawer mobile */}
          <div className="mt-4 flex flex-col items-center gap-2 border-t border-accent/10 pt-3.5">
            <span className="font-mono text-[10.5px]/none font-semibold tracking-[0.14em] text-accent/70 uppercase">
              Canais Oficiais
            </span>
            <SocialLinksBar size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
}
