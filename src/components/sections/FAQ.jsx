/**
 * src/components/sections/FAQ.jsx
 *
 * Section Foire Aux Questions interactive (Accordéon).
 * Répond aux questions les plus fréquentes des clients de manière
 * claire, professionnelle et crédible.
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container, Section, SectionTitle } from "../ui/BaseComponents";
import { cn } from "../../utils/cn";

const faqData = [
  {
    question: "Comment est calculé le coût d'une intervention ?",
    answer:
      "Le tarif dépend de la nature de l'intervention, de l'accessibilité des installations et des travaux à réaliser. Une estimation est communiquée avant toute intervention lorsque cela est nécessaire.",
  },
  {
    question: "Dans quels délais pouvez-vous intervenir ?",
    answer:
      "Nous faisons notre maximum pour intervenir dans les meilleurs délais, en fonction de votre localisation, de l'urgence de la situation et de la disponibilité de nos équipes.",
  },
  {
    question: "Quels types d'installations prenez-vous en charge ?",
    answer:
      "Nous intervenons sur les éviers, lavabos, WC, douches, baignoires, canalisations, regards, fosses septiques, bacs à graisse et différents réseaux d'assainissement pour les particuliers comme pour les professionnels.",
  },
  {
    question: "Utilisez-vous du matériel professionnel ?",
    answer:
      "Oui. Selon les besoins de l'intervention, nous utilisons des équipements adaptés tels que l'hydrocurage ou l'inspection par caméra afin de faciliter le diagnostic et le traitement du problème.",
  },
  {
    question: "Comment demander une intervention ?",
    answer:
      "Vous pouvez nous contacter par téléphone ou via WhatsApp. Après avoir pris connaissance de votre demande, nous vous orienterons vers la solution la plus adaptée et organiserons l'intervention.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-white">
      <Container>
        <SectionTitle
          subtitle="Questions Fréquentes"
          title="Tout savoir sur nos interventions"
          centered={true}
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "border rounded-2xl transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-[#14a992]/5 border-[#14a992]/40 shadow-sm"
                    : "bg-white border-slate-100 hover:border-slate-200"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start gap-4 pr-4">
                    <HelpCircle
                      className={cn(
                        "w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-200",
                        isOpen
                          ? "text-[#14a992]"
                          : "text-slate-400 group-hover:text-[#14a992]"
                      )}
                    />

                    <span
                      className={cn(
                        "text-base font-bold tracking-tight transition-colors duration-200",
                        isOpen ? "text-[#118f7c]" : "text-slate-900"
                      )}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-500 transition-transform duration-300 flex-shrink-0",
                      isOpen &&
                        "transform rotate-180 bg-[#14a992]/10 border-[#14a992]/30 text-[#14a992]"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    "transition-all duration-300 ease-in-out origin-top",
                    isOpen
                      ? "max-h-[500px] opacity-100 border-t border-[#14a992]/15"
                      : "max-h-0 opacity-0 pointer-events-none"
                  )}
                >
                  <div className="p-5 md:p-6 text-sm sm:text-base text-slate-600 leading-relaxed bg-white/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}