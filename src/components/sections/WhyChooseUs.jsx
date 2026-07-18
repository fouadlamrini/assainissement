/**
 * src/components/sections/WhyChooseUs.jsx
 * 
 * Section "Pourquoi nous choisir ?".
 * Met en valeur les garanties légales et les forces de l'entreprise
 * avec une mise en page bi-colonne épurée et haut de gamme.
 */

import React from "react";
import * as Icons from "lucide-react";
import { Container, Section, SectionTitle, IconBox } from "../ui/BaseComponents";

// مصفوفة البيانات مدمجة محلياً لضمان عدم حدوث خطأ Import أو استدعاء مفقود
const advantagesData = [
  {
    icon: "Clock",
    title: "Intervention Express 30 min",
    description: "Nos camions hydrocureurs sont géolocalisés en temps réel pour intervenir chez vous au plus vite, 24h/7j."
  },
  {
    icon: "ShieldCheck",
    title: "Garantie Décennale & Agrément",
    description: "Toutes nos interventions sont couvertes par une assurance réglementaire. Agrément officiel pour l'assainissement."
  },
  {
    icon: "FileText",
    title: "Prix Fixe & Devis Gratuit",
    description: "Aucune surprise sur la facture. Un devis transparent et détaillé est rédigé gratuitement avant chaque prestation."
  },
  {
    icon: "Wrench",
    title: "Équipement Haute Technologie",
    description: "Inspections par caméra vidéo endoscopique HD et hydrocurage haute pression pour un débouchage durable."
  }
];

export default function WhyChooseUs() {
  return (
    <Section id="pourquoi-nous" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bloc de Gauche : Textes & Accroche Commerciale */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <SectionTitle
              subtitle="Une Confiance Absolue"
              title="Le Choix de la Sérénité Pour Vos Urgences"
              centered={false}
              className="mb-6"
            />
            <p className="text-slate-600 text-base leading-relaxed">
              Faire appel à notre équipe, c’est s’assurer l'intervention d'artisans dépanneurs rigoureux, équipés de technologies de pointe et respectueux des normes environnementales en vigueur.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hidden lg:block text-left">
              <h4 className="text-sm font-bold text-slate-950 mb-2">💡 Le Saviez-Vous ?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Toutes nos opérations de débouchage technique et de réhabilitation de réseaux sont couvertes par notre assurance décennale et font l’objet d'une traçabilité réglementaire stricte.
              </p>
            </div>
          </div>

          {/* Bloc de Droite : Grille des 4 Avantages Majeurs */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {advantagesData.map((advantage, index) => {
              // Extraction dynamique de l'icône, ou repli sur ShieldCheck si l'icône n'existe pas
              const TargetIcon = Icons[advantage.icon] || Icons.ShieldCheck;
              
              return (
                <div 
                  key={index}
                  className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300"
                >
                  <div className="mb-5">
                    <IconBox icon={TargetIcon} variant="blue" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}