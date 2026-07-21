import React from 'react';
import { treatmentFeatures } from '../data/solutionsData';

export default function TreatmentSection() {
  return (
    <section id="traitements" className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#14a992] text-sm font-semibold tracking-wider uppercase">
            Désinsectisation &amp; Hygiène Publique
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 tracking-tight">
            Préparation &amp; Application des Traitements Anti-Nuisibles
          </h2>
          <div className="w-16 h-1 bg-[#14a992] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Élimination efficace des blattes, cafards et vecteurs d'infections dans les réseaux de canalisations et regards d'assainissement.
          </p>
        </div>

        {/* Features & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Feature List */}
          <div className="lg:col-span-7 space-y-6">
            {treatmentFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-[#14a992]/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#14a992]/20 text-[#14a992] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-[#14a992]/10 border border-[#14a992]/30 text-slate-200 text-xs sm:text-sm">
              💡 <strong>Sécurité &amp; Conformité :</strong> Produits certifiés, application ciblée sans risque pour la santé des résidents ni détérioration des conduites.
            </div>
          </div>

          {/* Image Banner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                alt="Traitement Anti-Nuisibles et Désinfection"
                className="w-full h-[380px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-[#85ca51] text-white text-xs font-semibold rounded mb-1">
                  Protection Réseau
                </span>
                <p className="text-sm font-medium text-slate-200">
                  Interventions préventives et curatives dans les canalisations.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}