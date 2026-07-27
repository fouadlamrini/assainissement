/**
 * src/components/sections/Services.jsx
 *
 * Section Services - Présentation des prestations d'assainissement.
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import {
  Droplet,
  Wrench,
  Truck,
  Eye,
  ShieldAlert,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Container, Section, SectionTitle } from "../ui/BaseComponents";

const servicesList = [
  {
    icon: Wrench,
    title: "Débouchage de Canalisation",
    description:
      "Débouchage des éviers, WC, lavabos, douches et canalisations extérieures à l'aide d'un matériel adapté pour rétablir un écoulement normal.",
    tag: "Débouchage",
    image: "/assets/Debouchage.jpg",
    delay: "0.1s",
  },
  {
    icon: Droplet,
    title: "Curage de Réseaux & Canalisations",
    description:
      "Nettoyage des canalisations par hydrocurage afin d'éliminer les dépôts, les graisses et les résidus susceptibles de provoquer des obstructions.",
    tag: "Curage",
    image: "/assets/curage.jpg",
    delay: "0.2s",
  },
  {
    icon: Truck,
    title: "Vidange & Pompage de Fosses",
    description:
      "Vidange et pompage des fosses septiques, bacs à graisse et autres ouvrages d'assainissement avec un matériel professionnel adapté.",
    tag: "Vidange",
    image: "/assets/vidange.jpg",
    delay: "0.3s",
  },
  {
    icon: Eye,
    title: "Inspection des Canalisations",
    description:
      "Inspection par caméra lorsque cela est nécessaire afin d'identifier l'origine d'un bouchon, d'une fuite ou d'une anomalie sur le réseau.",
    tag: "caméra",
    image: "/assets/camera.jpg",
    delay: "0.4s",
  },
  {
    icon: ShieldAlert,
    title: "Réparation de Réseaux d'Assainissement",
    description:
      "Travaux de réparation et de remise en état des réseaux d'eaux usées, des regards et des canalisations endommagées.",
    tag: "Réparation",
    image: "/assets/depannage.jpg",
    delay: "0.5s",
  },
  {
    icon: Building2,
    title: "Entretien pour Professionnels & Copropriétés",
    description:
      "Prestations d'entretien destinées aux immeubles, copropriétés, commerces, entreprises et collectivités selon leurs besoins.",
    tag: "Professionnels",
    image: "/assets/collectif.jpg",
    delay: "0.6s",
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const whatsappNumber = "+212668029443";
  const baseUrl = "https://assainissement-theta.vercel.app/";

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
      id="services"
      ref={sectionRef}
      className="bg-slate-50 relative overflow-hidden py-20"
    >
      {/* Subtle Background Deco Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-[#14a992]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 bg-[#85ca51]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header Animé */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <SectionTitle
            subtitle="Nos Services"
            title="Des prestations adaptées à vos besoins en assainissement"
            centered={true}
          />
        </div>

        {/* Grid dyal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;

            const textMessage = `Bonjour, je souhaite obtenir des informations concernant le service : *${service.title}*.\n\nImage de référence :\n${baseUrl}${service.image}`;
            const encodedText = encodeURIComponent(textMessage);
            const whatsappServiceUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm hover:border-[#14a992]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-out flex flex-col justify-between group transform ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-16 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isVisible ? service.delay : "0s",
                }}
              >
                <div>
                  {/* Container Image avec Zoom Effect */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Tag Badge */}
                    <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-lg bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm border border-slate-200/60 transition-transform duration-300 group-hover:scale-105">
                      {service.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Icon Container with Micro-interaction */}
                    <div className="w-12 h-12 rounded-xl bg-[#85ca51]/10 text-[#85ca51] flex items-center justify-center mb-5 group-hover:bg-[#85ca51] group-hover:text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 transition-transform duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#14a992] transition-colors duration-200">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0">
                  <a
                    href={whatsappServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#14a992] text-sm font-bold text-white transition-all duration-300 overflow-hidden shadow-md shadow-[#14a992]/20 hover:bg-[#108c79] hover:shadow-lg hover:shadow-[#14a992]/30 active:scale-98 group/btn"
                  >
                    {/* Shine Effect */}
                    <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />

                    <span>Demander ce service</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}