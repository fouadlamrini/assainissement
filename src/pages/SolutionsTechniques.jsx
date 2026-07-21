import React from 'react';
import PageHeader from '../components/PageHeader';
import EquipmentSection from '../components/EquipmentSection';
import StepSection from '../components/StepSection';
import TreatmentSection from '../components/TreatmentSection';
import CtaSection from '../components/CtaSection';
import FloatingTriggers from "../components/common/FloatingTriggers";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
export default function SolutionsTechniques() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero / Header Section */}
       <Navbar />
      <PageHeader />

      {/* 2. Matériel de Plomberie & Assainissement */}
      <EquipmentSection />

      {/* 3. Installation des Stations d'Épuration (STEP) */}
      <StepSection />

      {/* 4. Préparation & Application Traitement Anti-Nuisibles (Sara9 Zit) */}
      <TreatmentSection />

      {/* 5. Call To Action (Devis / Contact) */}
      <CtaSection />
        {/* Pied de page institutionnel */}
            <Footer />
      
            {/* Éléments d'action persistants flottants */}
            <FloatingTriggers />
    </main>
  );
}