/**
 * src/pages/SolutionsTechniques.jsx
 *
 * Page de présentation des Solutions Techniques & Équipements.
 * Contient le matériel d'assainissement, stations d'épuration (STEP),
 * et traitements anti-nuisibles.
 */

import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import PageHeader from "../components/sections/PageHeader";
import EquipmentSection from "../components/sections/EquipmentSection";
import StepSection from "../components/sections/StepSection";
import TreatmentSection from "../components/sections/TreatmentSection";
import CtaSection from "../components/sections/CtaSection";
import Footer from "../components/layout/Footer";
import FloatingTriggers from "../components/common/FloatingTriggers";

// SEO Metadata spécifique aux Solutions Techniques
const solutionsSeoConfig = {
  title: "Solutions Techniques & Équipements - Assainissement & Traitement",
  description:
    "Découvrez nos équipements haute pression, installation de micro-stations d'épuration (STEP) et solutions efficaces de traitement anti-nuisibles.",
  url: "https://assainissement-theta.vercel.app/solutions-techniques",
};

export default function SolutionsTechniques() {
  // Injection des métadonnées SEO pour la page
  useEffect(() => {
    document.title = solutionsSeoConfig.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = solutionsSeoConfig.description;
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.href = solutionsSeoConfig.url;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#14a992] selection:text-white flex flex-col justify-between">
      {/* Navigation globale */}
      <Navbar />

      {/* Main sémantique regroupant le flux des sections techniques */}
      <main id="contenu-principal" className="flex-grow">
        {/* 1. Hero / Header Section */}
        <PageHeader />

        {/* 2. Matériel de Plomberie & Assainissement */}
        <EquipmentSection />

        {/* 3. Installation des Stations d'Épuration (STEP) */}
        <StepSection />

        {/* 4. Préparation & Application Traitement Anti-Nuisibles */}
        <TreatmentSection />

        {/* 5. Call To Action (Devis / Contact) */}
        <CtaSection />
      </main>

      {/* Pied de page institutionnel */}
      <Footer />

      {/* Éléments d'action persistants flottants (Appel & WhatsApp) */}
      <FloatingTriggers />
    </div>
  );
}