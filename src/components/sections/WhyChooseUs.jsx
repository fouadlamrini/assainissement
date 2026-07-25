/**
 * src/components/sections/WhyChooseUs.jsx
 *
 * Section "Pourquoi nous choisir ?".
 * Présente les principaux atouts de l'entreprise avec un discours
 * professionnel et crédible.
 */

import React from "react";
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
  },
  {
    icon: "ShieldCheck",
    title: "Professionnalisme",
    description:
      "Des interventions réalisées avec soin, dans le respect des bonnes pratiques et avec un matériel adapté.",
  },
  {
    icon: "FileText",
    title: "Devis Clair",
    description:
      "Une estimation transparente est proposée avant le début des travaux, selon la nature de l'intervention.",
  },
  {
    icon: "Wrench",
    title: "Équipements Adaptés",
    description:
      "Nous utilisons des équipements professionnels, notamment l'hydrocurage et l'inspection par caméra lorsque cela est nécessaire.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="pourquoi-nous" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Bloc de Gauche */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <SectionTitle
              subtitle="Pourquoi Nous Choisir"
              title="Un partenaire de confiance pour vos travaux d'assainissement"
              centered={false}
              className="mb-6"
            />

            <p className="text-slate-600 text-base leading-relaxed">
              Nous accompagnons les particuliers, les professionnels et les
              copropriétés pour leurs besoins en débouchage, curage et
              assainissement. Notre objectif est de proposer un service fiable,
              un diagnostic adapté et des solutions durables.
            </p>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hidden lg:block text-left">
              <h4 className="text-sm font-bold text-[#14a992] mb-2">
                💡 Notre Engagement
              </h4>

              <p className="text-xs text-slate-500 leading-relaxed">
                Chaque intervention est étudiée en fonction de votre situation
                afin de proposer la solution la plus adaptée, avec des
                équipements professionnels et un accompagnement personnalisé.
              </p>
            </div>
          </div>

          {/* Bloc de Droite */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {advantagesData.map((advantage, index) => {
              const TargetIcon = Icons[advantage.icon] || Icons.ShieldCheck;

              return (
                <div
                  key={index}
                  className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#85ca51]/30 transition-all duration-300"
                >
                  <div className="mb-5">
                    <IconBox icon={TargetIcon} variant="lime" />
                  </div>

                  <h3 className="text-lg font-bold text-[#14a992] mb-2 group-hover:text-[#108c79] transition-colors">
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