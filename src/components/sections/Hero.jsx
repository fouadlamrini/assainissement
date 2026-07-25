/**
 * src/components/sections/Hero.jsx
 *
 * Section Hero Premium orientée conversion.
 */

import React from "react";
import { ShieldCheck, Clock, Award, Star } from "lucide-react";
import { Container, PhoneButton, WhatsAppButton } from "../ui/BaseComponents";
import { assetsConfig } from "../../data/siteData";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-4 pb-20 md:pt-4 md:pb-32 bg-slate-900 overflow-hidden text-white"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <img
          src={assetsConfig.heroBg}
          alt="Intervention en assainissement"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Effets lumineux */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#14a992]/30 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#85ca51]/20 blur-2xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Texte */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Intervention Rapide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-[1.1] mb-6">
              Débouchage &amp; Curage <br />
              <span className="bg-gradient-to-r from-[#14a992] via-[#35b183] via-[#5fc067] to-[#85ca51] bg-clip-text text-transparent">
                de Canalisation
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Intervention rapide pour vos besoins en débouchage,
              assainissement et vidange de fosses septiques. Notre équipe
              intervient avec un matériel professionnel afin de vous proposer
              une solution adaptée à votre situation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <PhoneButton
                size="lg"
                className="w-full sm:w-auto justify-center bg-[#85ca51] hover:bg-[#74b346] text-white border-none shadow-xl shadow-[#85ca51]/30"
              />

              <WhatsAppButton
                size="lg"
                className="w-full sm:w-auto justify-center bg-[#14a992] hover:bg-[#108c79] text-white border-none shadow-xl shadow-[#14a992]/30"
              />
            </div>

            <div className="flex items-center justify-center lg:justify-start pt-6 border-t border-slate-800">
              <p className="text-sm font-medium text-slate-300">
                Au service des particuliers, des entreprises et des collectivités.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 lg:pl-4">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-[#14a992]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#85ca51]/10 text-[#85ca51] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>

              <h3 className="text-sm font-bold text-[#14a992] mb-1">
                Intervention Rapide
              </h3>

              <p className="text-xs text-slate-500 leading-normal">
                Prise en charge dans les meilleurs délais selon votre localisation
                et la nature de votre demande.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-[#14a992]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#85ca51]/10 text-[#85ca51] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <h3 className="text-sm font-bold text-[#14a992] mb-1">
                Devis Transparent
              </h3>

              <p className="text-xs text-slate-500 leading-normal">
                Une estimation claire est proposée avant toute intervention,
                selon les travaux à réaliser.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-[#14a992]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#85ca51]/10 text-[#85ca51] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>

              <h3 className="text-sm font-bold text-[#14a992] mb-1">
                Équipe Qualifiée
              </h3>

              <p className="text-xs text-slate-500 leading-normal">
                Des techniciens expérimentés et équipés pour répondre à vos
                besoins en assainissement.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-[#14a992]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#85ca51]/10 text-[#85ca51] flex items-center justify-center mb-4">
                <Star className="w-5 h-5" />
              </div>

              <h3 className="text-sm font-bold text-[#14a992] mb-1">
                Diagnostic des Canalisations
              </h3>

              <p className="text-xs text-slate-500 leading-normal">
                Inspection par caméra lorsque cela est nécessaire afin
                d'identifier l'origine du problème.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}