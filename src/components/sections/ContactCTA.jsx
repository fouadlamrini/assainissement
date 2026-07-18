/**
 * src/components/sections/ContactCTA.jsx
 * 
 * Section d'engagement final (Call to Action).
 * Idéalement placée en fin de parcours utilisateur, elle combine un design
 * de type vitrine de luxe avec des accès d'urgence clairs et instantanés.
 */

import React from "react";
import { Phone, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { Container, Section, PhoneButton, WhatsAppButton } from "../ui/BaseComponents";
import { companyConfig } from "../../data/siteData";

export default function ContactCTA() {
  return (
    <Section id="contact" className="py-0 md:py-0 bg-white overflow-visible">
      <Container className="relative z-10">
        {/* Boîtier principal d'appel en dégradé de prestige */}
        <div className="bg-slate-950 rounded-3xl p-8 md:p-14 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden text-white -translate-y-12">
          
          {/* Cercles décoratifs premium de fond */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/30 blur-3xl" />
            <div className="absolute bottom-[-30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-600/20 blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Bloc d'explications textuelles */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 fill-blue-400 animate-pulse" />
                Intervention Immédiate 24h/7j
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight leading-tight">
                Besoin d'un dépannage <br className="hidden sm:inline" />
                <span className="text-blue-400">ou d'un devis gratuit ?</span>
              </h2>
              
              <p className="text-slate-400 text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Nos techniciens d'astreinte sont prêts à partir avec leur équipement hydrocureur. Ne laissez pas un refoulement aggraver la situation. Appelez-nous maintenant.
              </p>

              {/* Badges de réassurance technique secondaires */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-slate-400 pt-4">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Assurance Décennale Agréée
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Devis écrit 100% Gratuit
                </span>
              </div>
            </div>

            {/* Bloc des boutons de conversion massive (Droite) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 w-full justify-center">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-xs font-bold text-center lg:text-left text-slate-400 tracking-wider uppercase block">
                  📞 Ligne Urgence Principale :
                </span>
                <PhoneButton size="lg" className="w-full justify-center text-center shadow-xl shadow-blue-500/10" />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <span className="text-xs font-bold text-center lg:text-left text-slate-400 tracking-wider uppercase block">
                  💬 Échange WhatsApp instantané :
                </span>
                <WhatsAppButton size="lg" className="w-full justify-center text-center shadow-xl shadow-emerald-500/10" />
              </div>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}