/**
 * src/components/sections/Statistics.jsx
 * 
 * Section Statistique & Chiffres Clés.
 * Interactive & Scroll-Triggered Count-Up + Staggered Pop Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import { Container, Section } from "../ui/BaseComponents";

// Custom Hook l-Count-Up Animation
function useCountUp(targetValue, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo) باش تـجي l-animation smooth f-l-akheer
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(easeProgress * targetValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, duration, start]);

  return count;
}

// Single Stat Counter Component
function StatItem({ stat, isVisible, index }) {
  const count = useCountUp(stat.numberTarget, 2000, isVisible);

  // Formatter l-chiffre 3la ḥsab l-format dyalu (Decimals aw Integers)
  const formattedCount = stat.isDecimal
    ? count.toFixed(1)
    : Math.floor(count);

  return (
    <div
      className={`flex flex-col items-center space-y-2 group transition-all duration-700 ease-out transform hover:scale-105 ${
        isVisible
          ? "scale-100 opacity-100 translate-y-0"
          : "scale-75 opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? stat.delay : "0s",
      }}
    >
      {/* Chiffre animé en typo Serif massive */}
      <span className="text-4xl sm:text-5xl font-black font-serif tracking-tight text-white drop-shadow-sm">
        {stat.prefix}
        {formattedCount}
        {stat.suffix}
      </span>

      {/* Séparateur minimaliste */}
      <div className="h-0.5 w-8 bg-white/80 rounded-full transition-all duration-300 group-hover:w-12 group-hover:bg-white" />

      {/* Intitulé clair et lisible */}
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
    delay: "0.1s",
  },
  {
    numberTarget: 30,
    prefix: "",
    suffix: " min",
    isDecimal: false,
    label: "Temps de Réponse Moyen",
    delay: "0.25s",
  },
  {
    numberTarget: 100,
    prefix: "",
    suffix: "%",
    isDecimal: false,
    label: "Devis Transparents",
    delay: "0.4s",
  },
  {
    numberTarget: 4.9,
    prefix: "",
    suffix: "/5",
    isDecimal: true,
    label: "Note Google Maps",
    delay: "0.55s",
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
        {/* Grille responsive des indicateurs de performance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {statisticsData.map((stat, index) => (
            <StatItem
              key={index}
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