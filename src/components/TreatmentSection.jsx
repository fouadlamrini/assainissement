/**
 * src/components/sections/TreatmentSection.jsx
 *
 * Section Désinsectisation et Traitement des Nuisibles.
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import { treatmentFeatures } from "../data/solutionsData";

export default function TreatmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="traitements"
      ref={sectionRef}
      className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Animé */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
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

        {/* Features & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Features Column */}
          <div className="lg:col-span-7 space-y-6">
            {treatmentFeatures.map((feat, idx) => {
              const delay = `${idx * 0.15 + 0.1}s`;

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-[#14a992]/60 hover:bg-slate-800 transition-all duration-500 ease-out transform ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? delay : "0s",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#14a992]/20 text-[#14a992] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 shadow-sm">
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
              );
            })}

            {/* Callout Box */}
            <div
              className={`p-4 rounded-xl bg-[#14a992]/10 border border-[#14a992]/30 text-slate-200 text-xs sm:text-sm transition-all duration-700 delay-500 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              💡 <strong>Notre engagement :</strong> Chaque intervention est
              réalisée après une évaluation des lieux afin d'appliquer une
              solution adaptée au type de nuisible et à votre environnement.
            </div>
          </div>

          {/* Visual Banner Column */}
          <div className="lg:col-span-5">
            <div
              className={`relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group transition-all duration-700 ease-out transform ${
                isVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-12 opacity-0 scale-95"
              }`}
            >
              <img
                src="/assets/protection.jpg"
                alt="Service de désinsectisation"
                className="w-full h-95 object-cover transition-transform duration-700 group-hover:scale-105"
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