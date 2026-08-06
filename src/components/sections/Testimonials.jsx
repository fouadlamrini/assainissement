/**
 * src/components/sections/Testimonials.jsx
 *
 * Section des témoignages clients.
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import { Container, Section, SectionTitle } from "../ui/BaseComponents";
import { TestimonialCard } from "../ui/Cards";
import { CheckCircle } from "lucide-react";

const testimonialsData = [
  {
    name: "M. A.",
    role: "Particulier",
    content:
      "Nous avons fait appel à cette entreprise pour un problème de canalisation bouchée. L'intervention s'est bien déroulée et le problème a été résolu rapidement.",
    rating: 5,
    date: "Client récent",
  },
  {
    name: "Syndic d'immeuble",
    role: "Copropriété",
    content:
      "Nous sollicitons régulièrement cette équipe pour l'entretien de nos installations. Les interventions sont organisées et le travail est réalisé avec sérieux.",
    rating: 5,
    date: "Client professionnel",
  },
  {
    name: "M. K.",
    role: "Commerçant",
    content:
      "L'équipe a identifié l'origine du problème et proposé une solution adaptée. Les explications étaient claires et l'intervention s'est déroulée dans de bonnes conditions.",
    rating: 5,
    date: "Client récent",
  },
];

export default function Testimonials() {
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
      id="avis"
      ref={sectionRef}
      className="bg-slate-50/60 border-t border-slate-100 overflow-hidden py-20 md:py-28 relative"
    >
      <Container>
        {/* Section Title Animé */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <SectionTitle
            subtitle="Avis Clients"
            title="Les retours de nos clients"
            centered={true}
          />
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {testimonialsData.map((testimonial, index) => {
            const delayMs = 100 + index * 150;

            return (
              <div
                key={testimonial.name}
                className={`transition-all duration-700 ease-out transform ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isVisible ? `${delayMs}ms` : "0ms",
                }}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  className="bg-white shadow-md shadow-slate-100/50 hover:border-[#14a992]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Banner (Pop & Scale In) */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white border border-slate-200/80 px-6 py-4 rounded-2xl max-w-2xl mx-auto shadow-sm transition-all duration-700 delay-500 ease-out transform hover:border-[#14a992]/40 hover:shadow-md ${
            isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-90 opacity-0 translate-y-6"
          }`}
        >
          <CheckCircle className="w-5 h-5 text-[#14a992] flex-shrink-0 animate-pulse" />
          <p className="text-sm font-semibold text-slate-800 text-center sm:text-left">
            La satisfaction de nos clients est au cœur de notre engagement.
          </p>
        </div>
      </Container>
    </Section>
  );
}