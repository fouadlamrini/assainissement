/**
 * src/components/sections/ContactCTA.jsx
 *
 * Section d'appel à l'action.
 * Encourage les visiteurs à prendre contact pour une intervention
 * ou une demande d'information.
 */

import React from "react";
import { ShieldCheck, Zap } from "lucide-react";
import {
  Container,
  Section,
  PhoneButton,
  WhatsAppButton,
} from "../ui/BaseComponents";

export default function ContactCTA() {
  return (
    <Section id="contact" className="py-0 md:py-0 bg-white overflow-visible">
      <Container className="relative z-10">
        <div className="bg-slate-950 rounded-3xl p-8 md:p-14 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden text-white -translate-y-12">
          {/* Effets décoratifs */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#14a992]/30 blur-3xl" />
            <div className="absolute bottom-[-30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#85ca51]/20 blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texte */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#14a992]/10 border border-[#14a992]/30 text-[#14a992] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 fill-[#14a992]" />
                Contactez-nous
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight leading-tight">
                Besoin d'une intervention
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#14a992] to-[#85ca51] bg-clip-text text-transparent">
                  ou d'un devis ?
                </span>
              </h2>

              <p className="text-slate-400 text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Notre équipe est à votre disposition pour répondre à vos
                questions, évaluer votre situation et organiser une intervention
                adaptée à vos besoins.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-slate-400 pt-4">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#85ca51]" />
                  Équipe qualifiée
                </span>

                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#85ca51]" />
                  Devis selon votre demande
                </span>
              </div>
            </div>

            {/* Boutons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 w-full justify-center">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-xs font-bold text-center lg:text-left text-slate-400 tracking-wider uppercase block">
                  📞 Téléphone
                </span>

                <PhoneButton
                  size="lg"
                  className="w-full justify-center text-center !bg-[#85ca51] hover:!bg-[#74b346] !text-white border-none shadow-xl shadow-[#85ca51]/30 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <span className="text-xs font-bold text-center lg:text-left text-slate-400 tracking-wider uppercase block">
                  💬 WhatsApp
                </span>

                <WhatsAppButton
                  size="lg"
                  className="w-full justify-center text-center !bg-[#14a992] hover:!bg-[#108c79] !text-white border-none shadow-xl shadow-[#14a992]/30 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}