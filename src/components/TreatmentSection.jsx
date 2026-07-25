import React from "react";
import { treatmentFeatures } from "../data/solutionsData";

export default function TreatmentSection() {
  return (
    <section
      id="traitements"
      className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#14a992] text-sm font-semibold tracking-wider uppercase">
            Désinsectisation
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 tracking-tight">
            Des solutions efficaces contre les insectes nuisibles
          </h2>

          <div className="w-16 h-1 bg-[#14a992] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Nous intervenons pour le traitement des insectes nuisibles dans les
            habitations, les locaux professionnels, les restaurants, les hôtels
            et les espaces collectifs avec des solutions adaptées à chaque
            situation.
          </p>
        </div>

        {/* Features & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Features */}
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
                    <h3 className="text-lg font-bold text-white">
                      {feat.title}
                    </h3>

                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-[#14a992]/10 border border-[#14a992]/30 text-slate-200 text-xs sm:text-sm">
              💡 <strong>Notre engagement :</strong> Chaque intervention est
              réalisée après une évaluation des lieux afin d'appliquer une
              solution adaptée au type de nuisible et à votre environnement.
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src="/assets/protection.jpg"
                alt="Service de désinsectisation"
                className="w-full h-95 object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-[#85ca51] text-white text-xs font-semibold rounded mb-2">
                  Désinsectisation
                </span>

                <h3 className="text-lg font-bold text-white">
                  Protection de vos espaces
                </h3>

                <p className="text-sm text-slate-200 mt-1">
                  Interventions pour les particuliers, les entreprises, les
                  commerces, les hôtels et les collectivités.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}