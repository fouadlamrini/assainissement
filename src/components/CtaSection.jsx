/**
 * src/components/sections/CtaSection.jsx
 *
 * Section d'appel à l'action secondaire (Devis / Appel rapide).
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, FileText } from "lucide-react";
import { Container, Button, PhoneButton } from "./ui/BaseComponents";
import { companyConfig } from "../data/siteData";

export default function CtaSection() {
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
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#14a992] text-white relative overflow-hidden"
    >
      {/* Background Radial Pattern & Decorative Glows */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#85ca51]/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        {/* Title */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Un projet ou une intervention en assainissement ?
        </h2>

        {/* Subtitle / Description */}
        <p
          className={`mt-4 sm:mt-6 text-base sm:text-lg text-emerald-50 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-150 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Contactez notre équipe pour obtenir des informations, demander un
          devis gratuit ou planifier une intervention en débouchage, curage,
          installation de STEP ou désinsectisation.
        </p>

        {/* Action Buttons */}
        <div
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ease-out transform ${
            isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-6"
          }`}
        >
          {/* Bouton Devis */}
          <Button
            as="a"
            href="#contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-none bg-white text-[#14a992] hover:bg-slate-50 hover:text-[#118f7c] shadow-xl hover:scale-105 gap-2.5 font-bold"
            aria-label="Demander un devis gratuit pour vos travaux d'assainissement"
          >
            <FileText className="w-5 h-5" />
            <span>Demander un devis gratuit</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          {/* Bouton Appel Direct */}
          <PhoneButton
            size="lg"
            variant="dark"
            className="w-full sm:w-auto bg-[#118f7c] hover:bg-[#0e7868] border border-white/20 shadow-lg hover:scale-105 text-white"
          />
        </div>
      </Container>
    </section>
  );
}