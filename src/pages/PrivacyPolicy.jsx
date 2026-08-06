/**
 * src/pages/PrivacyPolicy.jsx
 *
 * Page de la Politique de Confidentialité.
 * Safe SSR Date Formatting & Defensive Data Mapping.
 */

import React, { useEffect, useState } from "react";
import PrivacySection from "../components/legal/PrivacySection";
import { privacySections } from "../data/privacyData";
import Footer from "../components/layout/Footer";
import FloatingTriggers from "../components/common/FloatingTriggers";

export default function PrivacyPolicy() {
  const [formattedDate, setFormattedDate] = useState("");

  // Éviter les erreurs d'hydratation (Hydration Mismatch) en SSR/CSR
  useEffect(() => {
    setFormattedDate(
      new Date().toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  const hasPrivacySections =
    Array.isArray(privacySections) && privacySections.length > 0;

  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="bg-[#14a992] text-white py-16 sm:py-20 shadow-inner">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Politique de confidentialité
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 font-medium">
              Dernière mise à jour :{" "}
              <span>{formattedDate || "Chargement..."}</span>
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
          {hasPrivacySections ? (
            privacySections.map((section, index) => (
              <PrivacySection
                key={section.id || section.title || index}
                {...section}
              />
            ))
          ) : (
            <div className="text-center py-12 text-slate-500">
              <p>Aucune information disponible pour le moment.</p>
            </div>
          )}
        </section>
      </div>

      {/* Footer & Floating Widgets */}
      <div>
        <Footer />
        <FloatingTriggers />
      </div>
    </main>
  );
}