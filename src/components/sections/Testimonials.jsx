/**
 * src/components/sections/Testimonials.jsx
 * 
 * Section des témoignages clients.
 * Renforce la crédibilité et la confiance indispensables dans le secteur du dépannage d'urgence.
 */

import React from "react";
import { Container, Section, SectionTitle } from "../ui/BaseComponents";
import { TestimonialCard } from "../ui/Cards";
import { CheckCircle } from "lucide-react";

const testimonialsData = [
  {
    name: "Mohamed El Amrani",
    role: "Particulier - Tanger",
    content: "Intervention rapide pour un évier complètement bouché. Le technicien est arrivé en 25 minutes, le tarif annoncé au téléphone a été respecté. Travail propre et soigné !",
    rating: 5,
    date: "Il y a 2 semaines"
  },
  {
    name: "Sophie Lemaitre",
    role: "Syndic de Copropriété - Casablanca",
    content: "Nous travaillons avec cette entreprise pour le curage des colonnes de nos immeubles. Équipe très professionnelle, équipement hydrocureur performant et rapports clairs avec photos.",
    rating: 5,
    date: "Il y a 1 mois"
  },
  {
    name: "Karim Benali",
    role: "Propriétaire Restaurant - Tanger",
    content: "Urgence absolue un samedi soir sur nos canalisations principales. Intervention ultra-rapide à l'aide de l'inspection caméra qui a localisé le bouchon de graisse immédiatement. Merci !",
    rating: 5,
    date: "Il y a 3 jours"
  }
];

export default function Testimonials() {
  return (
    <Section id="avis" className="bg-slate-50/60 border-t border-slate-100">
      <Container>
        {/* En-tête de section axé sur la satisfaction client */}
        <SectionTitle
          subtitle="Avis de nos clients"
          title="Ils nous font confiance pour leurs urgences et chantiers"
          centered={true}
        />

        {/* Grille responsive des avis clients */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial}
              className="bg-white shadow-md shadow-slate-100/50 hover:border-[#14a992]/30 transition-colors duration-300"
            />
          ))}
        </div>

        {/* Badge inférieur de certification collective */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white border border-slate-200/80 px-6 py-4 rounded-2xl max-w-2xl mx-auto shadow-sm">
          <CheckCircle className="w-5 h-5 text-[#14a992] flex-shrink-0" />
          <p className="text-sm font-semibold text-slate-800 text-center sm:text-left">
            Tous nos avis sont issus d'interventions réelles et certifiées par bons de chantiers signés.
          </p>
        </div>
      </Container>
    </Section>
  );
}