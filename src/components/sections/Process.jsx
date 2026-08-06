/**
 * src/components/sections/Process.jsx
 *
 * Section "Notre Process d'Intervention".
 * Scroll-Triggered Staggered Animations via Intersection Observer.
 */

import React, { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
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
      className="bg-slate-950 text-white relative overflow-hidden py-20 md:py-28"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0" aria-hidden="true">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#14a992]/20 blur-3xl animate-pulse motion-reduce:animate-none duration-[5000ms]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#85ca51]/15 blur-3xl animate-pulse motion-reduce:animate-none duration-[7000ms]" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#14a992] bg-[#14a992]/15 border border-[#14a992]/30 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm shadow-sm">
            Notre Méthode
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Les étapes de votre{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#14a992] via-[#35b183] via-[#5fc067] to-[#85ca51] bg-clip-text text-transparent">
              intervention
            </span>
          </h2>

          <div className="h-1 w-16 bg-gradient-to-r from-[#14a992] to-[#85ca51] mt-5 mx-auto rounded-full" />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {processSteps.map((step, index) => {
            const delayMs = 150 + index * 150;

            return (
              <div
                key={step.step}
                className={`relative group h-full transition-all duration-700 ease-out transform ${
                  isVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "-translate-x-10 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isVisible ? `${delayMs}ms` : "0ms",
                }}
              >
                {/* Connecting Line (Desktop Only) */}
                {index < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#14a992]/60 via-[#14a992]/20 to-transparent z-0 group-hover:from-[#85ca51] transition-colors duration-500"
                    aria-hidden="true"
                  />
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
            );
          })}
        </div>
      </Container>
    </Section>
  );
}