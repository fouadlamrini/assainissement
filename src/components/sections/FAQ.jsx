/**
 * src/components/sections/FAQ.jsx
 *
 * Section Foire Aux Questions interactive (Accordéon).
 * SEO Optimized with Schema.org JSON-LD & Accessible WAI-ARIA Accordion.
 */

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { Container, Section, SectionTitle, PhoneButton, WhatsAppButton } from "../ui/BaseComponents";
import { cn } from "../../utils/cn";

const faqData = [
  {
    question: "Comment est calculé le coût d'une intervention ?",
    answer:
      "Le tarif dépend de la nature de l'intervention, de l'accessibilité des installations et des travaux à réaliser. Une estimation transparente est communiquée gratuitement avant toute intervention.",
    delay: "100ms",
  },
  {
    question: "Dans quels délais pouvez-vous intervenir ?",
    answer:
      "Nous faisons notre maximum pour intervenir en urgence dans les meilleurs délais, en fonction de votre localisation et de la disponibilité de nos équipes équipées au Maroc.",
    delay: "200ms",
  },
  {
    question: "Quels types d'installations prenez-vous en charge ?",
    answer:
      "Nous intervenons sur les éviers, lavabos, WC, douches, baignoires, canalisations, regards, fosses septiques, bacs à graisse et réseaux d'assainissement pour particuliers et professionnels.",
    delay: "300ms",
  },
  {
    question: "Utilisez-vous du matériel professionnel ?",
    answer:
      "Oui. Selon la situation, nous utilisons des équipements de haute technologie tels que l'hydrocurage à haute pression et l'inspection par caméra vidéo pour un diagnostic précis.",
    delay: "400ms",
  },
  {
    question: "Comment demander une intervention ou un devis ?",
    answer:
      "Vous pouvez nous contacter directement par téléphone ou via WhatsApp. Notre équipe étudiera votre demande et organisera l'intervention rapidement.",
    delay: "500ms",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

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

  // Structural Schema.org Data for FAQ Page (SEO Rich Snippets)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <Section id="faq" ref={sectionRef} className="bg-slate-50/50 py-20 overflow-hidden border-t border-slate-100">
      {/* Schema.org FAQ Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Container>
        {/* Title Header */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <SectionTitle
            subtitle="Questions Fréquentes"
            title="Tout savoir sur nos interventions d'assainissement"
            centered={true}
          />
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4 mt-12">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className={cn(
                  "border rounded-2xl transition-all duration-500 overflow-hidden transform",
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95",
                  isOpen
                    ? "bg-white border-[#14a992]/40 shadow-md ring-1 ring-[#14a992]/20"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                )}
                style={{
                  transitionDelay: isVisible ? faq.delay : "0ms",
                }}
              >
                <button
                  id={buttonId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14a992] focus-visible:ring-offset-2 rounded-2xl group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="flex items-start gap-4 pr-4">
                    <HelpCircle
                      className={cn(
                        "w-5 h-5 mt-0.5 shrink-0 transition-colors duration-200",
                        isOpen
                          ? "text-[#14a992]"
                          : "text-slate-400 group-hover:text-[#14a992]"
                      )}
                      aria-hidden="true"
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
                      "w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-500 transition-transform duration-300 shrink-0",
                      isOpen &&
                        "rotate-180 bg-[#14a992]/10 border-[#14a992]/30 text-[#14a992]"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "transition-all duration-300 ease-in-out origin-top",
                    isOpen
                      ? "max-h-[500px] opacity-100 border-t border-slate-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  )}
                >
                  <div className="p-5 md:p-6 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/40">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Contact CTA Box */}
        <div 
          className={cn(
            "max-w-xl mx-auto mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-700 delay-500 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#14a992]/10 text-[#14a992] mb-3">
            <MessageCircleQuestion className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">
            Vous avez une autre question ?
          </h3>
          <p className="text-sm text-slate-500 mb-5">
            Notre équipe est disponible 24/7 pour vous conseiller et répondre à vos demandes particulières.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <PhoneButton size="sm" />
            <WhatsAppButton size="sm" />
          </div>
        </div>
      </Container>
    </Section>
  );
}