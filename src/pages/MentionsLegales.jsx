import Footer from "../components/layout/Footer";
import FloatingTriggers from "../components/common/FloatingTriggers";

import PrivacySection from "../components/legal/PrivacySection";
import { legalSections } from "../data/legalData";

export default function MentionsLegales() {
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-[#14a992] text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Mentions légales
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        {legalSections.map((section) => (
          <PrivacySection
            key={section.title}
            {...section}
          />
        ))}
      </section>

      <Footer />
      <FloatingTriggers />
    </main>
  );
}