/**
 * src/components/sections/Statistics.jsx
 * 
 * Section Statistique & Chiffres Clés.
 * Permet d'asseoir l'autorité et la légitimité de l'entreprise
 * à travers des metrics forts et un agencement minimaliste haut de gamme.
 */

import React from "react";
import { Container, Section } from "../ui/BaseComponents";

const statisticsData = [
  {
    value: "+1500",
    label: "Interventions Réussies"
  },
  {
    value: "30 min",
    label: "Temps de Réponse Moyen"
  },
  {
    value: "100%",
    label: "Devis Transparents"
  },
  {
    value: "4.9/5",
    label: "Note Google Maps"
  }
];

export default function Statistics() {
  return (
    <Section id="statistiques" className="bg-gradient-to-r from-[#14a992] to-[#118f7c] text-white py-16 md:py-20">
      <Container>
        {/* Grille responsive des indicateurs de performance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {statisticsData.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-2 group transition-transform duration-300 hover:scale-105"
            >
              {/* Chiffre clé en typo Serif massive */}
              <span className="text-4xl sm:text-5xl font-black font-serif tracking-tight text-white drop-shadow-sm">
                {stat.value}
              </span>
              
              {/* Séparateur minimaliste */}
              <div className="h-0.5 w-8 bg-white/80 rounded-full" />
              
              {/* Intitulé clair et lisible */}
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-50 max-w-[180px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}