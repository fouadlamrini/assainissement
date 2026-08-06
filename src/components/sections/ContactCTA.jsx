/**
 * src/components/sections/ContactCTA.jsx
 *
 * Section d'appel à l'action.
 * Interactive & Scroll-Triggered Staggered Animations with Reduced Motion Accessibility.
 */

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Zap } from "lucide-react";
import {
  Container,
  Section,
  PhoneButton,
  WhatsAppButton,
} from "../ui/BaseComponents";

export default function ContactCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="contact" ref={sectionRef} className="py-0 md:py-0 bg-white overflow-visible">
      <Container className="relative z-10">
        <div
          className={`bg-slate-950 rounded-3xl p-8 md:p-14 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden text-white -translate-y-12 transition-all duration-700 ease-out transform ${
            isVisible
              ? "scale-100 opacity-100 translate-y-[-48px]"
              : "scale-95 opacity-0 translate-y-4"
          }`}
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
            <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#14a992]/30 blur-3xl animate-pulse" />
            <div className="absolute bottom-[-30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#85ca51]/20 blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 bg-[#14a992]/10 border border-[#14a992]/30 text-[#14a992] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition-all duration-500 delay-100 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Zap className="w-3.5 h-3.5 fill-[#14a992]" aria-hidden="true" />
                Contactez-nous 24/7
              </div>

              {/* Title */}
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight leading-tight transition-all duration-500 delay-200 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                Besoin d'une intervention{" "}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#14a992] to-[#85ca51] bg-clip-text text-transparent">
                  ou d'un devis gratuit ?
                </span>
              </h2>

              {/* Description */}
              <p
                className={`text-slate-400 text-base max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-500 delay-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                Notre équipe est à votre disposition pour répondre à vos
                questions, évaluer votre situation et organiser une intervention
                rapide et adaptée à vos besoins partout au Maroc.
              </p>

              {/* Badges */}
              <div
                className={`flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-slate-400 pt-4 transition-all duration-500 delay-500 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#85ca51]" aria-hidden="true" />
                  Équipe qualifiée &amp; certifiée
                </span>

                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#85ca51]" aria-hidden="true" />
                  Devis gratuit sans engagement
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 w-full justify-center">
              <div
                className={`flex flex-col gap-2 w-full transition-all duration-500 delay-300 transform ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                <span className="text-xs font-bold text-center lg:text-left text-slate-400 tracking-wider uppercase block">
                  📞 Appels d'urgence
                </span>

                <PhoneButton
                  size="lg"
                  className="w-full justify-center text-center !bg-[#85ca51] hover:!bg-[#74b346] !text-white border-none shadow-xl shadow-[#85ca51]/30 hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-[#85ca51] focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300"
                />
              </div>

              <div
                className={`flex flex-col gap-2 w-full transition-all duration-500 delay-500 transform ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                <span className="text-xs font-bold text-center lg:text-left text-slate-400 tracking-wider uppercase block">
                  💬 Assistance WhatsApp
                </span>

                <WhatsAppButton
                  size="lg"
                  className="w-full justify-center text-center !bg-[#14a992] hover:!bg-[#108c79] !text-white border-none shadow-xl shadow-[#14a992]/30 hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-[#14a992] focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}