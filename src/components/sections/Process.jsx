/**
 * src/components/sections/Process.jsx
 *
 * Section "Notre Process d'Intervention".
 * Scroll-Triggered Animation (Intersection Observer).
 */

import React, { useEffect, useRef, useState } from "react";
import { Container, Section } from "../ui/BaseComponents";

const processSteps = [
  {
    step: "01",
    title: "Prise de Contact",
    description:
      "Contactez-nous par téléphone ou WhatsApp. Nous prenons connaissance de votre demande et recueillons les informations nécessaires.",
    animationDelay: "0.1s",
  },
  {
    step: "02",
    title: "Planification de l'Intervention",
    description:
      "Nous organisons l'intervention en fonction de votre localisation, de la nature du problème et de la disponibilité de notre équipe.",
    animationDelay: "0.25s",
  },
  {
    step: "03",
    title: "Diagnostic sur Place",
    description:
      "Nos techniciens évaluent la situation et déterminent la solution la plus adaptée. Un devis est présenté avant toute intervention lorsque cela est nécessaire.",
    animationDelay: "0.4s",
  },
  {
    step: "04",
    title: "Réalisation des Travaux",
    description:
      "L'intervention est réalisée avec un matériel professionnel, suivie d'une vérification du bon fonctionnement des installations.",
    animationDelay: "0.55s",
  },
];

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fash kat-ban l-section f-l-ecran (threshold 20%)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Kat-habas l-observer باش t-b9a l-animation m9ad
        }
      },
      { threshold: 0.2 } // Ki-t-trigger fash kat-ban 20% m'n l-section
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="process"
      ref={sectionRef}
      className="bg-slate-950 text-white relative overflow-hidden py-20"
    >
      {/* Dynamic Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#14a992]/20 blur-3xl animate-pulse duration-5000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#85ca51]/15 blur-3xl animate-pulse duration-7000" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#14a992] bg-[#14a992]/15 border border-[#14a992]/30 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm shadow-sm">
            Notre Méthode
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Les étapes de votre intervention
          </h2>

          <div className="h-1 w-16 bg-gradient-to-r from-[#14a992] to-[#85ca51] mt-5 mx-auto rounded-full" />
        </div>

        {/* Grid dyal l-Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative group h-full transition-all duration-700 ease-out transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? step.animationDelay : "0s",
              }}
            >
              {/* Connecting Line (Desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#14a992]/60 via-[#14a992]/20 to-transparent z-0 group-hover:from-[#85ca51] transition-colors duration-500" />
              )}

              {/* Step Card */}
              <div className="relative z-10 p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-[#14a992]/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-start shadow-xl">
                {/* Step Badge */}
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xl font-extrabold text-[#14a992] group-hover:bg-[#14a992] group-hover:text-white group-hover:border-[#14a992] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#14a992]/10 mb-5">
                  {step.step}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-[#14a992] transition-colors duration-200">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
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