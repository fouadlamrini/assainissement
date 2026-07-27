import PrivacySection from "../components/legal/PrivacySection";
import { privacySections } from "../data/privacyData";
import Footer from "../components/layout/Footer";
import FloatingTriggers from "../components/common/FloatingTriggers";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white">

      <section className="bg-[#14a992] text-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Politique de confidentialité
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Dernière mise à jour : 27 juillet 2026
          </p>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        {privacySections.map((section) => (
          <PrivacySection
            key={section.title}
            {...section}
          />
        ))}

      </section>
  {/* Pied de page institutionnel */}
      <Footer />

      {/* Éléments d'action persistants flottants */}
      <FloatingTriggers />
    </main>
  );
}