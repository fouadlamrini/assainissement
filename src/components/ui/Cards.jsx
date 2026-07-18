/**
 * src/components/ui/Cards.jsx
 * 
 * Composants de cartes haut de gamme pour l'affichage des services et témoignages.
 * Gère dynamiquement le rendu des icônes à partir de chaînes de caractères.
 */

import React from "react";
import * as Icons from "lucide-react";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Card, Badge, IconBox, PhoneButton } from "./BaseComponents";
import { cn } from "../../utils/cn";

/**
 * Carte de Service orientée conversion
 */
export const ServiceCard = ({ service, className }) => {
  // Extraction dynamique de l'icône Lucide correspondante ou icône par défaut
  const LucideIcon = Icons[service.icon] || Icons.Wrench;

  return (
    <Card className={cn("group flex flex-col justify-between h-full border border-slate-100", className)}>
      <div>
        <div className="flex items-start justify-between mb-6">
          <IconBox icon={LucideIcon} variant="blue" />
          {service.badge && (
            <Badge variant={service.id === "debouchage" ? "danger" : "info"}>
              {service.badge}
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-sm font-medium text-blue-600 mb-3">
          À partir de <span className="text-lg font-bold">{service.priceFrom}</span>
        </p>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-50 mt-auto flex items-center justify-between">
        <a 
          href={`#contact-${service.id}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 group-hover:text-blue-600 tracking-wider uppercase transition-colors duration-200"
        >
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </Card>
  );
};

/**
 * Carte de Témoignage Premium (Style Avis vérifiés)
 */
export const TestimonialCard = ({ testimonial, className }) => {
  return (
    <Card className={cn("relative flex flex-col justify-between overflow-hidden", className)} hoverEffect={false}>
      <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-900 pointer-events-none">
        <Quote className="w-24 h-24 transform translate-x-4 -translate-y-4" />
      </div>

      <div>
        {/* Étoiles d'évaluation de l'avis */}
        <div className="flex items-center gap-1 mb-4" aria-label={`Note de ${testimonial.rating} sur 5 étoiles`}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-slate-700 text-sm italic leading-relaxed mb-6 relative z-10">
          "{testimonial.content}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
        <div>
          <h4 className="text-sm font-bold text-slate-950">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-500">
            {testimonial.role}
          </p>
        </div>
        <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">
          {testimonial.date}
        </span>
      </div>
    </Card>
  );
};