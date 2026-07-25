/**
 * src/components/sections/Testimonials.jsx
 *
 * Section des témoignages clients.
 * Met en avant les retours d'expérience de nos clients.
 */

import React from "react";
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
  return (
    <Section id="avis" className="bg-slate-50/60 border-t border-slate-100">
      <Container>
        <SectionTitle
          subtitle="Avis Clients"
          title="Les retours de nos clients"
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              className="bg-white shadow-md shadow-slate-100/50 hover:border-[#14a992]/30 transition-colors duration-300"
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white border border-slate-200/80 px-6 py-4 rounded-2xl max-w-2xl mx-auto shadow-sm">
          <CheckCircle className="w-5 h-5 text-[#14a992] flex-shrink-0" />
          <p className="text-sm font-semibold text-slate-800 text-center sm:text-left">
            La satisfaction de nos clients est au cœur de notre engagement.
          </p>
        </div>
      </Container>
    </Section>
  );
}