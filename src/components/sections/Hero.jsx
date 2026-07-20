/**
 * src/components/sections/Hero.jsx
 *
 * Section Hero Premium orientée conversion maximale.
 * Intègre une image de fond via CDN et corrige l'erreur d'importation SEO.
 */

import React from "react";
import { ShieldCheck, Clock, Award, Star } from "lucide-react";
import { Container, PhoneButton, WhatsAppButton } from "../ui/BaseComponents";
import { companyConfig, assetsConfig } from "../../data/siteData"; // تم إصلاح الاستيراد هنا

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-4 pb-20 md:pt-4 md:pb-32 bg-slate-900 overflow-hidden text-white"
    >
      {/* خلفية صورة الـ CDN مع طبقة تظليل داكنة فخمة */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <img
          src={assetsConfig.heroBg}
          alt="Intervention Assainissement"
          className="w-full h-full object-cover"
        />
      </div>

      {/* تأثير إضاءة ملون خلفي */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-600/20 blur-2xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Bloc Texte & Actions Principal */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag d'urgence supérieur */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Urgence Canalisations Bouchées 24h/7j
            </div>

            {/* Titre H1 Optimisé SEO & Impact Visuel */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-[1.1] mb-6">
              Débouchage & Curage <br />
         <span className="relative inline-block bg-gradient-to-r from-[#14a992] via-[#35b183] via-[#5fc067] to-[#85ca51] bg-clip-text text-transparent">
  de Canalisation
</span>
            </h1>

            {/* Description du service */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Intervention ultra-rapide en{" "}
              <strong className="text-white font-semibold">30 minutes</strong>{" "}
              pour tout problème d'engorgement, d'assainissement ou de fosse
              septique. Inspecteurs agréés et camions hydrocureurs disponibles
              jour et nuit.
            </p>

            {/* Boutons d'Action Clés (Focus Conversion) */}
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

            {/* Évaluation & Preuve Sociale Directe */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-6 border-t border-slate-800 max-w-xl lg:max-w-none">
          
              <p className="text-sm font-medium text-slate-300 text-center sm:text-left">
                Plus de 10 clients satisfaits partout au Maroc
              </p>
            </div>
          </div>

          {/* Bloc Graphique Droite - Grille d'avantages Premium */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 lg:pl-4 text-slate-900">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex flex-col justify-between hover:border-blue-200 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-950 mb-1">
                  Arrivée en 30 Min
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Camions hydrocureurs géolocalisés en temps réel.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex flex-col justify-between hover:border-emerald-200 transition-all duration-300 ">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-950 mb-1">
                  Prix Fixe & Transparent
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Devis gratuit écrit obligatoirement fourni avant travaux.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex flex-col justify-between hover:border-blue-200 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-950 mb-1">
                  Agrément National
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Assurance décennale et respect strict de l'environnement.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex flex-col justify-between hover:border-amber-200 transition-all duration-300 ">
              <div className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded w-max mb-4 uppercase tracking-wider">
                Caméra HD
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-950 mb-1">
                  Inspection Vidéo
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Localisation millimétrique des bouchons ou cassures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
