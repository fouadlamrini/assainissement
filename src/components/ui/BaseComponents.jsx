/**
 * src/components/ui/BaseComponents.jsx
 * 
 * Composants atomiques premium hautement réutilisables, accessibles et responsifs.
 * Centralise les boutons d'action (CTA), conteneurs et titres de sections.
 */

import React from "react";
import { Phone, MessageSquare, ArrowRight, Check } from "lucide-react";
import { cn } from "../../utils/cn";
import { companyConfig } from "../../data/siteData";

/**
 * Conteneur de page standardisé pour aligner les grilles de contenu
 */
export const Container = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} 
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Section structurelle sémantique avec espacements premium (Large spacing)
 */
export const Section = ({ children, className, id, ...props }) => {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-28 overflow-hidden bg-white text-slate-900 scroll-mt-20", className)} 
      {...props}
    >
      {children}
    </section>
  );
};

/**
 * Titre de section standardisé avec sur-titre de style agence et hiérarchie sémantique H2
 */
export const SectionTitle = ({ title, subtitle, centered = true, className, ...props }) => {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)} {...props}>
      {subtitle && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#14a992] bg-[#14a992]/10 px-3 py-1.5 rounded-full mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto">
        {title}
      </h2>
      <div className={cn("h-1 w-16 bg-[#14a992] mt-4 rounded-full", centered && "mx-auto")} />
    </div>
  );
};

/**
 * Bouton polymorphe premium (Style Luxe, Micro-interactions)
 */
export const Button = React.forwardRef(({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  as: Component = "button", 
  ...props 
}, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#14a992] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        {
          // Styles de variantes luxe
          "bg-[#14a992] text-white shadow-lg shadow-[#14a992]/20 hover:bg-[#118f7c] hover:shadow-xl hover:shadow-[#14a992]/30 hover:-translate-y-0.5": variant === "primary",
          "bg-slate-950 text-white shadow-lg shadow-slate-950/20 hover:bg-slate-900 hover:shadow-xl hover:-translate-y-0.5": variant === "dark",
          "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5": variant === "emerald",
          "bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5": variant === "outline",
          "text-[#14a992] hover:text-[#118f7c] bg-[#14a992]/10 hover:bg-[#14a992]/20 px-4": variant === "ghost",
        },
        {
          // Tailles
          "px-4 py-2.5 text-sm": size === "sm",
          "px-6 py-3.5 text-base": size === "md",
          "px-8 py-4 text-lg text-md": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});
Button.displayName = "Button";

/**
 * Badge d'état premium ou tag d'urgence
 */
export const Badge = ({ children, className, variant = "info" }) => {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider",
      {
        "bg-red-50 text-red-700 border border-red-100": variant === "danger",
        "bg-emerald-50 text-emerald-700 border border-emerald-100": variant === "success",
        "bg-[#14a992]/10 text-[#14a992] border border-[#14a992]/20": variant === "info",
        "bg-amber-50 text-amber-700 border border-amber-100": variant === "warning",
      },
      className
    )}>
      {children}
    </span>
  );
};

/**
 * Bouton d'appel direct standardisé pour la conversion
 */
export const PhoneButton = ({ className, size = "md", variant = "primary" }) => {
  return (
    <Button
      as="a"
      href={`tel:${companyConfig.phone}`}
      variant={variant}
      size={size}
      className={cn("gap-2.5", className)}
      aria-label={`Appeler notre service d'urgence au ${companyConfig.phoneFormatted}`}
    >
      <Phone className="w-5 h-5 animate-pulse" />
      <span>{companyConfig.phoneFormatted}</span>
    </Button>
  );
};

/**
 * Bouton WhatsApp direct avec message pré-rempli
 */
export const WhatsAppButton = ({ className, size = "md" }) => {
  const encodedMessage = encodeURIComponent(companyConfig.whatsappMessage);

  return (
    <Button
      as="a"
      href={`https://wa.me/${companyConfig.whatsapp.replace("+", "")}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      variant="emerald"
      size={size}
      className={cn("gap-2.5", className)}
      aria-label="Contacter un technicien d'assainissement sur WhatsApp"
    >
      <img
        src="/assets/whatsapp.jpg"
        alt="WhatsApp"
        className="w-8 h-8 rounded-full object-cover"
      />
      <span>WhatsApp Rapide</span>
    </Button>
  );
};

/**
 * Boîtier d'icône décoratif élégant
 */
export const IconBox = ({ icon: Icon, className, variant = "blue" }) => {
  return (
    <div className={cn(
      "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm",
      {
        "bg-[#14a992]/10 text-[#14a992] group-hover:bg-[#14a992] group-hover:text-white": variant === "blue" || variant === "emerald",
        "bg-slate-900 text-amber-400": variant === "dark",
      },
      className
    )}>
      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
    </div>
  );
};

/**
 * Carte de contenu premium avec ombre douce et effet de bordure subtile
 */
export const Card = ({ children, className, hoverEffect = true, ...props }) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm transition-all duration-300",
        hoverEffect && "hover:shadow-md hover:border-slate-200/80 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};