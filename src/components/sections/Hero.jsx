/**
 * src/components/sections/Hero.jsx
 *
 * Section Hero Premium orientée conversion.
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Clock, Award, Star } from "lucide-react";
import { Container, PhoneButton, WhatsAppButton } from "../ui/BaseComponents";
import { assetsConfig } from "../../data/siteData";

const cardsData = [
  {
    title: "Intervention Rapide",
    text: "Prise en charge dans les meilleurs délais selon votre localisation et la nature de votre demande.",
    icon: Clock,
    delay: "0.4s",
  },
  {
    title: "Devis Transparent",
    text: "Une estimation claire est proposée avant toute intervention, selon les travaux à réaliser.",
    icon: ShieldCheck,
    delay: "0.55s",
  },
  {
    title: "Équipe Qualifiée",
    text: "Des techniciens expérimentés et équipés pour répondre à vos besoins en assainissement.",
    icon: Award,
    delay: "0.7s",
  },
  {
    title: "Diagnostic des Canalisations",
    text: "Inspection par caméra lorsque cela est nécessaire afin d'identifier l'origine du problème.",
    icon: Star,
    delay: "0.85s",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="accueil"
      ref={heroRef}
      className="relative pt-8 pb-20 md:pt-12 md:pb-32 bg-slate-900 overflow-hidden text-white min-h-[90vh] flex items-center"
    >
      {/* Background Image avec Overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
        <img
          src={assetsConfig.heroBg}
          alt="Intervention en assainissement"
          className="w-full h-full object-cover scale-105 animate-pulse transition-transform duration-10000 ease-out"
        />
      </div>

      {/* Effets lumineux animés (Glow Orbs) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#14a992]/30 blur-3xl animate-pulse duration-3000" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#85ca51]/20 blur-2xl animate-pulse duration-5000" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* SECTION TEXTE & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Badge Animé (Fade In Down) */}
            <div
              className={`inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm transition-all duration-700 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Intervention Rapide
            </div>

            {/* Titre Principal (Fade In Up) */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-[1.15] mb-6 transition-all duration-700 delay-100 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Débouchage &amp; Curage <br />
              <span className="bg-gradient-to-r from-[#14a992] via-[#35b183] via-[#5fc067] to-[#85ca51] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                de Canalisation
              </span>
            </h1>

            {/* Subtitle (Fade In Up) */}
            <p
              className={`text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 delay-200 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Intervention rapide pour vos besoins en débouchage,
              assainissement et vidange de fosses septiques. Notre équipe
              intervient avec un matériel professionnel afin de vous proposer
              une solution adaptée à votre situation.
            </p>

            {/* Boutons CTA (Pop / Scale In) */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 transition-all duration-700 delay-300 ease-out transform ${
                isVisible
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-0"
              }`}
            >
              {/* Phone Button Container */}
              <div className="w-full sm:w-auto group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#85ca51]/40">
                <PhoneButton
                  size="lg"
                  className="w-full sm:w-auto justify-center bg-[#85ca51] hover:bg-[#74b346] text-slate-950 font-bold border-none"
                />
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </div>

              {/* WhatsApp Button Container */}
              <div className="w-full sm:w-auto group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#14a992]/40">
                <WhatsAppButton
                  size="lg"
                  className="w-full sm:w-auto justify-center bg-[#14a992] hover:bg-[#108c79] text-white font-bold border-none"
                />
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </div>
            </div>

            {/* Footer Text */}
            <div
              className={`flex items-center justify-center lg:justify-start pt-6 border-t border-slate-800/80 transition-all duration-700 delay-400 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <p className="text-xs sm:text-sm font-medium text-slate-400">
                Au service des particuliers, des entreprises et des collectivités.
              </p>
            </div>
          </div>

          {/* SECTION CARDS (Staggered Slide from Right / Scale) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 lg:pl-2">
            {cardsData.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`bg-slate-800/60 backdrop-blur-md p-5 rounded-2xl border border-slate-700/50 shadow-xl transform transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#14a992]/60 hover:bg-slate-800/90 group ${
                    isVisible
                      ? "translate-x-0 opacity-100 scale-100"
                      : "translate-x-12 opacity-0 scale-95"
                  }`}
                  style={{
                    transitionDelay: isVisible ? card.delay : "0s",
                  }}
                >
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-[#14a992]/10 text-[#14a992] group-hover:bg-[#14a992] group-hover:text-white group-hover:rotate-6 group-hover:scale-110 flex items-center justify-center mb-3 transition-all duration-300">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#14a992] transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Text */}
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}