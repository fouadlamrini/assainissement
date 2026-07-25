/**
 * src/components/sections/PageHeader.jsx
 *
 * Header principal de la page avec animations d'entrée.
 * Interactive & Scroll/Mount Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";

export default function PageHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headerRef}
      className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden"
    >
      {/* Background Image with Overlay & Smooth Zoom */}
      <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Assainissement et Plomberie Industrielle"
          className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
            isVisible ? "scale-105" : "scale-100"
          }`}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Radial Light Effect & Bottom Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#14a992]/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#14a992]/20 text-[#14a992] border border-[#14a992]/30 mb-6 backdrop-blur-sm hover:bg-[#14a992]/30 transition-colors duration-300">
            Solutions Techniques &amp; Assainissement
          </span>
        </div>

        {/* Title */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto transition-all duration-700 delay-150 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Matériel, Installation STEP &amp; Traitements Anti-Nuisibles
        </h1>

        {/* Paragraph */}
        <p
          className={`mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Découvrez nos équipements spécialisés pour la plomberie lourde, notre
          expertise dans les stations d’épuration (STEP), et nos solutions
          efficaces de traitement contre les insectes et nuisibles de
          canalisation.
        </p>
      </div>
    </div>
  );
}