/**
 * src/components/sections/FAQ.jsx
 * 
 * Section Foire Aux Questions interactive (Accordéon).
 * Conçue pour répondre aux objections courantes des clients (tarifs, délais, assurances)
 * et améliorer le référencement naturel (SEO) grâce aux données structurées.
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container, Section, SectionTitle } from "../ui/BaseComponents";
import { cn } from "../../utils/cn";

// مصفوفة الأسئلة الشائعة مدمجة محلياً لقطع الخطأ نهائياً وتأمين الـ Build
const faqData = [
  {
    question: "Combien coûte une intervention de débouchage de canalisation ?",
    answer: "Nos tarifs sont transparents و fixés à l'avance. Un devis gratuit écrit vous est systématiquement présenté avant le début des travaux. Le prix dépend de la complexité (débouchage manuel ou hydrocurage par camion haute pression)."
  },
  {
    question: "Quel est votre délai d'intervention en cas d'urgence ?",
    answer: "Nous intervenons en moyenne sous 30 minutes. Grâce à notre flotte de camions hydrocureurs géolocalisés en temps réel, nous dépêchons immédiatement l'équipe la plus proche de votre domicile, 24h/7j."
  },
  {
    question: "Quels types de canalisations pouvez-vous déboucher ?",
    answer: "Nous débouchons absolument tout : éviers, WC, lavabos, baignoires, douches, colonnes d'immeubles, regards extérieurs, égouts et fosses septiques, que ce soit pour les particuliers, les syndics ou les professionnels."
  },
  {
    question: "Vos interventions sont-elles couvertes par une assurance ?",
    answer: "Oui, notre entreprise est agréée et toutes nos prestations de débouchage technique, curage et assainissement sont couvertes par notre garantie décennale et notre assurance responsabilité civile professionnelle."
  },
  {
    question: "Utilisez-vous des produits chimiques nocifs pour l'environnement ?",
    answer: "Non, nous privilégions l'hydrocurage mécanique à haute pression. C'est une méthode 100% écologique qui détruit les bouchons et nettoie les parois des canalisations uniquement avec de l'eau, sans aucun produit chimique."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-white">
      <Container>
        {/* En-tête de section */}
        <SectionTitle
          subtitle="Des Réponses à vos Questions"
          title="Foire Aux Questions - Assainissement & Débouchage"
          centered={true}
        />

        {/* Structure d'accordéon optimisée pour l'expérience utilisateur */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "border rounded-2xl transition-all duration-300 overflow-hidden",
                  isOpen 
                    ? "bg-blue-50/30 border-blue-200/80 shadow-sm" 
                    : "bg-white border-slate-100 hover:border-slate-200"
                )}
              >
                {/* Déclencheur / Bouton de la question (Accessible ARIA) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start gap-4 pr-4">
                    <HelpCircle className={cn(
                      "w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-200",
                      isOpen ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500"
                    )} />
                    <span className={cn(
                      "text-base font-bold tracking-tight transition-colors duration-200",
                      isOpen ? "text-blue-900" : "text-slate-900"
                    )}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-500 transition-transform duration-300 flex-shrink-0",
                    isOpen && "transform rotate-180 bg-blue-100 border-blue-200 text-blue-600"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Panneau de réponse rétractable */}
                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    "transition-all duration-300 ease-in-out origin-top",
                    isOpen ? "max-h-[500px] opacity-100 border-t border-blue-100" : "max-h-0 opacity-0 pointer-events-none"
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