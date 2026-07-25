/**
 * src/components/sections/Process.jsx
 *
 * Section "Notre Process d'Intervention".
 * Présente les différentes étapes d'une intervention de manière
 * simple, claire et professionnelle.
 */

import React from "react";
import { Container, Section } from "../ui/BaseComponents";

const processSteps = [
  {
    step: "01",
    title: "Prise de Contact",
    description:
      "Contactez-nous par téléphone ou WhatsApp. Nous prenons connaissance de votre demande et recueillons les informations nécessaires.",
  },
  {
    step: "02",
    title: "Planification de l'Intervention",
    description:
      "Nous organisons l'intervention en fonction de votre localisation, de la nature du problème et de la disponibilité de notre équipe.",
  },
  {
    step: "03",
    title: "Diagnostic sur Place",
    description:
      "Nos techniciens évaluent la situation et déterminent la solution la plus adaptée. Un devis est présenté avant toute intervention lorsque cela est nécessaire.",
  },
  {
    step: "04",
    title: "Réalisation des Travaux",
    description:
      "L'intervention est réalisée avec un matériel professionnel, suivie d'une vérification du bon fonctionnement des installations.",
  },
];

export default function Process() {
  return (
    <Section id="process" className="bg-slate-950 text-white relative">
      {/* Effet lumineux */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#14a992]/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#14a992] bg-[#14a992]/15 border border-[#14a992]/30 px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm">
            Notre Méthode
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Les étapes de votre intervention
          </h2>

          <div className="h-1 w-16 bg-[#14a992] mt-4 mx-auto rounded-full" />
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[65%] w-full h-[2px] bg-gradient-to-r from-[#14a992]/40 to-transparent z-0" />
              )}

              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl font-extrabold text-[#14a992] group-hover:bg-[#14a992] group-hover:text-white group-hover:border-[#14a992] transition-all duration-300 shadow-inner">
                  {step.step}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight pt-2">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}