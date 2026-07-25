/**
 * src/components/sections/WhyChooseUs.jsx
 *
 * Section "Pourquoi nous choisir ?".
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import * as Icons from "lucide-react";
import {
  Container,
  Section,
  SectionTitle,
  IconBox,
} from "../ui/BaseComponents";

const advantagesData = [
  {
    icon: "Clock",
    title: "Intervention Rapide",
    description:
      "Nous nous efforçons d'intervenir dans les meilleurs délais afin de répondre efficacement à votre demande.",
    delay: "0.1s",
  },
  {
    icon: "ShieldCheck",
    title: "Professionnalisme",
    description:
      "Des interventions réalisées avec soin, dans le respect des bonnes pratiques et avec un matériel adapté.",
    delay: "0.25s",
  },
  {
    icon: "FileText",
    title: "Devis Clair",
    description:
      "Une estimation transparente est proposée avant le début des travaux, selon la nature de l'intervention.",
    delay: "0.4s",
  },
  {
    icon: "Wrench",
    title: "Équipements Adaptés",
    description:
      "Nous utilisons des équipements professionnels, notamment l'hydrocurage et l'inspection par caméra lorsque cela est nécessaire.",
    delay: "0.55s",
  },
];

export default function WhyChooseUs() {
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
      id="pourquoi-nous"
      ref={sectionRef}
      className="bg-white relative overflow-hidden py-20"
    >
      {/* Background Decorative Gradient Blurs */}
      <div className="absolute top-1/2 left-[-5%] w-80 h-80 bg-[#14a992]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[#5%] w-96 h-96 bg-[#85ca51]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bloc de Gauche (Textes & Callout) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div
              className={`transition-all duration-700 ease-out transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <SectionTitle
                subtitle="Pourquoi Nous Choisir"
                title="Un partenaire de confiance pour vos travaux d'assainissement"
                centered={false}
                className="mb-6"
              />
            </div>

            <p
              className={`text-slate-600 text-base sm:text-lg leading-relaxed transition-all duration-700 delay-150 ease-out transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              Nous accompagnons les particuliers, les professionnels et les
              copropriétés pour leurs besoins en débouchage, curage et
              assainissement. Notre objectif est de proposer un service fiable,
              un diagnostic adapté et des solutions durables.
            </p>

            {/* Callout Box - Notre Engagement */}
            <div
              className={`p-6 bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-2xl border border-slate-200/80 shadow-sm hidden lg:block text-left transition-all duration-700 delay-300 ease-out transform hover:shadow-md hover:border-[#14a992]/30 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">💡</span>
                <h4 className="text-sm font-bold text-[#14a992] tracking-wide">
                  Notre Engagement
                </h4>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Chaque intervention est étudiée en fonction de votre situation
                afin de proposer la solution la plus adaptée, avec des
                équipements professionnels et un accompagnement personnalisé.
              </p>
            </div>
          </div>

          {/* Bloc de Droite - Grid Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {advantagesData.map((advantage, index) => {
              const TargetIcon = Icons[advantage.icon] || Icons.ShieldCheck;

              return (
                <div
                  key={index}
                  className={`group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#14a992]/40 hover:-translate-y-2 transition-all duration-700 ease-out relative overflow-hidden transform ${
                    isVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-16 opacity-0 scale-95"
                  }`}
                  style={{
                    transitionDelay: isVisible ? advantage.delay : "0s",
                  }}
                >
                  {/* Subtle Corner Glow on Hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#14a992]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon Container */}
                  <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <IconBox icon={TargetIcon} variant="lime" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#14a992] transition-colors duration-200">
                    {advantage.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}