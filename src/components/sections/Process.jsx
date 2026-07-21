/**
 * src/components/sections/Process.jsx
 * 
 * Section "Notre Process d'Intervention".
 * Explique graphiquement et simplement les étapes de prise en charge
 * pour instaurer un climat de confiance et de rigueur industrielle.
 */

import React from "react";
import { Container, Section } from "../ui/BaseComponents";

const processSteps = [
  {
    step: "01",
    title: "Appel ou Message Urgent",
    description: "Vous nous contactez par téléphone ou WhatsApp. Notre régulateur valide la nature de l'urgence instantanément."
  },
  {
    step: "02",
    title: "Départ du Camion en 5 min",
    description: "Le camion hydrocureur le plus proche de votre zone est immédiatement dépêché avec tout le matériel requis."
  },
  {
    step: "03",
    title: "Diagnostic & Devis Écrit",
    description: "Sur place, nos techniciens inspectent le réseau (caméra si nécessaire) et vous remettent un devis fixe gratuit."
  },
  {
    step: "04",
    title: "Hydrocurage & Libération",
    description: "Extraction du bouchon à haute pression, nettoyage complet du réseau et contrôle final de bon écoulement."
  }
];

export default function Process() {
  return (
    <Section id="process" className="bg-slate-950 text-white relative">
      {/* Texture ou points lumineux premium de fond */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#14a992]/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* En-tête adapté au thème sombre */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#14a992] bg-[#14a992]/15 border border-[#14a992]/30 px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm">
            Efficacité &amp; Rapidité
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight max-w-3xl mx-auto">
            4 Étapes Simples Pour Résoudre Votre Problème
          </h2>
          <div className="h-1 w-16 bg-[#14a992] mt-4 mx-auto rounded-full" />
        </div>

        {/* Grille de Processus en étapes interconnectées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Ligne de connexion visuelle masquée sur mobile et sur la dernière étape */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[65%] w-full h-[2px] bg-gradient-to-r from-[#14a992]/40 to-transparent z-0" />
              )}

              {/* Conteneur de l'étape */}
              <div className="relative z-10 space-y-4">
                {/* Numéro stylisé premium */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl font-extrabold text-[#14a992] group-hover:bg-[#14a992] group-hover:text-white group-hover:border-[#14a992] transition-all duration-300 shadow-inner">
                  {step.step}
                </div>

                {/* Titre & Description de l'étape */}
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