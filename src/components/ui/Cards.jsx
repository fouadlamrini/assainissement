/**
 * src/components/ui/Cards.jsx
 * 
 * Composants de cartes haut de gamme pour l'affichage des services et témoignages.
 * Gère dynamiquement le rendu des icônes de manière optimisée et responsive.
 */

import React from "react";
import { 
  Star, 
  Quote, 
  ArrowRight, 
  Wrench, 
  Droplets, 
  Search, 
  ShieldCheck, 
  Pipette, 
  Truck, 
  Flame, 
  Activity,
  AlertTriangle,
  Building2,
  Sparkles
} from "lucide-react";
import { Card, Badge, IconBox } from "./BaseComponents";
import { cn } from "../../utils/cn";

// Table de correspondance sécurisée pour éviter l'import complet de lucide-react (* as Icons)
const ICON_MAP = {
  Wrench,
  Droplets,
  Search,
  ShieldCheck,
  Pipette,
  Truck,
  Flame,
  Activity,
  AlertTriangle,
  Building2,
  Sparkles,
};

/**
 * Carte de Service orientée conversion
 */
export const ServiceCard = ({ service, className }) => {
  if (!service) return null;

  // Extraction dynamique ou icône par défaut (Wrench)
  const LucideIcon = ICON_MAP[service.icon] || Wrench;

  return (
    <Card className={cn("group flex flex-col justify-between h-full border border-slate-100 hover:border-[#14a992]/30 transition-all duration-300", className)}>
      <div>
        <div className="flex items-start justify-between mb-6">
          <IconBox icon={LucideIcon} variant="emerald" />
          {service.badge && (
            <Badge variant={service.id === "debouchage" || service.isUrgent ? "danger" : "info"}>
              {service.badge}
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-[#14a992] transition-colors duration-200">
          {service.title}
        </h3>

        {service.priceFrom && (
          <p className="text-sm font-medium text-[#14a992] mb-3">
            À partir de <span className="text-lg font-bold">{service.priceFrom}</span>
          </p>
        )}

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription || service.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
        <a 
          href={`#contact-${service.id || "service"}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 group-hover:text-[#14a992] tracking-wider uppercase transition-colors duration-200"
          aria-label={`En savoir plus sur le service ${service.title}`}
        >
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#14a992]" />
        </a>
      </div>
    </Card>
  );
};

/**
 * Carte de Témoignage Premium (Style Avis vérifiés)
 */
export const TestimonialCard = ({ testimonial, className }) => {
  if (!testimonial) return null;

  const ratingCount = Math.min(Math.max(Number(testimonial.rating) || 5, 1), 5);

  return (
    <Card className={cn("relative flex flex-col justify-between overflow-hidden border border-slate-100", className)} hoverEffect={true}>
      <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-900 pointer-events-none">
        <Quote className="w-20 h-20 transform translate-x-3 -translate-y-3" />
      </div>

      <div>
        {/* Étoiles d'évaluation de l'avis */}
        <div className="flex items-center gap-1 mb-4" aria-label={`Note de ${ratingCount} sur 5 étoiles`}>
          {[...Array(ratingCount)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-slate-700 text-sm italic leading-relaxed mb-6 relative z-10">
          "{testimonial.content}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <div>
          <h4 className="text-sm font-bold text-slate-950">
            {testimonial.name}
          </h4>
          {testimonial.role && (
            <p className="text-xs text-slate-500">
              {testimonial.role}
            </p>
          )}
        </div>
        {testimonial.date && (
          <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">
            {testimonial.date}
          </span>
        )}
      </div>
    </Card>
  );
};