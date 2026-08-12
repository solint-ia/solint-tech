import type { SVGProps } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/** Ícone oficial do WhatsApp */
export function WhatsAppIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.952 1.178-.176.2-.352.226-.653.075-.3-.15-1.268-.468-2.416-1.492-.894-.798-1.497-1.784-1.673-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.633-.928-2.237-.245-.588-.493-.509-.677-.518-.176-.009-.376-.01-.577-.01-.2 0-.527.075-.802.375-.276.3-1.054 1.03-1.054 2.513 0 1.482 1.08 2.914 1.23 3.115.15.2 2.124 3.243 5.147 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.9.12.581-.088 1.78-.727 2.03-1.43.25-.702.25-1.303.176-1.428-.076-.126-.276-.201-.577-.351zM12.04 2c-5.464 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2z" />
    </svg>
  );
}

/** Ícone oficial do Instagram */
export function InstagramIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/** Ícone oficial do LinkedIn */
export function LinkedinIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/** Ícone de Email / Mensagem */
export function EmailIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export interface SocialChannelItem {
  key: "whatsapp" | "instagram" | "email" | "linkedin";
  label: string;
  href: string;
  handle?: string;
  icon: React.ComponentType<IconProps>;
  highlightColor?: string;
}

export const socialChannelsList: readonly SocialChannelItem[] = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    handle: "+55 79 9680-9911",
    href: siteConfig.contact.whatsappUrl,
    icon: WhatsAppIcon,
    highlightColor: "#35D9FF",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@solint.ia",
    href: "https://instagram.com/solint.ia",
    icon: InstagramIcon,
    highlightColor: "#5FB6FF",
  },
  {
    key: "email",
    label: "Email",
    handle: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: EmailIcon,
    highlightColor: "#8AE3FF",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "Solint",
    href: "https://www.linkedin.com/company/solint-ia",
    icon: LinkedinIcon,
    highlightColor: "#168CFF",
  },
] as const;

interface SocialLinksBarProps {
  size?: "sm" | "md" | "lg";
  variant?: "buttons" | "pills";
  className?: string;
}

/**
 * Barra com os 4 símbolos oficiais (WhatsApp, Instagram, Email, LinkedIn)
 * estilizados dentro da paleta de cores futurista da Solint.
 */
export function SocialLinksBar({
  size = "md",
  variant = "buttons",
  className,
}: SocialLinksBarProps) {
  const sizeClasses = {
    sm: "size-8.5 rounded-lg text-steel-2 text-[14px]",
    md: "size-10 rounded-xl text-steel-2 text-[16px]",
    lg: "size-12 rounded-2xl text-steel-2 text-[18px]",
  };

  const iconSizes = {
    sm: 16,
    md: 19,
    lg: 22,
  };

  if (variant === "pills") {
    return (
      <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
        {socialChannelsList.map((channel) => {
          const Icon = channel.icon;
          const isExternal = channel.href.startsWith("http");

          return (
            <a
              key={channel.key}
              href={channel.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={`Acessar canal ${channel.label}`}
              className="group inline-flex items-center gap-2 rounded-xl border border-accent/18 bg-panel-2/80 px-3.5 py-2 text-[0.82rem] font-medium text-steel-2 shadow-[0_4px_14px_rgb(2_8_18/0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-accent/12 hover:text-white hover:shadow-[0_0_18px_rgb(53_217_255/0.25)]"
            >
              <span className="flex size-6 items-center justify-center rounded-lg bg-accent/12 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                <Icon size={14} />
              </span>
              <span>{channel.label}</span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {socialChannelsList.map((channel) => {
        const Icon = channel.icon;
        const isExternal = channel.href.startsWith("http");

        return (
          <a
            key={channel.key}
            href={channel.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={`Acessar ${channel.label}`}
            title={channel.label}
            className={cn(
              "group relative flex items-center justify-center border border-accent/18 bg-panel-2/80 shadow-[0_4px_14px_rgb(2_8_18/0.35)] backdrop-blur-md transition-all duration-300",
              "hover:-translate-y-1 hover:border-accent/50 hover:bg-[#0E2038]/90 hover:text-accent hover:shadow-[0_0_20px_rgb(53_217_255/0.35)]",
              sizeClasses[size],
            )}
          >
            <Icon
              size={iconSizes[size]}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        );
      })}
    </div>
  );
}
