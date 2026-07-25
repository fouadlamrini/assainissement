/**
 * src/components/sections/CtaSection.jsx
 *
 * Section d'appel à l'action secondaire (Devis / Appel rapide).
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";

export default function CtaSection() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#14a992] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Un projet ou une intervention en assainissement ?
        </h2>

        {/* Subtitle / Description */}
        <p
          className={`mt-4 text-base sm:text-lg text-emerald-50 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-150 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Contactez notre équipe pour obtenir des informations, demander un
          devis gratuit ou planifier une intervention en débouchage, curage,
          installation de STEP ou désinsectisation.
        </p>

        {/* Action Buttons */}
        <div
          className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ease-out transform ${
            isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-6"
          }`}
        >
          <a
            href="/#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#14a992] font-bold rounded-xl shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-300 text-center"
          >
            Demander un devis gratuit
          </a>

          <a
            href="tel:+212668029443"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#118f7c] hover:bg-[#0e7868] hover:scale-105 active:scale-95 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 text-center shadow-md"
          >
            Nous appeler
          </a>
        </div>
      </div>
    </section>
  );
}