/**
 * src/components/sections/Statistics.jsx
 *
 * Section Statistique & Chiffres Clés.
 * Section des statistiques avec animation de comptage au défilement.
 */

import React, { useEffect, useRef, useState } from "react";
import { Container, Section } from "../ui/BaseComponents";

/**
 * Hook personnalisé pour l'animation de comptage (Count-Up)
 * @param {number} targetValue - La valeur cible à atteindre
 * @param {number} duration - Durée de l'animation en ms (défaut: 2000ms)
 * @param {boolean} start - Déclencheur de l'animation
 */
function useCountUp(targetValue, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Fonction d'assouplissement (easeOutExpo) pour une finition fluide
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(easeProgress * targetValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [targetValue, duration, start]);

  return count;
}

// Composant pour chaque chiffre statistique
function StatItem({ stat, isVisible, index }) {
  const count = useCountUp(stat.numberTarget, 2000, isVisible);

  // Formatage du chiffre (décimal ou entier)
  const formattedCount = stat.isDecimal
    ? count.toFixed(1)
    : Math.floor(count);

  // Calcul dynamique du délai d'apparition
  const delayMs = 100 + index * 150;

  return (
    <div
      className={`flex flex-col items-center space-y-2 group transition-all duration-700 ease-out transform hover:scale-105 ${
        isVisible
          ? "scale-100 opacity-100 translate-y-0"
          : "scale-75 opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${delayMs}ms` : "0ms",
      }}
      aria-label={`${stat.prefix}${stat.numberTarget}${stat.suffix} ${stat.label}`}
    >
      {/* Valeur numérique animée */}
      <span className="text-4xl sm:text-5xl font-black font-serif tracking-tight text-white drop-shadow-sm select-none">
        {stat.prefix}
        {formattedCount}
        {stat.suffix}
      </span>

      {/* Séparateur visuel */}
      <div className="h-0.5 w-8 bg-white/80 rounded-full transition-all duration-300 group-hover:w-12 group-hover:bg-white" />

      {/* Libellé de la statistique */}
      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-50 max-w-[180px]">
        {stat.label}
      </span>
    </div>
  );
}

const statisticsData = [
  {
    numberTarget: 1500,
    prefix: "+",
    suffix: "",
    isDecimal: false,
    label: "Interventions Réussies",
  },
  {
    numberTarget: 30,
    prefix: "",
    suffix: " min",
    isDecimal: false,
    label: "Temps de Réponse Moyen",
  },
  {
    numberTarget: 100,
    prefix: "",
    suffix: "%",
    isDecimal: false,
    label: "Devis Transparents",
  },
  {
    numberTarget: 4.9,
    prefix: "",
    suffix: "/5",
    isDecimal: true,
    label: "Note Google Maps",
  },
];

export default function Statistics() {
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
    <Section
      id="statistiques"
      ref={sectionRef}
      className="bg-gradient-to-r from-[#14a992] to-[#118f7c] text-white py-16 md:py-20 relative overflow-hidden"
    >
      <Container>
        {/* Grille responsive des statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {statisticsData.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}